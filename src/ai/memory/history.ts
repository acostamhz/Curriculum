import { ChatMessage } from "./types";

const conversations = new Map<string, ChatMessage[]>();

const MAX_HISTORY = 10;

export function getHistory(sessionId: string): ChatMessage[] {
  return conversations.get(sessionId) ?? [];
}

export function addMessage(
  sessionId: string,
  message: ChatMessage
): void {
  const history = conversations.get(sessionId) ?? [];

  history.push(message);

  if (history.length > MAX_HISTORY) {
    history.shift();
  }

  conversations.set(sessionId, history);
}

export function clearHistory(sessionId: string): void {
  conversations.delete(sessionId);
}