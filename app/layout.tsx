import type { Metadata } from "next";
import { Bubblegum_Sans, Fredoka, Quicksand } from "next/font/google";
import { AppProvider } from "./lib/AppContext";
import "./globals.css";

const bubblegumSans = Bubblegum_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bubblegum",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Ivana Mailleux — Cours de Piano à Rixensart",
  description: "Piano, solfège et éveil musical pour enfants et adultes à Rixensart, Brabant-Wallon. Trilingual: FR · NL · EN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bubblegumSans.variable} ${fredoka.variable} ${quicksand.variable}`}>
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
