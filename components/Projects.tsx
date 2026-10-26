
"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP ScrollTrigger aktivieren.
gsap.registerPlugin(ScrollTrigger);

// Unsere Projekte werden zentral gespeichert.
// Weitere Referenzen ergänzen wir später hier.
const projects = [
  {
    number: "01",
    title: "KFZ Meisterbetrieb Fischer",
    category: "Webdesign & Development",
    year: "2026",
    image: "/images/fischer-website.png",
    description:
      "Moderner digitaler Auftritt für einen Kfz-Meisterbetrieb mit responsivem Design und integrierter Terminanfrage.",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Animationen nur bei erlaubter Bewegung ausführen.
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          // Projektkarten beim Scrollen einblenden.
          gsap.utils.toArray<HTMLElement>(".project-card").forEach(
            (card) => {
              gsap.from(card, {
                opacity: 0,
                y: 90,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  once: true,
                },
              });
            }
          );
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="projekte"
      ref={sectionRef}
      className="scroll-mt-28 bg-[#080808] py-28 md:py-40"
    >
      <div className="site-container">
        {/* Abschnittsüberschrift */}
        <div className="mb-20 flex justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-[#9A9A96]">
          <span>03 / Selected Work</span>
          <span>Portfolio — 2026</span>
        </div>

        <h2 className="mb-20 text-[clamp(4rem,10vw,11rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.085em]">
          Selected
          <br />
          <span className="text-[#777777]">
            Work.
          </span>
        </h2>

        {/* Projektübersicht */}
        <div className="space-y-24">
          {projects.map((project) => (
            <article
              key={project.number}
              className="project-card group"
            >
              {/* Großflächiges Projektbild */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#171717]">
                <Image
                  src={project.image}
                  alt={`Website-Projekt ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />

                {/* Dezenter Overlay-Effekt */}
                <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-transparent" />

                {/* Projektnummer */}
                <span className="absolute left-6 top-6 bg-[#080808]/80 px-4 py-3 text-xs tracking-[0.2em] text-white backdrop-blur-md">
                  {project.number} / PROJECT
                </span>
              </div>

              {/* Projektinformationen */}
              <div className="mt-8 grid gap-6 border-b border-white/20 pb-10 md:grid-cols-[1fr_300px] md:items-start">
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#9A9A96]">
                    {project.category} — {project.year}
                  </p>

                  <h3 className="text-3xl font-semibold tracking-[-0.06em] md:text-5xl">
                    {project.title}
                  </h3>
                </div>

                <p className="max-w-sm text-sm leading-relaxed text-[#9A9A96]">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Hinweis auf weitere Projekte */}
        <div className="mt-20 flex items-center justify-between gap-6 border-t border-white/20 pt-8">
          <p className="text-sm text-[#9A9A96]">
            Weitere Projekte folgen.
          </p>

          <a
            href="#kontakt"
            className="group flex items-center gap-4 text-xs uppercase tracking-[0.15em]"
          >
            Dein Projekt könnte das nächste sein
            <span
              aria-hidden="true"
              className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
