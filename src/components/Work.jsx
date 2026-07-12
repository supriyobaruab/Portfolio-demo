import Section from "./Section.jsx";

const PROJECTS = [
  {
    title: "Personal Home Server",
    path: "home-server",
    image: "/images/projects/home-server.png",
    imageAlt: "A home server rack with networking equipment",
    description:
      "A self-managed home server used to host services, learn networking, and retain control over personal digital tools.",
    tech: ["Linux", "Networking", "Docker"],
  },
  {
    title: "Discord Bots",
    path: "discord-bots",
    image: "/images/projects/discord-bots.png",
    imageAlt: "A programmable bot beside an abstract chat interface",
    description:
      "Custom bots that automate tasks, support server moderation, and make online communities more engaging.",
    tech: ["JavaScript", "Discord.js", "APIs"],
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
