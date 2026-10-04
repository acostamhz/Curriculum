import { addMessage, getHistory } from "../memory/history";
import { buildPrompt } from "../prompt/prompt-builder";
import { askGemini } from "../providers/gemini.provider";

export async function chat(
  sessionId: string,
  message: string,
  language: "en" | "es" = "en",
): Promise<string> {
  addMessage(sessionId, {
    role: "user",
    content: message,
  });

  const history = getHistory(sessionId);

  const prompt = await buildPrompt(
    message,
    history,
    language,
  );

  const reply = await askGemini(prompt);

  addMessage(sessionId, {
    role: "assistant",
    content: reply,
  });

  return reply;
}