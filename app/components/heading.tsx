"use client";

import gsap from "gsap";
import { ReactRef, useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

export default function Heading({
  text,
  ref,
}: {
  text: string;
  ref: ReactRef;
}) {
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      const split = SplitText.create(".heading", {
        type: "chars, lines",
        mask: "lines",
      });

      const splitMobile = SplitText.create(".heading-mobile", {
        type: "chars, lines",
        mask: "lines",
      });

      gsap.from(splitMobile.chars, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: {
          each: 0.05,
          from: "center",
        },
      });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: ".heading",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          onEnter: () => console.log("Triggered!"),
        },
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: {
          each: 0.05,
          from: "center",
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      <h1
        className={`heading hidden sm:block leading-[99%] sm:text-[11rem] text-center relative font-extrabold`}
      >
        {text}
      </h1>
      <h1
        className={`heading block sm:hidden leading-[99%] text-5xl text-center relative font-extrabold`}
      >
        {text}
      </h1>
      <div className="w-[30%] mx-auto mt-0 sm:mt-[-2rem]">
        <svg viewBox="0 0 200 20" preserveAspectRatio="none">
          <path
            d="M5 12 Q 50 8, 100 11 T 195 10"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
