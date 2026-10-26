
import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";

// Schrift für unsere großen Überschriften.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Schrift für normale Texte und Navigation.
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Metadaten für Browser und Suchmaschinen.
export const metadata: Metadata = {
  title: "JM / STUDIO — Webdesign & Development",
  description:
    "Individuelles Webdesign und moderne Webentwicklung. Digitale Auftritte mit Charakter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${manrope.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
