import { addMessage, getHistory } from "../memory/history";
import { buildPrompt } from "../prompt/prompt-builder";
import { askGemini } from "../providers/gemini.provider";

export async function chat(
  sessionId: string,
  message: string
): Promise<string> {
  addMessage(sessionId, {
    role: "user",
    content: message,
  });

  const history = getHistory(sessionId);

  const prompt = buildPrompt(message, history);

  const reply = await askGemini(prompt);

  addMessage(sessionId, {
    role: "assistant",
    content: reply,
  });

  return reply;
}