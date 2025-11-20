"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin, DrawSVGPlugin, SplitText } from "gsap/all";
interface HeroProps {
  startAnimation: boolean;
}
export default function Hero({ startAnimation }: HeroProps) {
  useGSAP(() => {
    if (!startAnimation) return;

    gsap.registerPlugin(ScrambleTextPlugin, DrawSVGPlugin, SplitText);
    const splitP1 = SplitText.create(".text-1", {
      type: "chars, lines",
      mask: "lines",
    });
    const splitP2 = SplitText.create(".text-2", {
      type: "chars, lines",
      mask: "lines",
    });

    // gsap.set([".text-1", ".text-2"], {
    //   visibility: 0,
    // });

    gsap.set(".text-1", {
      x: 100,
    });

    gsap.set(".text-2", {
      x: -100,
    });

    const tl = gsap.timeline({
      duration: 0.5,
      ease: "power3.out",
    });
    tl.set([".text-1", ".text-2", ".underline-path"], { visibility: "visible" }) // reveal without flash
      .from(splitP1.chars, {
        yPercent: -100,
        autoAlpha: 0,
        stagger: {
          each: 0.05,
          from: "random",
        },
      })
      .from(
        splitP2.chars,
        {
          yPercent: -100,
          autoAlpha: 0,
          stagger: {
            each: 0.05,
            from: "random",
          },
        },
        "<"
      )
      .to(
        ".text-1",
        {
          x: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.9"
      )
      .to(
        ".text-2",
        {
          x: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<"
      )
      .fromTo(
        ".underline-path",
        { drawSVG: "0% 0%" },
        {
          drawSVG: "0% 100%",
          duration: 1,
          ease: "power4.inOut",
        },
        "-=0.5"
      )
      .to(
        "#scramble",
        {
          scrambleText: "SOFTWARE",
        },
        "+=3"
      )
      .to(
        "#scramble",
        {
          scrambleText: "FRONTEND",
        },
        "+=3"
      );
  }, [startAnimation]);

  return (
    <div className="hero pt-0 sm:pt-12">
      <div className="px-4 py-24 md:py-0 md:px-24 xl:px-32 text-center md:text-left">
        <h1 className="text-2xl font-semibold">
          Hello ~ I&apos;m Daniel Bisiriyu, a
        </h1>
        <div className="mt-12 xl:pt-0">
          <div className="text-center md:text-left">
            <p
              id="scramble"
              className="text-1 text-6xl md:text-9xl xl:text-[12rem] font-extrabold tracking-[10px] invisible"
            >
              FRONTEND
            </p>
            <span className="block w-[60%] mx-auto mt-[-1rem] md:ml-8 xl:w-[30rem] xl:ml-24 xl:mt-[-3rem]">
              <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                <path
                  d="M5 15 Q 100 5, 195 15"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="underline-path invisible"
                />
              </svg>
            </span>
          </div>
          <div className="text-center md:text-right mt-6">
            <p className="text-2 text-6xl md:pt-12 md:text-9xl xl:text-[12rem] font-extrabold tracking-[10px] invisible">
              ENGINEER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
