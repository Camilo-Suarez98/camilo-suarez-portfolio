const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Swift",
      "SwiftUI",
      "TailwindCSS",
      "Styled-Components",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "CMS & No-Code",
    skills: ["WordPress", "Webflow", "Go High Level (GHL)"],
  },
];

export function SkillsSection() {
  return (
    <div className="space-y-8">
      {skillCategories.map(({ category, skills }) => (
        <div key={category}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {category}
          </p>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill}>
                <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
