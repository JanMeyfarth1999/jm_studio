
"use client";

import { useEffect, useState } from "react";

// Navigationspunkte werden zentral verwaltet.
const navigation = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Über mich", href: "#ueber-mich" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Aktiviert den Hintergrund beim Scrollen.
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-[#080808]/95 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="site-container relative flex h-22 items-center justify-between"
        aria-label="Hauptnavigation"
      >
        {/* Markenlogo */}
        <a
          href="#start"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-bold tracking-[-0.06em] text-[#F2F0EA] md:text-2xl"
        >
          JM <span className="font-light">/</span> STUDIO
          <sup className="ml-1 align-super text-[9px]">®</sup>
        </a>

        {/* Desktop-Menü */}
        <div className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.15em] text-[#9A9A96] transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop-Kontaktbutton */}
        <a
          href="#kontakt"
          className="hidden items-center gap-3 border-b border-white pb-1 text-xs uppercase tracking-[0.15em] transition-opacity hover:opacity-60 md:flex"
        >
          Projekt anfragen
          <span aria-hidden="true">↗</span>
        </a>

        {/* Mobiler Menüschalter */}
        <button
          type="button"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center text-2xl md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {/* Mobiles Menü */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full flex flex-col gap-7 border border-white/10 bg-[#171717] p-7 shadow-2xl md:hidden"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-[#F2F0EA]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="border-t border-white/15 pt-5 text-lg"
            >
              Projekt anfragen ↗
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
