import Section from "./Section.jsx";

const CATEGORIES = [
  {
    title: "Frontend",
    icon: "code",
    path: "~/frontend",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    path: "~/backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: "database",
    path: "~/database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    icon: "tools",
    path: "~/tools",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
  },
];

function CategoryIcon({ name }) {
  const iconProps = {
    className: "h-5 w-5 text-emerald-400",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": true,
  };

  if (name === "code") {
    return (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8 9-3 3 3 3m8-6 3 3-3 3M13.5 6l-3 12"
        />
      </svg>
    );
  }

  if (name === "server") {
    return (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="6" rx="1" />
        <rect x="3" y="14" width="18" height="6" rx="1" />
        <path strokeLinecap="round" d="M7 7h.01M7 17h.01" />
      </svg>
    );
  }

  if (name === "database") {
    return (
      <svg {...iconProps}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5m-16 7v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7"
        />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.7 6.3 3-3a2.12 2.12 0 0 1 3 3l-3 3-3-3ZM13.2 7.8 4 17a2.12 2.12 0 0 0 3 3l9.2-9.2"
      />
      <path strokeLinecap="round" d="m5 5 4 4" />
    </svg>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      tag="02 / STACK"
      title="Skills & tools"
      description="What I use to learn, build, and ship small projects."
      className="border-t border-line"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {CATEGORIES.map((category) => (
          <div key={category.title} className="surface-card rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-elevated bg-elevated/70">
                <CategoryIcon name={category.icon} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-stone-50">
                  {category.title}
                </h3>
                <p className="mono-label mt-0.5">{category.path}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="pill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
