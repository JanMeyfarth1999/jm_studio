
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animationen nur ausführen, wenn der Nutzer
      // keine reduzierte Bewegung eingestellt hat.
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Eine gemeinsame Timeline sorgt dafür,
        // dass alle Animationen exakt abgestimmt sind.
        const timeline = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
        });

        // 1. Kleine Studio-Informationen erscheinen.
        timeline.from(".hero-eyebrow", {
          opacity: 0,
          y: 16,
          duration: 0.8,
        });

        // 2. Erste Zeile wird enthüllt.
        timeline.from(
          ".hero-title-first",
          {
            yPercent: 110,
            duration: 1.2,
          },
          "-=0.35"
        );

        // 3. Zweite Zeile folgt leicht versetzt.
        timeline.from(
          ".hero-title-second",
          {
            yPercent: 110,
            duration: 1.2,
          },
          "-=0.95"
        );

        // 4. Die Trennlinie zeichnet sich auf.
        timeline.from(
          ".hero-divider",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.1,
            ease: "power3.inOut",
          },
          "-=0.5"
        );

        // 5. Beschreibung und CTA erscheinen.
        timeline.from(
          ".hero-bottom",
          {
            opacity: 0,
            y: 28,
            duration: 0.9,
          },
          "-=0.45"
        );

        // 6. Scroll-Hinweis erscheint zuletzt.
        timeline.from(
          ".hero-scroll",
          {
            opacity: 0,
            y: 15,
            duration: 0.7,
          },
          "-=0.35"
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full">
      {/* Kleine Informationen über dem Hero */}
      <div className="hero-eyebrow mb-14 flex flex-wrap items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#9A9A96] md:mb-20">
        <span>Independent Digital Studio</span>
        <span>Design & Development — 2026</span>
      </div>

      {/* Große Hero-Überschrift */}
      <h1 className="w-full font-extrabold uppercase leading-[0.92] tracking-[-0.085em]">
        <span className="block overflow-hidden">
          <span className="hero-title-first block text-[clamp(4.2rem,11.5vw,12rem)]">
            Digital.
          </span>
        </span>

        <span className="block overflow-hidden">
          <span className="hero-title-second block whitespace-nowrap text-[clamp(2.25rem,8.1vw,9rem)]">
            But Different.
          </span>
        </span>
      </h1>

      {/* Beschreibung und Projekt-Button */}
      <div className="mt-16 md:mt-24">
        {/* Animierte horizontale Linie */}
        <div className="hero-divider h-px w-full bg-white/20" />

        <div className="hero-bottom flex flex-col justify-between gap-10 pt-8 md:flex-row md:items-end">
          <p className="max-w-md text-base leading-relaxed text-[#9A9A96] md:text-lg">
            Ich entwickle digitale Auftritte, die durch
            außergewöhnliches Design, klare Strukturen und
            moderne Technologie überzeugen.
          </p>

          <a
            href="#kontakt"
            className="group flex items-center gap-6 self-start text-xs font-medium uppercase tracking-[0.2em]"
          >
            Projekt starten

            <span
              aria-hidden="true"
              className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 text-2xl transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#F2F0EA] group-hover:text-[#080808]"
            >
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* Scroll-Hinweis */}
      <div className="hero-scroll mt-24 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#777777]">
        <span>Scroll to explore</span>
        <span>01 / 04</span>
      </div>
    </div>
  );
}
