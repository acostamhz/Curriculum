"use client";

import RevealSection from "@/components/ui/RevealSection";

import { usePortfolio } from "@/i18n/LanguageProvider";

import StackCategory from "./StackCategory";

export default function Stack() {
  const portfolio = usePortfolio();

  return (
    <RevealSection
      id="stack"
      className="relative py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            {portfolio.stack.title}
          </span>

          <h2 className="mt-6 text-5xl font-black lg:text-6xl">
            {portfolio.stack.heading}
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            {portfolio.stack.description}
          </p>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {portfolio.stack.categories.map((category) => (
            <StackCategory
              key={category.name}
              category={category}
            />
          ))}
        </div>

      </div>
    </RevealSection>
  );
}