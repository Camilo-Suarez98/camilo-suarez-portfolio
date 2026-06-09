import Link from "next/link";
import BioDescription from "@/components/bio-description";
import { Header } from "@/components/header";
import { SocialLinks } from "@/components/social-links";
import { ArrowUpRight, FileText } from "lucide-react";
import { ProjectsSection } from "@/components/projects-section";
import { ExperiencesSection } from "@/components/experiences-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <Link href="/" className="hover:text-primary transition-colors">
                  Camilo Suárez
                </Link>
              </h1>

              <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
                Fullstack Developer focused in Frontend
              </h2>

              <p className="my-4 max-w-xs leading-relaxed text-muted-foreground">
                I build scalable, user-centric web applications that merge precision engineering with modern aesthetics.
              </p>

              <Header />
            </div>

            <div className="mt-8 flex flex-col gap-6 lg:mt-0">
              <SocialLinks />

              <Link
                href="https://drive.google.com/file/d/1GAvWzxj_XP9rSv7y-2TTomas0fTBNNJD/view?usp=sharing"
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" />
                <span>View Full Resume</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </header>

          <main className="pt-12 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-28 lg:scroll-mt-24">
              <div className="mb-12 w-screen">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
                  About
                </h2>
              </div>
              <BioDescription />
            </section>

            <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-28 md:scroll-mt-24 lg:scroll-mt-36">
              <div className="mb-12 w-screen">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
                  Skills
                </h2>
              </div>
              <SkillsSection />
            </section>

            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-28 md:scroll-mt-24 lg:scroll-mt-36">
              <div className="mb-12 w-screen">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
                  Experience
                </h2>
              </div>
              <ExperiencesSection />
            </section>

            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-28 md:scroll-mt-24 lg:scroll-mt-36">
              <div className="mb-12 w-screen">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
                  Projects
                </h2>
              </div>
              <ProjectsSection />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
