import bodyParser from "body-parser";
import express from "express";
import path from 'path'

import { translate } from "./controller/translate.controller";




const app = express();
//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const validate = (req, res, next) => {
  if(!Array.isArray(req.body.languages) || req.body.languages.length === 0) 
    return res.status(400).send('Seleziona almeno una lingua in cui tradurre.')

  if(typeof req.body.text !== 'string' || req.body.text.length === 0)
    return res.status(400).send('Passa un testo da tradurre.')

  next();
}

app.post('/translate', validate, async function(req, res) {

  const {languages, text, context, apiKey} = req.body;

  try {
    const translations = await translate({
      languages, text, context, apiKey
    })
    
    const resObj = {}

    languages.forEach((language, index) => {
      resObj[language] = translations[index]
    })

    res.status(200).send(resObj)
  } catch(err) {
    res.status(500).send('error del server')
  }
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
console.log("listening on : http://localhost:6069")
app.listen(6069);

