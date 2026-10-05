import { Tool } from "./tools";

import { openGithub } from "./actions/github";
import { openLinkedin } from "./actions/linkedin";
import { downloadCV } from "./actions/cv";

export function dispatchTool(tool: Tool) {
  switch (tool) {
    case Tool.OPEN_GITHUB:
      openGithub();
      break;

    case Tool.OPEN_LINKEDIN:
      openLinkedin();
      break;

    case Tool.DOWNLOAD_CV:
      downloadCV();
      break;

    // La IA no debe mover la página: las acciones de navegación se ignoran.
    case Tool.GO_PROJECTS:
    case Tool.GO_CONTACT:
    case Tool.GO_ABOUT:
    case Tool.GO_STACK:
      break;

    default:
      console.warn(`Unknown tool: ${tool}`);
  }
}