"use client";

import RevealSection from "@/components/ui/RevealSection";

import { usePortfolio } from "@/i18n/LanguageProvider";

import ProjectsHeader from "./ProjectsHeader";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const portfolio = usePortfolio();

  return (
    <RevealSection
      id="projects"
      className="relative py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <ProjectsHeader />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {portfolio.projects.items.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </RevealSection>
  );
}