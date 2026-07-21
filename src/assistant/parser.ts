import { Tool } from "./tools";

const TOOL_REGEX =
  /\[\[tool:([a-zA-Z0-9_-]+)\]\]/g;

export interface ParsedTools {
  text: string;
  tools: Tool[];
}

export function parseTools(
  response: string
): ParsedTools {
  const tools: Tool[] = [];

  const text = response.replace(
    TOOL_REGEX,
    (_, tool) => {
      if (
        Object.values(Tool).includes(
          tool as Tool
        )
      ) {
        tools.push(tool as Tool);
      }

      return "";
    }
  );

  return {
    text: text.trim(),
    tools,
  };
}