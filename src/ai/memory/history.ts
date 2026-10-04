import { ChatMessage } from "./types";

const conversations = new Map<string, ChatMessage[]>();

const MAX_HISTORY = 10;
const MAX_SESSIONS = 500;
const MAX_CONTENT_LENGTH = 4000;

export function getHistory(sessionId: string): ChatMessage[] {
  return conversations.get(sessionId) ?? [];
}

export function addMessage(
  sessionId: string,
  message: ChatMessage
): void {
  const history = conversations.get(sessionId) ?? [];

  history.push({
    ...message,
    content: message.content.slice(0, MAX_CONTENT_LENGTH),
  });

  if (history.length > MAX_HISTORY) {
    history.shift();
  }

  // Reinsertar mueve la sesión al final; al superar el límite se descarta la más antigua.
  conversations.delete(sessionId);
  conversations.set(sessionId, history);

  if (conversations.size > MAX_SESSIONS) {
    const oldest = conversations.keys().next().value;
    if (oldest !== undefined) conversations.delete(oldest);
  }
}

export function clearHistory(sessionId: string): void {
  conversations.delete(sessionId);
}