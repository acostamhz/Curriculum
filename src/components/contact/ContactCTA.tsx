"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-20 flex justify-center"
    >
      <a
        href="mailto:acostadevices@icloud.com"
        className="inline-block"
      >
        <Button
          size="lg"
          className="rounded-full px-10 py-7 text-base"
        >
          Let's work together
        </Button>
      </a>
    </motion.div>
  );
}