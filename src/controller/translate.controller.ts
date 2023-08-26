
import { ITranslatePromptGeneratorProps } from "../interfaces/translateInterfaces";
import { translatePromptGenerator } from "../prompts/translatePrompt"
import {callGPT} from "../CallGPT"
import { OpenAIModelID } from "../interfaces/GptInterfaces";


export async function translate({languages, text, context, apiKey}: ITranslatePromptGeneratorProps) {
    
    const prompts = languages.map(language => translatePromptGenerator({language, text, context}))
    
    try {
        const GPTTransltaionPromises = prompts.map((prompt) => callGPT(OpenAIModelID.GPT_3_5, prompt, apiKey))
        
        const GPTTranslatedTexts = await Promise.all(GPTTransltaionPromises);
        
        return GPTTranslatedTexts;
    } catch(err) {
        console.error(err)
    }

}
