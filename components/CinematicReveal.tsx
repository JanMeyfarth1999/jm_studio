
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger für Scrollanimationen registrieren.
gsap.registerPlugin(ScrollTrigger);

export default function CinematicReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const image = imageRef.current;
      const text = textRef.current;

      if (!section || !image || !text) return;

      // Animation bei reduzierter Bewegung deaktivieren.
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          // Bildfläche wächst beim Scrollen.
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=140%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          timeline.fromTo(
            image,
            {
              width: "55%",
              height: "65%",
              borderRadius: "16px",
            },
            {
              width: "100%",
              height: "100%",
              borderRadius: "0px",
              ease: "none",
            },
            0
          );

          // Text erscheint über dem Bild.
          timeline.fromTo(
            text,
            {
              opacity: 0,
              y: 80,
            },
            {
              opacity: 1,
              y: 0,
              ease: "none",
            },
            0.45
          );
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden bg-[#080808]"
      aria-label="Designphilosophie"
    >
      {/* Bildfläche */}
      <div
        ref={imageRef}
        className="relative h-full w-full overflow-hidden bg-[#171717] md:h-[65%] md:w-[55%] md:rounded-2xl"
      >
        {/* Hintergrundbild */}
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{
            backgroundImage: "url('/images/cinematic.webp')",
          }}
        />

        {/* Dunkler Verlauf für Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/20" />
      </div>

      {/* Überlagerte Typografie */}
      <div
        ref={textRef}
        className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center opacity-100 md:opacity-0"
      >
        <h2 className="max-w-6xl text-[clamp(3rem,9vw,10rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.08em] text-[#F2F0EA]">
          Design ohne
          <br />
          Kompromisse.
        </h2>
      </div>

      {/* Kleine Abschnittsnummer */}
      <span className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.25em] text-white/70">
        01 — Our Philosophy
      </span>
    </section>
  );
}
