import { ai } from "../client";

export async function askGemini(
  prompt: string
): Promise<string> {
  const response =
    await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: { maxOutputTokens: 800 },
    });

  return response.text ?? "";
}