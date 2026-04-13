import { experiences } from "../lib/experiences";
import { ExperienceCard } from "./experience-card";

export function ExperiencesSection() {
  return (
    <div className="group/list">
      <ol className="space-y-12">
        {experiences.map((exp, index) => (
          <li key={index}>
            <ExperienceCard {...exp} />
          </li>
        ))}
      </ol>
    </div>
  );
}