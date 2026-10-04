"use client";

import HeroContent from "./HeroContent";
import HeroPhoto from "./HeroPhoto";
import TechMarquee from "./TechMarquee";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden pt-32">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-6 pb-20 pt-16 text-center">
        <HeroContent />
        <TechMarquee />
        <HeroPhoto />
      </div>
    </section>
  );
}