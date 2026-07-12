const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="section-container px-6 py-16 sm:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <a href="#top" className="mb-4 block text-[22px] font-display font-semibold tracking-tight text-stone-100">
              Supriyo<span className="text-accent">.</span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Learning, building, growing — through web development,
              self-hosting, and automation.
            </p>
          </div>
          <div className="md:col-span-6">
            <h4 className="mono-label mb-4">Navigate</h4>
            <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-col">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 border-t border-line pt-8 text-sm text-faint sm:flex-row">
          <span>Supriyo Barua © 2026</span>
          <span>Built with React, Vite & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
