import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

// El SDK busca GOOGLE_GENERATIVE_AI_API_KEY por defecto; aquí se usa GEMINI_API_KEY como en el resto del proyecto.
const google = createGoogleGenerativeAI({
  apiKey:
    process.env.GEMINI_API_KEY ??
    process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function streamGemini(
  prompt: string,
  onFinish?: (text: string) => void,
) {
  return streamText({
    model: google("gemini-3.5-flash-lite"),
    prompt,
    maxOutputTokens: 800,
    onFinish: ({ text }) => onFinish?.(text),
  });
}