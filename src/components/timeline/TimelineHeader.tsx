"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function TimelineHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
        {portfolio.timeline.title}
      </span>

      <h2 className="mt-6 text-5xl font-black leading-tight lg:text-6xl">
        {portfolio.timeline.heading}
      </h2>

      <p className="mt-8 text-lg leading-8 text-zinc-400">
        {portfolio.timeline.description}
      </p>
    </motion.div>
  );
}