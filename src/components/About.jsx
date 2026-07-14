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

const ABOUT_IMAGES = [
  {
    src: "/images/1.jpg",
    alt: "Supriyo Barua standing outdoors",
    label: "outdoors.jpg",
    className: "left-2 top-0 w-[46%] -rotate-6 sm:left-6",
  },
  {
    src: "/images/2.png",
    alt: "Supriyo Barua at an event",
    label: "profile.jpg",
    className: "right-0 top-6 z-10 w-[50%] rotate-[7deg] sm:top-8",
  },
  {
    src: "/images/3.png",
    alt: "A biking trip at sunrise",
    label: "biking.jpg",
    className:
      "bottom-8 left-[26%] z-20 w-[46%] rotate-[8deg] sm:bottom-10 sm:left-[28%]",
  },
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

        <figure className="mx-auto w-full max-w-xl lg:col-span-5 lg:ml-auto lg:mr-0 lg:mt-2 lg:translate-x-8 xl:translate-x-10">
          <div className="relative aspect-[4/5] sm:aspect-[9/10]">
            <div className="absolute inset-[8%] rounded-full bg-accent/10 blur-3xl" />
            {ABOUT_IMAGES.map((image) => (
              <div
                key={image.src}
                className={`absolute overflow-hidden rounded-xl border-2 border-line bg-card shadow-2xl shadow-black/50 transition duration-500 ease-out hover:z-30 hover:scale-105 hover:rotate-0 ${image.className}`}
              >
                <div className="flex items-center gap-1.5 border-b border-line px-2.5 py-1.5 ">
                  <span className="terminal-dot bg-stone-600" />
                  <span className="terminal-dot bg-stone-700" />
                  <span className="terminal-dot bg-accent/80" />
                </div>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            ))}
          </div>
          <figcaption className="mono-label mt-4 text-center text-stone-500">
            snippets from the journey
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
