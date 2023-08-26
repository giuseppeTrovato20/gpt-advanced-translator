import { ITranslatePrompt } from "../interfaces/translateInterfaces";


export const translatePromptGenerator = ({language, text, context}: ITranslatePrompt) =>  `

You are a professional translator, translate the text delimited by ### in ${language}, keep the format as it is written. 
When translating do not write again this delimiters ###.
${context ? "This is the context to help you translate better:" + context : ''}

###
${text}
###
`