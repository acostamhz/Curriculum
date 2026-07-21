"use client";

import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        <AboutContent />
        <AboutStats />
      </div>
    </section>
  );
}