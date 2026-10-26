
import Navbar from "@/components/Navbar";
import HeroContent from "@/components/HeroContent";
import CinematicReveal from "@/components/CinematicReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#F2F0EA]">
      {/* Hauptnavigation */}
      <Navbar />

      {/* Dark-Luxury-Hero */}
      <section
        id="start"
        className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-36 md:pt-44"
      >
        <div className="site-container">
          <HeroContent />
        </div>
      </section>

      {/* Cinematic Scroll-Reveal */}
      <CinematicReveal />

      {/* Leistungen */}
      <section
        id="leistungen"
        className="site-container min-h-96 scroll-mt-28 border-t border-white/15 py-24"
      >
        <p className="mb-8 text-xs uppercase tracking-[0.2em] text-[#9A9A96]">
          02 / Services
        </p>
        <h2 className="text-5xl font-semibold tracking-tight">
          Leistungen
        </h2>
      </section>

      {/* Projekte */}
      <section
        id="projekte"
        className="site-container min-h-96 scroll-mt-28 border-t border-white/15 py-24"
      >
        <p className="mb-8 text-xs uppercase tracking-[0.2em] text-[#9A9A96]">
          03 / Selected Work
        </p>
        <h2 className="text-5xl font-semibold tracking-tight">
          Ausgewählte Projekte
        </h2>
      </section>

      {/* Über mich */}
      <section
        id="ueber-mich"
        className="site-container min-h-96 scroll-mt-28 border-t border-white/15 py-24"
      >
        <p className="mb-8 text-xs uppercase tracking-[0.2em] text-[#9A9A96]">
          04 / About
        </p>
        <h2 className="text-5xl font-semibold tracking-tight">
          Über mich
        </h2>
      </section>

      {/* Kontakt */}
      <section
        id="kontakt"
        className="site-container min-h-96 scroll-mt-28 border-t border-white/15 py-24"
      >
        <p className="mb-8 text-xs uppercase tracking-[0.2em] text-[#9A9A96]">
          05 / Contact
        </p>
        <h2 className="text-5xl font-semibold tracking-tight">
          Projekt anfragen
        </h2>
      </section>
    </main>
  );
}
