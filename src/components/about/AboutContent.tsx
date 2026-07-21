"use client";

import { motion } from "framer-motion";

import { portfolio } from "@/data/portfolio";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
        {portfolio.about.title}
      </span>

      <h2 className="mt-6 max-w-xl text-5xl font-black leading-tight lg:text-6xl">
        {portfolio.about.heading}
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
        {portfolio.about.description}
      </p>
    </motion.div>
  );
}