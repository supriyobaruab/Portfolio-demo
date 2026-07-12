export default function Section({ id, tag, title, description, children, className = '' }) {
  return (
    <section id={id} className={`relative px-6 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="section-container">
        <header className="mb-12 sm:mb-16">
          <p className="mono-label mb-4 flex items-center gap-3">
            <span className="text-accent">{tag}</span>
            <span className="h-px w-12 bg-elevated" aria-hidden="true" />
          </p>
          <h2 className="font-display text-h2 max-w-2xl font-bold tracking-tight text-stone-50">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  )
}
