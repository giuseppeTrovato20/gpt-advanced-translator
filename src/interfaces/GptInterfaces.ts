export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "1");

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';

export interface OpenAIModel {
    id: string;
    name: string;
    maxLength: number; // maximum length of a message
    tokenLimit: number;
}
  
export enum OpenAIModelID {
    GPT_3_5 = 'gpt-3.5-turbo-16k',
    GPT_4 = 'gpt-4',
    //GPT_3_5_AZ = 'gpt-35-turbo',
    //GPT_4_32K = 'gpt-4-32k',
}
  
  // in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;
  
  export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
    [OpenAIModelID.GPT_3_5]: {
      id: OpenAIModelID.GPT_3_5,
      name: 'GPT-3.5',
      maxLength: 12000,
      tokenLimit: 4000,
    },
/*     [OpenAIModelID.GPT_3_5_AZ]: {
      id: OpenAIModelID.GPT_3_5_AZ,
      name: 'GPT-3.5',
      maxLength: 12000,
      tokenLimit: 4000,
    }, */
    [OpenAIModelID.GPT_4]: {
      id: OpenAIModelID.GPT_4,
      name: 'GPT-4',
      maxLength: 24000,
      tokenLimit: 8000,
    },
/*     [OpenAIModelID.GPT_4_32K]: {
      id: OpenAIModelID.GPT_4_32K,
      name: 'GPT-4-32K',
      maxLength: 96000,
      tokenLimit: 32000,
    }, */
};
  

export interface Message {
  role: Role;
  content: string;
}

export type Role = 'assistant' | 'user';

export interface ChatBody {
  model: OpenAIModel;
  messages: Message[];
  key: string;
  prompt: string;
  temperature: number;
}


