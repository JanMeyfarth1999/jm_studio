
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger einmal registrieren.
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Animationen nur ausführen, wenn reduzierte
      // Bewegung nicht aktiviert ist.
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Überschrift und Text beim Scrollen einblenden.
        gsap.from(".about-reveal", {
          opacity: 0,
          y: 65,
          duration: 1.1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        });

        // Porträtbereich bewegt sich dezent nach oben.
        gsap.fromTo(
          ".about-portrait",
          { y: 55 },
          {
            y: -25,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="ueber-mich"
      ref={sectionRef}
      className="scroll-mt-28 overflow-hidden bg-[#0B0B0B] py-28 md:py-40"
    >
      <div className="site-container">
        {/* Kleine Abschnittsüberschrift */}
        <div className="mb-20 flex flex-wrap justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-[#9A9A96]">
          <span>04 / About</span>
          <span>The Person Behind The Pixels</span>
        </div>

        {/* Große Editorial-Typografie */}
        <h2 className="about-reveal mb-20 text-[clamp(3.5rem,9vw,10rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.08em]">
          Good Design.
          <br />
          <span className="text-[#777777]">
            Real Passion.
          </span>
        </h2>

        {/* Porträt und persönliche Vorstellung */}
        <div className="grid gap-12 border-t border-white/20 pt-12 md:grid-cols-2 md:gap-20">
          {/* Platzhalter bis ein echtes Porträt vorliegt */}
          <div className="relative aspect-[3/4] overflow-hidden bg-[#202020]">
            <div className="about-portrait absolute inset-0 flex flex-col items-center justify-center gap-5">
              <span
                aria-hidden="true"
                className="text-[clamp(7rem,20vw,17rem)] font-extrabold leading-none tracking-[-0.1em] text-white/10"
              >
                JM.
              </span>

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#777777]">
                Portrait Coming Soon
              </span>
            </div>

            <span className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.2em] text-white/60">
              Independent Creator — Germany
            </span>
          </div>

          {/* Persönlicher Text */}
          <div className="flex flex-col justify-center">
            <p className="about-reveal mb-8 text-xs uppercase tracking-[0.25em] text-[#9A9A96]">
              A Little About Me
            </p>

            <h3 className="about-reveal mb-10 text-[clamp(2.5rem,4vw,5rem)] font-semibold leading-[1.05] tracking-[-0.065em]">
              Hi, ich bin Jan.
            </h3>

            <p className="about-reveal mb-6 max-w-xl text-lg leading-relaxed text-[#F2F0EA]">
              Ich entwickle digitale Erlebnisse, die
              nicht nur funktionieren, sondern
              im Gedächtnis bleiben.
            </p>

            <p className="about-reveal mb-12 max-w-xl text-base leading-relaxed text-[#9A9A96]">
              Mein Fokus liegt auf individuellem Webdesign,
              moderner Webentwicklung und klarer
              Nutzerführung. Jedes Projekt bekommt
              die Aufmerksamkeit, die es verdient –
              vom ersten Konzept bis zur Umsetzung.
            </p>

            <a
              href="#kontakt"
              className="about-reveal group inline-flex w-fit items-center gap-6 text-xs font-medium uppercase tracking-[0.2em]"
            >
              Projekt besprechen

              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 text-2xl transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#F2F0EA] group-hover:text-[#080808]"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
