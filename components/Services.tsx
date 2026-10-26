
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Scrollanimationen aktivieren.
gsap.registerPlugin(ScrollTrigger);

// Leistungen zentral definieren.
// So vermeiden wir doppelten JSX-Code.
const services = [
  {
    number: "01",
    title: "Webdesign",
    description:
      "Individuelle Designs mit Charakter, klarer Struktur und einem unverwechselbaren Erscheinungsbild.",
  },
  {
    number: "02",
    title: "Webentwicklung",
    description:
      "Moderne, schnelle und technisch durchdachte Websites für einen professionellen digitalen Auftritt.",
  },
  {
    number: "03",
    title: "Responsive Design",
    description:
      "Optimale Darstellung und Bedienbarkeit auf Smartphones, Tablets und Desktopgeräten.",
  },
  {
    number: "04",
    title: "Optimierung & Relaunch",
    description:
      "Bestehende Websites modernisieren, Ladezeiten verbessern und digitale Erlebnisse weiterentwickeln.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Animation nur bei erlaubter Bewegung.
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          // Jede Leistungszeile erscheint beim Scrollen.
          gsap.from(".service-item", {
            opacity: 0,
            y: 65,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".services-list",
              start: "top 85%",
              once: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="leistungen"
      ref={sectionRef}
      className="scroll-mt-28 bg-[#080808] py-28 md:py-40"
    >
      <div className="site-container">
        {/* Abschnittsnummer */}
        <div className="mb-20 flex justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-[#9A9A96]">
          <span>02 / Expertise</span>
          <span>What I Do</span>
        </div>

        {/* Große Editorial-Überschrift */}
        <h2 className="mb-20 text-[clamp(4rem,10vw,11rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.085em]">
          What I
          <br />
          <span className="text-[#777777]">
            Create.
          </span>
        </h2>

        {/* Interaktive Leistungen */}
        <div className="services-list border-b border-white/20">
          {services.map((service) => (
            <div
              key={service.number}
              className="service-item group relative border-t border-white/20 transition-colors duration-500 hover:bg-[#171717]"
            >
              <div className="grid gap-5 px-3 py-9 md:grid-cols-[70px_1fr_340px_60px] md:items-center md:gap-8 md:px-6 md:py-12">
                {/* Nummer */}
                <span className="text-xs text-[#9A9A96]">
                  {service.number}
                </span>

                {/* Titel */}
                <h3 className="text-3xl font-semibold tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-3 sm:text-4xl lg:text-5xl">
                  {service.title}
                </h3>

                {/* Beschreibung */}
                <p className="max-w-sm text-sm leading-relaxed text-[#9A9A96]">
                  {service.description}
                </p>

                {/* Animierter Pfeil */}
                <span
                  aria-hidden="true"
                  className="hidden text-3xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 md:block"
                >
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Abschließender Hinweis */}
        <p className="mt-12 max-w-lg text-sm leading-relaxed text-[#9A9A96]">
          Jedes Projekt ist anders. Deshalb entstehen bei
          JM / STUDIO keine Websites von der Stange,
          sondern individuelle digitale Lösungen.
        </p>
      </div>
    </section>
  );
}
