import { Tool } from "./tools";

import { openGithub } from "./actions/github";
import { openLinkedin } from "./actions/linkedin";
import { downloadCV } from "./actions/cv";
import { scrollToSection } from "./actions/scroll";

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

    case Tool.GO_PROJECTS:
      scrollToSection("projects");
      break;

    case Tool.GO_CONTACT:
      scrollToSection("contact");
      break;

    case Tool.GO_ABOUT:
      scrollToSection("about");
      break;

    case Tool.GO_STACK:
      scrollToSection("stack");
      break;

    default:
      console.warn(`Unknown tool: ${tool}`);
  }
}