import Section from "./Section.jsx";

const CERTIFICATES = [
  {
    name: "Code to Cloud: Practical DevOps with AWS",
    issuer: "Cloudly Infotech Limited",
    year: "2025",
    image: "/images/certificates/DevOps.jpg",
  },
  {
    name: "IT Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
    image: "/images/certificates/IT_Essentials.jpg",
  },
  {
    name: "From Idea to Paper: A Guided Research Writing Workshop",
    issuer: "AIUB Research and Development Club",
    year: "2025",
    image: "/images/certificates/Research.png",
  },
  {
    name: "Science Fair",
    issuer: "Science Club, Bandarban Cantonment Public School & College",
    year: "2022",
    image: "/images/certificates/BCPSC.JPG",
  },
];

export default function Certificates() {
  return (
    <Section
      id="certificates"
      tag="04 / LOG"
      title="Certificates"
      description="Courses and credentials along the way."
      className="border-t border-line"
    >
      <div className="max-w-3xl">
        {CERTIFICATES.map((cert, index) => (
          <div key={cert.name} className="relative flex gap-6 sm:gap-8">
            <div className="flex flex-col items-center pt-1.5">
              <span className="h-3 w-3 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(251,191,36,0.5)]" />
              {index < CERTIFICATES.length - 1 && (
                <span className="mt-2 w-px flex-1 bg-gradient-to-b from-stone-700 to-stone-800" />
              )}
            </div>
            <div className="flex-1 pb-12">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-stone-50 sm:text-xl">
                  {cert.name}
                </h3>
                <span className="mono-label">{cert.year}</span>
              </div>
              <p className="mb-4 text-sm font-medium text-accent-bright/90">
                {cert.issuer}
              </p>
              <a
                href={cert.image}
                target="_blank"
                rel="noreferrer"
                className="group relative block w-fit focus:outline-none"
                aria-label={`Open ${cert.name} certificate in full size`}
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="aspect-[1.38/1] w-72 rounded-lg border border-line bg-stone-900 object-contain shadow-sm transition duration-300 ease-out sm:w-96 group-hover:border-accent/70 group-focus:border-accent/70"
                />
                <span className="absolute bottom-3 left-3 rounded bg-stone-950/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-stone-200 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-0 group-focus:opacity-0">
                  Hover to preview
                </span>
                <div className="pointer-events-none absolute left-0 top-0 z-20 w-[min(42rem,calc(100vw-3rem))] origin-top-left scale-[0.97] rounded-xl border border-accent/70 bg-stone-950 p-2 opacity-0 shadow-2xl shadow-black/60 transition duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus:scale-100 group-focus:opacity-100">
                  <img
                    src={cert.image}
                    alt=""
                    className="max-h-[75vh] w-full rounded-lg object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
