import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export async function streamGemini(prompt: string) {
  return streamText({
    model: google("gemini-3.5-flash-lite"),
    prompt,
  });
}