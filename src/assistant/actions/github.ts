import { portfolio } from "@/data/portfolio";

export function openGithub() {
  window.open(
    portfolio.github,
    "_blank",
    "noopener,noreferrer"
  );
}