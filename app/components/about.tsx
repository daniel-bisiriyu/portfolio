"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Heading from "./heading";
import { useRef } from "react";
import Paragraph from "./paragraph";

export default function About() {
  const aboutRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    gsap.from(".moi-img", {
      scrollTrigger: {
        trigger: ".moi",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
      },
      clipPath: "inset(0% 0% 100% 0%)",
      ease: "none",
    });
  });

  return (
    <div id="about" className="mt-24 xl:mt-48">
      <Heading ref={aboutRef} isAbout={true} text="About me" />
      <div className="about pb-12 px-4 sm:px-12 md:px-24 xl:px-54">
        <div className="moi py-12 md:py-32 flex flex-col-reverse md:flex-row justify-between">
          <div className="w-full md:w-1/2 text-left">
            <Paragraph ref={aboutRef}>TL:DR - I am awesome!</Paragraph>
            <br />
            <Paragraph ref={aboutRef}>
              Hi, I&apos;m Daniel! A Software Engineer based in Lagos. I have
              over 6 years experience crafting web solutions in high-growth
              teams, creating products used by millions and helping companies
              transform complex ideas into clean, functional digital
              experiences. I spent four years studying Biochemistry and then
              swapped test tubes for test suites when I picked up a Java
              textbook in my final year and haven&apos;t looked back since.
            </Paragraph>
            <br />
            <Paragraph ref={aboutRef}>
              My background spans fintech, logistics, edtech, and identity
              verification, industries where performance, security, and user
              experience aren&apos;t negotiable. I specialize in React, Vue.js,
              and modern JavaScript, transforming complex requirements into
              intuitive interfaces that just work. My work combines technical
              depth, strong UI instincts, and a commitment to shipping quality.
              I have worked in different sectors on over 20 projects across over
              10 companies. I am currently working on personal projects,
              building a company with a friend and having a lot of fun while
              learning new skills and technologies.
            </Paragraph>
            <br />
          </div>
          <div className="hidden md:flex justify-center md:w-1/2">
            <Image
              src="/moi.jpg"
              width={350}
              height={200}
              alt="Daniel Bisiriyu"
              className="moi-img grayscale h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
