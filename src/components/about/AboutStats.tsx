"use client";

import { motion } from "framer-motion";

import { portfolio } from "@/data/portfolio";

import StatCard from "./StatCard";

export default function AboutStats() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="grid gap-6 sm:grid-cols-2"
    >
      {portfolio.about.stats.map((stat) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </motion.div>
  );
}