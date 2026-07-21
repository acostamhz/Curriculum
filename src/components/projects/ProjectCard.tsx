"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import TechBadge from "./TechBadge";

interface Props {
  project: {
    title: string;
    description: string;
    image: string;
    github: string;
    demo: string;
    technologies: string[];
  };

  index: number;
}

export default function ProjectCard({
  project,
  index,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        scale: 1.015,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.12,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-blue-500/30
        hover:shadow-[0_20px_80px_rgba(59,130,246,0.15)]
      "
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/projects/placeholder.png"}
          alt={project.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
          className="
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      </div>

      <div className="p-8">
        <div className="mb-5 flex items-center justify-between">
          <span
            className="
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-3
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-blue-400
            "
          >
            Featured Project
          </span>
        </div>

        <h3
          className="
            text-2xl
            font-bold
            transition-colors
            duration-300
            group-hover:text-blue-400
          "
        >
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge
              key={tech}
              text={tech}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              text-sm
              font-medium
              transition-all
              duration-300
              hover:border-blue-500
              hover:bg-blue-500/10
            "
          >
            <FaGithub className="h-[18px] w-[18px]" />

            GitHub
          </Link>

          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-blue-600
              px-5
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-blue-500
            "
          >
            Live Demo

            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}