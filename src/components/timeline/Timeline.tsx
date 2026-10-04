"use client";

import RevealSection from "@/components/ui/RevealSection";

import TimelineHeader from "./TimelineHeader";
import TimelineItem from "./TimelineItem";

import { usePortfolio } from "@/i18n/LanguageProvider";

export default function Timeline() {
  const portfolio = usePortfolio();

  return (
    <RevealSection
      id="timeline"
      className="relative py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <TimelineHeader />

        <div className="relative mt-12">

          <div className="absolute left-3 top-0 h-full w-px bg-white/10" />

          <div className="space-y-10">
            {portfolio.timeline.items.map((item) => (
              <TimelineItem
                key={item.year}
                item={item}
              />
            ))}
          </div>

        </div>

      </div>
    </RevealSection>
  );
}