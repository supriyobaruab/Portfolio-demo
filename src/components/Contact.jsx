import Section from "./Section.jsx";

const EMAIL = "supriyobaruab@gmail.com";
const ADDRESS = "Bashundhara R/A, Dhaka";

export default function Contact() {
  return (
    <Section
      id="contact"
      tag="06 / CONTACT"
      title="Let's talk"
      description="Have a project, an idea, or just want to say hi? I'd love to hear from you."
      className="border-t border-line"
    >
      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${EMAIL}`}
          className="surface-card block max-w-md rounded-xl p-4 transition-colors hover:border-stone-600"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-elevated bg-elevated/70">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>
            <div>
              <p className="mono-label">Email</p>
              <p className="mt-0.5 text-sm font-medium text-stone-100">
                {EMAIL}
              </p>
            </div>
          </div>
        </a>
        <a
          href={`mailto:${ADDRESS}`}
          className="surface-card block max-w-md rounded-xl p-4 transition-colors hover:border-stone-600"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-elevated bg-elevated/70">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>
            <div>
              <p className="mono-label">Address</p>
              <p className="mt-0.5 text-sm font-medium text-stone-100">
                {ADDRESS}
              </p>
            </div>
          </div>
        </a>
      </div>
    </Section>
  );
}
