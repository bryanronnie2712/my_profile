import { GoogleGenerativeAI } from "@google/generative-ai";


// Access your API key as an environment variable (see "Set up your API key" above)
const API_Key = String(process.env.NEXT_PUBLIC_API_KEY)
const genAI = new GoogleGenerativeAI(API_Key);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash"});

export const runPrompt = async (query: string) => {
  const prompt = query || "return no query given error"
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}
