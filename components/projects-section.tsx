import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../lib/projects";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <>
      <div className="group/list">
        <ol className="space-y-12">
          {projects.map((project, index) => (
            <li key={index}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12">
        <Link
          href="https://github.com/Camilo-Suarez98"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center font-medium text-foreground hover:text-primary transition-colors"
        >
          View All Projects on GitHub
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>
    </>
  );
};
