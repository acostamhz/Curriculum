"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
        {portfolio.contact.title}
      </span>

      <h2 className="mt-6 text-5xl font-black lg:text-6xl">
        {portfolio.contact.heading}
      </h2>

      <p className="mt-8 text-lg leading-8 text-zinc-400">
        {portfolio.contact.description}
      </p>
    </motion.div>
  );
}