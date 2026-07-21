"use client";

import TimelineHeader from "./TimelineHeader";
import TimelineItem from "./TimelineItem";

import { portfolio } from "@/data/portfolio";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <TimelineHeader />

        <div className="mt-20 relative">

          <div className="absolute left-3 top-0 h-full w-px bg-white/10" />

          <div className="space-y-16">
            {portfolio.timeline.items.map((item) => (
              <TimelineItem
                key={item.year}
                item={item}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}