"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex flex-col gap-3 text-sm">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`group flex items-center gap-3 transition-all duration-300 ${activeSection === item.href.slice(1)
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
            }`}
        >
          <span
            className={`h-px transition-all duration-300 ${activeSection === item.href.slice(1)
                ? "w-16 bg-foreground"
                : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
              }`}
          />
          <span className="text-xs font-medium uppercase tracking-widest">
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
}
