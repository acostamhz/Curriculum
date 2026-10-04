"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

export default function RevealSection(props: ComponentProps<typeof motion.section>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    />
  );
}
