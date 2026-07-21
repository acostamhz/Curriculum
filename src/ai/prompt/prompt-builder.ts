import { ChatMessage } from "../memory/types";
import { systemPrompt } from "../system-prompt";
import { buildPortfolioContext } from "../portfolio-context";

export function buildPrompt(
  message: string,
  history: ChatMessage[]
): string {
  const historyText = history
    .map(
      (item) => `
${item.role.toUpperCase()}:

${item.content}
`
    )
    .join("\n");

  return `
${systemPrompt}

${buildPortfolioContext()}

Conversation history:

${historyText}

Current user question:

${message}
`;
}