



type language = 'Italian' | 'English' | 'Spanish' | 'French' | 'German'


export interface ITranslatePromptGeneratorProps {
    languages: language[]
    text: string
    apiKey: string
    context?: string,
}

export interface ITranslatePrompt {
    language: language
    text: string
    context?: string
}