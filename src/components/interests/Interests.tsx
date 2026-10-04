"use client";

import RevealSection from "@/components/ui/RevealSection";

import { usePortfolio } from "@/i18n/LanguageProvider";

import InterestsHeader from "./InterestsHeader";
import InterestsGrid from "./InterestsGrid";

export default function Interests() {
  const portfolio = usePortfolio();

  return (
    <RevealSection
      id="interests"
      className="relative py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
      <InterestsHeader
        title={portfolio.interests.title}
        heading={portfolio.interests.heading}
        description={portfolio.interests.description}
      />

      <InterestsGrid items={portfolio.interests.items} />
      </div>
    </RevealSection>
  );
}