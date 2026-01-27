import { experiences } from "../lib/experiences";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ExperienceCard } from "./experience-card";

export function ExperiencesSection() {
  return (
    <section id="experiences" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experiences
        </h2>
      </div>

      <div className="group/list">
        <ol className="space-y-12">
          {experiences.map((exp, index) => (
            <li key={index}>
              <ExperienceCard {...exp} />
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12">
        <Link
          href="https://drive.google.com/file/d/176hHcLrMqLZilL4TmRCyqmdIAmedA819/view?usp=drive_link"
          className="group inline-flex items-center font-medium text-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Resume
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}