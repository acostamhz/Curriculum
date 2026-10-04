"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "@/i18n/LanguageProvider";

export default function ProjectsHeader() {
  const portfolio = usePortfolio();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
        {portfolio.projects.title}
      </span>

      <h2 className="mt-6 text-5xl font-black lg:text-6xl">
        {portfolio.projects.heading}
      </h2>

      <p className="mt-8 text-lg leading-8 text-zinc-400">
        {portfolio.projects.description}
      </p>
    </motion.div>
  );
}