import Section from './Section.jsx'

const CERTIFICATES = [
  {
    name: 'Web Development Fundamentals',
    issuer: 'Example Learning Platform',
    year: '2025',
    image: '/images/certificates/web-development-fundamentals.svg',
  },
  {
    name: 'JavaScript Essentials',
    issuer: 'Example Learning Platform',
    year: '2025',
    image: '/images/certificates/javascript-essentials.svg',
  },
  {
    name: 'Git & GitHub Basics',
    issuer: 'Example Learning Platform',
    year: '2024',
    image: '/images/certificates/git-github-basics.svg',
  },
]

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
              <img
                src={cert.image}
                alt={cert.name}
                className="h-36 w-56 rounded-lg border border-line object-cover sm:h-40 sm:w-64"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
