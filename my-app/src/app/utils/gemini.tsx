import { GoogleGenerativeAI } from "@google/generative-ai";


// Access your API key as an environment variable (see "Set up your API key" above)
const API_Key = String(process.env.API_KEY)

console.log(API_Key)
const genAI = new GoogleGenerativeAI(API_Key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const runPrompt = async () => {
  const prompt = "Am I good match? These are my previous areas of work: ReactJS, Java Springboot, NextJS, "
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}
