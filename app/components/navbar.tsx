"use client";

import Link from "next/link";
import { Sofia_Sans_Condensed } from "next/font/google";
import SlideText from "./slide-text";

const sofia = Sofia_Sans_Condensed();

export default function Navbar() {
  return (
    <div className="flex-col md:flex-row flex justify-between align-center p-4 md:py-8 md:px-10">
      <div
        className={`${sofia.className} text-center py-6 md:py-0 md:text-left font-black text-xl`}
      >
        <p>DANIEL</p>
        <br />
        <p className="mt-[-2.55rem]"> BISIRIYU</p>
      </div>
      <div className="justify-between md:justify-center self-center md:flex">
        <Link href="#about" className="pr-3 sm:pr-6 cursor-pointer">
          <span className="link-text inline-block text-center cursor-pointer my-0 py-0 flex items-center">
            <SlideText text="About Me" />
          </span>
        </Link>
        <Link
          href="#experience"
          className="pr-3 sm:pr-6 cursor-pointer cursor-pointer"
        >
          <span className="link-text inline-block text-center cursor-pointer">
            {/* Experience */}
            <SlideText text="Experience" />
          </span>
        </Link>
        <Link href="#skills" className="pr-3 sm:pr-6 link">
          {/* [ */}
          <span className="link-text inline-block text-center cursor-pointer">
            {/* Skills */}
            <SlideText text="Skills" />
          </span>
          {/* ] */}
        </Link>
        <Link href="#contact" className="pr-3 sm:pr-6 link">
          {/* [ */}
          <span className="link-text inline-block text-center cursor-pointer">
            {/* Contact */}
            <SlideText text="Contact" />
          </span>
          {/* ] */}
        </Link>
        <a
          className="link"
          href="https://drive.google.com/file/d/1GbPoQXjfyl34CjNW5sf1XdDUvv2jN1Zp/view?usp=sharing"
          target="_blank"
        >
          <span className="link-text inline-block text-center cursor-pointer">
            <SlideText text="Resume" />
          </span>
        </a>
      </div>
    </div>
  );
}
