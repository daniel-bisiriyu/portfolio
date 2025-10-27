import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Bebas_Neue({ weight: ["400"] });

export const metadata: Metadata = {
  title: "Daniel Bisiriyu",
  description: "Billionaire, philanthropist and all round great guy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
