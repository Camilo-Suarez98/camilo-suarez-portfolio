import { Header } from "@/components/header";
import { SocialLinks } from "@/components/social-links";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { CursorGlow } from "@/components/cursor-glow";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

const experiences = [
  {
    dateRange: "2023 — Present",
    title: "Full Stack Developer",
    company: "Tech Startup",
    companyUrl: "https://example.com",
    description:
      "Build and maintain scalable web applications using modern technologies. Lead the development of key features that improved user engagement by 40%. Collaborate with cross-functional teams to deliver high-quality products.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    dateRange: "2021 — 2023",
    title: "Frontend Developer",
    company: "Digital Agency",
    companyUrl: "https://example.com",
    description:
      "Developed responsive and accessible web interfaces for diverse clients. Implemented design systems and component libraries that increased development efficiency. Worked closely with designers to ensure pixel-perfect implementations.",
    technologies: ["React", "Vue.js", "Tailwind CSS", "JavaScript", "Figma"],
  },
  {
    dateRange: "2019 — 2021",
    title: "Junior Developer",
    company: "Software Company",
    description:
      "Started my professional journey building web applications and learning best practices. Contributed to various projects while developing strong foundations in software development principles.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with performance and scalability in mind.",
    projectUrl: "https://github.com/example",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and productivity analytics. Features drag-and-drop interface and notification system.",
    projectUrl: "https://github.com/example",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    title: "Personal Blog",
    description:
      "A minimalist blog platform with markdown support, syntax highlighting, and SEO optimization. Features a custom CMS for easy content management.",
    projectUrl: "https://github.com/example",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <CursorGlow />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column - Fixed on desktop */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <Link href="/" className="hover:text-primary transition-colors">
                  Camilo Suarez
                </Link>
              </h1>
              
              <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
                Full Stack Developer
              </h2>
              
              <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
                I build scalable, user-centric web applications that merge precision engineering with modern aesthetics.
              </p>
              
              <Header />
            </div>
            
            <div className="mt-8 flex flex-col gap-6 lg:mt-0">
              <SocialLinks />
              
              <Link
                href="/cv.pdf"
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                <FileText className="h-4 w-4" />
                <span>View Full Resume</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </header>
          
          {/* Right Column - Scrollable content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                  About
                </h2>
              </div>
              
              <div className="text-muted-foreground">
                <p className="mb-4">
                  {"I'm"} Camilo, a Full Stack Developer based in{" "}
                  <span className="text-foreground font-medium">Bucaramanga, Colombia</span>.
                  I specialize in building scalable, user-centric web applications that
                  merge precision engineering with modern aesthetics.
                </p>
                
                <p className="mb-4">
                  Passionate about clean code and creative problem-solving, I thrive in
                  dynamic environments where I can drive innovation and deliver impactful
                  digital experiences. My focus is on creating interfaces that are not
                  only visually appealing but also{" "}
                  <span className="text-foreground font-medium">accessible</span> and{" "}
                  <span className="text-foreground font-medium">performant</span>.
                </p>
                
                <p>
                  When {"I'm"} not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or enjoying a good cup of
                  Colombian coffee while learning something new.
                </p>
              </div>
            </section>
            
            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                  Experience
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
                  href="/cv.pdf"
                  className="group inline-flex items-center font-medium text-foreground hover:text-primary transition-colors"
                >
                  View Full Resume
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </section>
            
            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                  Projects
                </h2>
              </div>
              
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
                  href="https://github.com/camilosuarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center font-medium text-foreground hover:text-primary transition-colors"
                >
                  View All Projects on GitHub
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </section>
            
            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
              <p>
                Designed and coded with care. Built with{" "}
                <Link
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  Next.js
                </Link>{" "}
                and{" "}
                <Link
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  Tailwind CSS
                </Link>
                , deployed on{" "}
                <Link
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  Vercel
                </Link>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
