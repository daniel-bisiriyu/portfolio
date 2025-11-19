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
      // const tl = gsap.timeline();

      // const splitMobile = SplitText.create(".no-animation-on-scroll", {
      //   type: "chars, lines",
      //   mask: "lines",
      // });

      // gsap.from(splitMobile.chars, {
      //   yPercent: 100,
      //   opacity: 0,
      //   duration: 1,
      //   stagger: {
      //     each: 0.05,
      //     from: "center",
      //   },
      // });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: ".heading",
          start: "top 80%",
          end: "bottom 50%",
          scrub: 0.5,
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
          },
          duration: 1,
          ease: "power4.inOut",
        }
      );
    },
    { scope: ref }
  );

  const shouldNotAnimateOnScroll = () => {
    return isAbout && window.innerWidth < 788;
  };

  return (
    <div ref={ref}>
      <h1
        className={`heading hidden md:block leading-[99%] md:text-8xl xl:text-[10rem] text-center relative font-extrabold`}
      >
        {text}
      </h1>

      <h1
        className={`${
          shouldNotAnimateOnScroll() && "no-animation-on-scroll"
        } block md:hidden leading-[99%] text-5xl text-center relative font-extrabold`}
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
