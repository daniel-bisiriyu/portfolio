"use client";

import Link from "next/link";
import { Sofia_Sans_Condensed } from "next/font/google";
import SlideText from "./slide-text";

const sofia = Sofia_Sans_Condensed();

export default function Navbar() {
  return (
    <div className="flex justify-between align-center p-4 md:py-8 md:px-10">
      <div className={`${sofia.className} font-black text-xl`}>
        <p>DANIEL</p>
        <br />
        <p className="mt-[-2.55rem]"> BISIRIYU</p>
      </div>
      <div className="self-center hidden md:block">
        <Link href="#about" className="pr-6 w-1/4 cursor-pointer">
          {/* <span>[</span> */}
          <span className="link-text inline-block text-center cursor-pointer my-0 py-0">
            <SlideText text="About Me" />
          </span>
          {/* <span>]</span> */}
        </Link>
        <Link
          href="#experience"
          className="pr-6 w-1/4 cursor-pointer cursor-pointer"
        >
          <span className="link-text inline-block text-center cursor-pointer">
            {/* Experience */}
            <SlideText text="Experience" />
          </span>
        </Link>
        <Link href="#skills" className="pr-6 link w-1/4">
          {/* [ */}
          <span className="link-text inline-block text-center cursor-pointer">
            {/* Skills */}
            <SlideText text="Skills" />
          </span>
          {/* ] */}
        </Link>
        <Link href="#contact" className="pr-6 link w-1/4">
          {/* [ */}
          <span className="link-text inline-block text-center cursor-pointer">
            {/* Contact */}
            <SlideText text="Contact" />
          </span>
          {/* ] */}
        </Link>
      </div>
    </div>
  );
}
