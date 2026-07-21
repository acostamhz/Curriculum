import { ai } from "../client";

export async function askGemini(
  prompt: string
): Promise<string> {
  const response =
    await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

  return response.text ?? "";
}