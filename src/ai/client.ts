import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({
  apiKey:
    process.env.GEMINI_API_KEY ??
    process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});