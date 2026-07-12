import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="surface-nav fixed top-0 z-50 flex w-full items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-[19px] font-display font-semibold tracking-tight text-stone-100"
        >
          Supriyo<span className="text-accent">.</span>
          <span className="hidden font-mono text-[11px] tracking-[0.18em] text-accent/90 sm:inline">
            [ME]
          </span>
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 md:flex"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-7 text-[15px]">
            {LINKS.map((link, i) => (
              <li key={link.href} className="flex items-center gap-1.5">
                <span className="font-mono text-[10px] text-stone-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={link.href}
                  className="font-medium text-stone-400 transition-colors hover:text-stone-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-[14px] font-medium text-accent-bright transition-colors hover:bg-accent hover:text-stone-950 md:inline-flex"
          >
            Get in Touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="p-1 text-stone-400 transition-colors hover:text-stone-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="flex flex-col gap-[5px]">
              <span className="h-[2px] w-6 bg-current" />
              <span className="h-[2px] w-6 bg-current" />
              <span className="h-[2px] w-6 bg-current" />
            </span>
          </button>
        </div>
      </header>
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col justify-center gap-7 bg-base/98 px-8 backdrop-blur-md md:hidden">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 text-[32px] font-medium text-stone-100 transition-colors hover:text-accent-bright"
            >
              <span className="font-mono text-sm text-stone-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
