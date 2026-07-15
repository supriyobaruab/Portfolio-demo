import Section from "./Section.jsx";

const PROJECTS = [
  {
    title: "Bachelor Meal Management System",
    path: "meal-house5A",
    image: "/images/optimized/projects/meal-system.jpg",
    imageAlt: "A home server rack with networking equipment",
    description:
      "A web application for managing daily meals, expenses, and member contributions in a bachelor household.",
    tech: ["Node.js", "Express.js"],
  },
  {
    title: "AIUB Notice Bot",
    path: "discord-bots",
    image: "/images/optimized/projects/discord-bots.jpg",
    imageAlt: "discord",
    description:
      "Automatically sends Discord notifications whenever a new notice is published on the AIUB Notice Board.",
    tech: ["JavaScript", "Discord.js", "APIs"],
  },
  {
    title: "Cafe Management System",
    path: "cafe-management",
    image: "/images/optimized/projects/cafe.jpg",
    imageAlt: "A home server rack with networking equipment",
    description:
      "A cafe management system that streamlines order processing, inventory tracking, billing, and daily business operations.",
    tech: ["Java"],
  },
  {
    title: "3Dify",
    path: "e-commerce",
    image: "/images/optimized/projects/ecom.jpg",
    imageAlt: "A home server rack with networking equipment",
    description: "A Demo E-Commerce website for my friend's business",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Personal Home Server",
    path: "home-server",
    image: "/images/optimized/projects/home-server.jpg",
    imageAlt: "A home server rack with networking equipment",
    description:
      "A self-managed home server used to host services, learn networking, and retain control over personal digital tools.",
    tech: ["Ubuntu,Docker,Immich"],
  },
];

export default function Work() {
  return (
    <Section
      id="work"
      tag="03 / WORK"
      title="Projects"
      description="Projects I've built while learning by doing."
      className="border-t border-line"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="surface-card group flex flex-col overflow-hidden rounded-xl transition-colors hover:border-stone-600"
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
              <span className="terminal-dot bg-stone-600" />
              <span className="terminal-dot bg-stone-700" />
              <span className="terminal-dot bg-accent/80" />
              <span className="mono-label ml-3 truncate">{project.path}</span>
            </div>
            <div className="aspect-video overflow-hidden border-b border-line bg-elevated">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-bold text-stone-50">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span key={tech} className="pill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
