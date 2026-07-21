"use client";

import { portfolio } from "@/data/portfolio";

import ProjectsHeader from "./ProjectsHeader";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <ProjectsHeader />

        <div className="mt-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {portfolio.projects.items.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}