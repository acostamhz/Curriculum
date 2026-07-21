"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroPhoto from "./HeroPhoto";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <HeroBackground />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-20 px-6 py-32 lg:grid-cols-2">
        <HeroContent />
        <HeroPhoto />
      </div>
    </section>
  );
}