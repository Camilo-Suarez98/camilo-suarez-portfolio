interface ExperienceCardProps {
  dateRange: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
}

export function ExperienceCard({
  dateRange,
  title,
  company,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
        {dateRange}
      </header>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug">
          <span>
            {title} · {company}
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
    </div>
  );
}
