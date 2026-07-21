import { dispatchTool } from "./dispatcher";
import { Tool } from "./tools";

export function runTools(
  tools: Tool[]
) {
  for (const tool of tools) {
    dispatchTool(tool);
  }
}