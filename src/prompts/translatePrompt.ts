import { ITranslatePrompt } from "../interfaces/translateInterfaces";


export const translatePromptGenerator = ({language, text, context}: ITranslatePrompt) =>  `

You are a professional translator, 

${context ? "This is the context to help you translate better:" + context : ''}

translate the seguent text in ${language}, keep the format as it is written. 

${text}

`