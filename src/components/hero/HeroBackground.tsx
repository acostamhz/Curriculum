"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Base */}
      <div className="absolute inset-0 bg-[#09090B]" />

      {/* Main blue glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[42%]
          top-[48%]
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/15
          blur-[180px]
        "
      />

      {/* Cyan glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-180px]
          top-40
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-400
          blur-[160px]
        "
      />

      {/* Purple glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-220px]
          left-[-120px]
          h-[480px]
          w-[480px]
          rounded-full
          bg-violet-500
          blur-[180px]
        "
      />

      {/* Noise */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          mix-blend-soft-light
          bg-[url('/noise.png')]
        "
      />
    </div>
  );
}