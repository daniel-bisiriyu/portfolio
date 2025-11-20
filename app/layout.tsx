import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Lenis from "./components/lenis";

const bebasNeue = Bebas_Neue({ weight: ["400"] });

export const metadata: Metadata = {
  title:
    "Daniel Bisiriyu - Frontend Engineer, Genius, Billionaire, Philanthropist",
  description: "Genius, Billionaire, philanthropist and all round great guy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>
        <Lenis />
        {children}
      </body>
    </html>
  );
}
