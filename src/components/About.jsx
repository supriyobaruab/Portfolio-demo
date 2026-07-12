import Section from "./Section.jsx";

const STATS = [
  { value: "Web Dev", label: "Core Focus" },
  { value: "Self-Hosting", label: "Also Learning" },
  { value: "Discord Bots", label: "Side Projects" },
];

const INTERESTS = [
  "Responsive Web Development",
  "Backend APIs (Express.js)",
  "Linux & Self-Hosting",
  "Docker",
  "Personal Automation",
  "MongoDB",
  "Travel",
  "Cycling",
];

export default function About() {
  return (
    <Section
      id="about"
      tag="01 / ABOUT"
      title="Who I am"
      description="Background, principles, and what drives how I build."
      className="border-t border-line"
    >
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-6 lg:col-span-7">
          <p className="text-lg leading-relaxed text-stone-200 text-justify">
            I'm a Computer Science student who enjoys learning by building. From
            creating responsive web applications to managing a personal home
            server, I like exploring technology through hands-on projects. I
            believe the best way to learn is through practical experimentation
            and building solutions that solve everyday problems. Outside of
            programming, I enjoy traveling, long bike rides, and discovering new
            places. These experiences help me stay curious, think creatively,
            and approach challenges with a fresh perspective.
          </p>

          <div>
            <h3 className="mono-label mb-3">Areas of interest</h3>
            <ul className="space-y-2">
              {INTERESTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-stone-300"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-x-6 gap-y-8 border-t border-line pt-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold tracking-tight text-accent-bright sm:text-[28px]">
                  {stat.value}
                </p>
                <p className="mono-label mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <figure className="lg:col-span-5">
          <div className="surface-card overflow-hidden rounded-xl">
            <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
              <span className="terminal-dot bg-stone-600" />
              <span className="terminal-dot bg-stone-700" />
              <span className="terminal-dot bg-accent/80" />
              <span className="mono-label ml-3">profile.jpg</span>
            </div>
            <img
              src="/images/profile."
              alt="Supriyo Barua"
              className="aspect-[4/4.4] w-full object-cover"
            />
            <figcaption className="flex items-center justify-between border-t border-line px-4 py-2.5">
              <span className="mono-label">Supriyo Barua</span>
              <span className="mono-label text-stone-600">Web Developer</span>
            </figcaption>
          </div>
        </figure> */}
      </div>
    </Section>
  );
}
