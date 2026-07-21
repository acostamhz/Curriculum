"use client";

import { motion } from "framer-motion";

interface Props {
  category: {
    name: string;
    items: string[];
  };
}

export default function StackCategory({ category }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <h3 className="mb-6 text-2xl font-bold">
        {category.name}
      </h3>

      <div className="flex flex-wrap gap-3">
        {category.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500/40 hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}