"use client";

import { usePortfolio } from "@/i18n/LanguageProvider";

export default function TechMarquee() {
  const portfolio = usePortfolio();
  const technologies = Array.from(
    new Set(portfolio.stack.categories.flatMap((category) => category.items)),
  );

  return (
    <div
      className="tech-marquee w-full overflow-hidden"
      aria-label={portfolio.stack.title}
    >
      <div className="tech-marquee-track">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-3 pr-3"
          >
            {technologies.map((technology) => (
              <li
                key={technology}
                className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-muted-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
