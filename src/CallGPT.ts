import { Configuration, OpenAIApi } from "openai";
import { Message, OpenAIModelID } from "./interfaces/GptInterfaces";

export const callGPT = async (model: OpenAIModelID, input: string, apiKey: string ) => {
    const configuration = new Configuration({
        apiKey
      });
    const openai = new OpenAIApi(configuration);

    const messages: Message[] = [];

    messages.push({ role: "user", content: input });

    try {

      const completion: any = await openai.createChatCompletion({
        model: model,
        messages: messages,
      });

      const completion_text = completion.data.choices[0].message.content;

      return completion_text;

    } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
    }
}

