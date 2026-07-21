"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  item: {
    year: string;
    title: string;
    description: string;
  };
}

export default function TimelineItem({
  item,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative pl-14"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-3 flex h-6 w-6 items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
      </div>

      {/* Card */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          {item.year}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-4 leading-8 text-zinc-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}