import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Camilo-Suarez98",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/camilosc98",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:camilo.suarez85@gmail.com",
    icon: Mail,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label={link.name}
        >
          <link.icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
}
