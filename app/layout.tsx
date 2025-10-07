import type { Metadata } from "next";
import { Shadows_Into_Light_Two } from "next/font/google";
import "./globals.css";

const ojuju = Shadows_Into_Light_Two({ weight: "400" });

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
      <body className={ojuju.className}>{children}</body>
    </html>
  );
}
