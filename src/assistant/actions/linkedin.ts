import { portfolio } from "@/data/portfolio";

export function openLinkedin() {
  window.open(
    portfolio.linkedin,
    "_blank",
    "noopener,noreferrer"
  );
}