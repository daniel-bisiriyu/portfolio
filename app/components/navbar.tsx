"use client";

import Link from "next/link";
import { Sofia_Sans_Condensed } from "next/font/google";

import { ScrambleTextPlugin } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const sofia = Sofia_Sans_Condensed();

export default function Navbar() {
  useGSAP(() => {
    gsap.registerPlugin(ScrambleTextPlugin);

    const links = document.getElementsByClassName("link-text");

    Array.from(links).forEach((link) => {
      const originalText = link.textContent as string;

      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          duration: 0.6,
          scrambleText: {
            text: originalText,
            chars: "XOXOXO",
            revealDelay: 0.2,
          },
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          duration: 0.4,
          scrambleText: {
            text: originalText,
            chars: "01",
          },
        });
      });
    });
  });

  return (
    <div className="flex justify-between align-center p-4 sm:py-8 sm:px-10">
      <div className={`${sofia.className} font-black text-xl`}>
        <p>DANIEL</p>
        <br />
        <p className="mt-[-2.55rem]"> BISIRIYU</p>
      </div>
      <div className="self-center hidden sm:block">
        <Link href="#about" className="pr-6 w-1/4">
          [
          <span className="link-text inline-block text-center min-w-[10ch]">
            About Me
          </span>
          ]
        </Link>
        <Link href="#experience" className="pr-6 w-1/4">
          [
          <span className="link-text inline-block text-center min-w-[10ch]">
            Experience
          </span>
          ]
        </Link>
        <Link href="#skills" className="pr-6 link w-1/4">
          [
          <span className="link-text inline-block text-center min-w-[10ch]">
            Skills
          </span>
          ]
        </Link>
        <Link href="#contact" className="pr-6 link w-1/4">
          [
          <span className="link-text inline-block text-center min-w-[10ch]">
            Contact
          </span>
          ]
        </Link>
      </div>
    </div>
  );
}
