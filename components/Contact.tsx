
"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Scrollanimationen aktivieren.
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  // Steuert, ob das Anfrageformular angezeigt wird.
  const [formOpen, setFormOpen] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Kontaktüberschrift beim Scrollen einblenden.
        gsap.from(".contact-reveal", {
          opacity: 0,
          y: 70,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="scroll-mt-28 bg-[#080808] py-28 md:py-40"
    >
      <div className="site-container">
        {/* Kleine Abschnittsüberschrift */}
        <div className="mb-20 flex flex-wrap justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-[#9A9A96]">
          <span>05 / Contact</span>
          <span>Let&apos;s Collaborate</span>
        </div>

        {/* Große Abschlussüberschrift */}
        <h2 className="contact-reveal text-[clamp(3.8rem,10vw,11rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.085em]">
          Have A
          <br />
          <span className="text-[#777777]">
            Project?
          </span>
          <br />
          Let&apos;s Talk.
        </h2>

        {/* Trennlinie */}
        <div className="contact-reveal mt-16 h-px w-full bg-white/20 md:mt-24" />

        {/* Beschreibung und CTA */}
        <div className="contact-reveal mt-10 flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <p className="max-w-xl text-base leading-relaxed text-[#9A9A96] md:text-lg">
            Du hast eine Idee oder möchtest deinem
            Unternehmen einen neuen digitalen Auftritt
            geben? Erzähl mir von deinem Projekt.
          </p>

          <button
            type="button"
            onClick={() => setFormOpen(!formOpen)}
            aria-expanded={formOpen}
            aria-controls="contact-form"
            className="group flex items-center gap-6 self-start text-xs font-medium uppercase tracking-[0.2em]"
          >
            {formOpen ? "Formular schließen" : "Projekt anfragen"}

            <span
              aria-hidden="true"
              className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 text-3xl transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#F2F0EA] group-hover:text-[#080808]"
            >
              ↗
            </span>
          </button>
        </div>

        {/* Aufklappbares Anfrageformular */}
        {formOpen && (
          <div
            id="contact-form"
            className="mt-20 border-t border-white/20 pt-12"
          >
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9A9A96]">
                  Start A Conversation
                </p>

                <h3 className="text-4xl font-semibold tracking-[-0.06em]">
                  Deine Idee.
                  <br />
                  Unser nächstes Projekt.
                </h3>
              </div>

              {/* Zunächst nur die Formularoberfläche.
                  Die sichere Übermittlung folgt separat. */}
              <form
                onSubmit={(event) => event.preventDefault()}
                className="space-y-8"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#9A9A96]"
                  >
                    Dein Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Wie heißt du?"
                    className="w-full border-b border-white/30 bg-transparent py-4 text-base text-white outline-none transition-colors placeholder:text-[#666666] focus:border-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#9A9A96]"
                  >
                    E-Mail-Adresse
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="deine@email.de"
                    className="w-full border-b border-white/30 bg-transparent py-4 text-base text-white outline-none transition-colors placeholder:text-[#666666] focus:border-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#9A9A96]"
                  >
                    Dein Projekt
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Erzähl mir von deiner Idee ..."
                    className="w-full resize-y border-b border-white/30 bg-transparent py-4 text-base text-white outline-none transition-colors placeholder:text-[#666666] focus:border-white"
                  />
                </div>

                <p className="text-sm leading-relaxed text-[#9A9A96]">
                  Das Formular ist noch nicht für den Versand
                  freigeschaltet. Die sichere Übermittlung
                  richten wir im nächsten Schritt ein.
                </p>

                <button
                  type="submit"
                  disabled
                  className="cursor-not-allowed border border-white/30 px-8 py-5 text-xs uppercase tracking-[0.2em] text-[#777777]"
                >
                  Versand wird eingerichtet
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
