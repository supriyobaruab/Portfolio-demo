import Section from "./Section.jsx";

const EXPERIENCES = [
  {
    role: "Lead of Development Team — R&D",
    organization: "AIUB Computer Club(ACC)",
    period: "June, 2024 — Present",
    current: true,
    highlights: [
      "Working on responsive frontend interfaces using React.js, Next.js, JavaScript, HTML5, and CSS3.",
      "Building clean, reusable UI components with attention to layout, spacing, and responsiveness.",
      "Collaborating with the team using Git/GitHub and documenting frontend work clearly.",
    ],
  },
  {
    role: "Research Publication",
    organization: "Bangladesh Physical Society",
    period: "2026",
    highlights: [
      "Collaborated with co-authoer throughout the research process",
      "Led the research, writing of the paper",
    ],
  },
  {
    role: "Bass Guitarist",
    organization: "Six Souls",
    period: "2018-2021",
    highlights: [
      "Performed at school,college cultural programs",
      "Played at local band fest and competitions",
    ],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      tag="04 / LOG"
      title="Experience & involvement"
      description="Roles, organizations, and work that shaped how I build."
      className="border-t border-line"
    >
      <div className="max-w-5xl">
        {EXPERIENCES.map((experience, index) => (
          <article
            key={experience.role}
            className="relative flex gap-6 sm:gap-8 pb-3"
          >
            <div className="flex flex-col items-center pt-2">
              <span
                className={`h-3 w-3 shrink-0 rounded-full border-2 ${
                  experience.current
                    ? "border-accent bg-accent shadow-[0_0_14px_rgba(251,191,36,0.55)]"
                    : "border-stone-500 bg-base"
                }`}
              />
              {index < EXPERIENCES.length - 1 && (
                <span className="mt-2 w-px flex-1 bg-gradient-to-b from-stone-600 to-stone-800" />
              )}
            </div>

            <div className="flex-1 pb-14 last:pb-0">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                <h3 className="font-display text-xl font-semibold text-stone-50 sm:text-2xl">
                  {experience.role}
                </h3>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-faint sm:shrink-0">
                  <span>{experience.period}</span>
                  {experience.current && (
                    <span className="flex items-center gap-2 text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Current
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-2 font-display text-base font-medium !text-amber-300 sm:text-m">
                {experience.organization}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-accent sm:text-white">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-4">
                    <span className="text-stone-500">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
