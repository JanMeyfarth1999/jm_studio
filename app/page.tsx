
import Navbar from "@/components/Navbar";
import HeroContent from "@/components/HeroContent";
import CinematicReveal from "@/components/CinematicReveal";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#F2F0EA]">

      {/* ========================================
          01 - NAVIGATION
      ======================================== */}
      <Navbar />

      {/* ========================================
          02 - HERO
          DIGITAL. BUT DIFFERENT.
      ======================================== */}
      <section
        id="start"
        className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-36 md:pt-44"
      >
        <div className="site-container">
          <HeroContent />
        </div>
      </section>

      {/* ========================================
          03 - CINEMATIC REVEAL
          Bestehendes Seidenmotiv mit Scroll-Effekt
      ======================================== */}
      <CinematicReveal />

      {/* ========================================
          04 - LEISTUNGEN
          Interaktive Service-Übersicht
      ======================================== */}
      <Services />

      {/* ========================================
          05 - PORTFOLIO
          Ausgewählte Projekte
      ======================================== */}
      <Projects />

      {/* ========================================
          06 - ÜBER MICH
          Persönliche Vorstellung
      ======================================== */}
      <About />

      {/* ========================================
          07 - KONTAKT
          HAVE A PROJECT? LET'S TALK.
          Mit aufklappbarem Anfrageformular
      ======================================== */}
      <Contact />

    </main>
  );
}
