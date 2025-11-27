"use client";

import gsap from "gsap";
import { ReactRef, useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText, DrawSVGPlugin } from "gsap/all";

export default function Heading({
  text,
  ref,
  isAbout,
}: {
  text: string;
  ref: ReactRef;
  isAbout?: boolean;
}) {
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);
      const split = SplitText.create(".heading", {
        type: "chars, lines",
        mask: "lines",
      });

      const isMobile = window.innerWidth <= 768;

      if (isMobile && isAbout) return;

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: ".heading",
          start: "top 80%",
          end: "bottom 50%",
          scrub: 0.5,
          once: true,
        },
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: {
          each: 0.05,
          from: "center",
        },
      });

      gsap.fromTo(
        ".heading-underline-path",
        {
          drawSVG: "0%",
        },
        {
          drawSVG: "100%",
          scrollTrigger: {
            trigger: ".heading-underline-path",
            start: "top 80%",
            end: "bottom 30%",
            scrub: 0.5,
            once: true,
          },
          duration: 1,
          ease: "power4.inOut",
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      <h1
        className={`heading leading-[99%] text-5xl md:text-8xl xl:text-[10rem] text-center relative font-extrabold`}
      >
        {text}
      </h1>
      <div className="w-[30%] mx-auto mt-0 md:mt-[-1.5rem]">
        <svg viewBox="0 0 200 20" preserveAspectRatio="none">
          <path
            d="M5 12 Q 50 8, 100 11 T 195 10"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="5"
            strokeLinecap="round"
            className="heading-underline-path"
          />
        </svg>
      </div>
    </div>
  );
}
