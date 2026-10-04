"use client";

import RevealSection from "@/components/ui/RevealSection";

import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

export default function About() {
  return (
    <RevealSection
      id="about"
      className="relative overflow-hidden py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <AboutContent />
        <AboutStats />
      </div>
    </RevealSection>
  );
}