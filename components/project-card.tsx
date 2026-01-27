import React from "react"
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  technologies: string[];
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  technologies,
}: ProjectCardProps) {
  const sharedClassName = "group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50";

  const content = (
    <>
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3 className="font-medium leading-snug">
          <span className="inline-flex items-baseline text-base font-medium leading-tight text-foreground group-hover:text-primary focus-visible:text-primary">
            <span>
              {title}
              {projectUrl && (
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1" />
              )}
            </span>
          </span>
        </h3>

        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          {description}
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {imageUrl && (
        <div className="z-10 sm:order-1 sm:col-span-2">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={200}
            height={120}
            className="rounded border-2 border-border/50 transition group-hover:border-border/80"
          />
        </div>
      )}
    </>
  );

  if (projectUrl) {
    return (
      <Link
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName}
      >
        {content}
      </Link>
    );
  }

  return <div className={sharedClassName}>{content}</div>;
};
