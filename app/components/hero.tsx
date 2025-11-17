"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin, DrawSVGPlugin, SplitText } from "gsap/all";

export default function Hero() {
  useGSAP(() => {
    gsap.registerPlugin(ScrambleTextPlugin, DrawSVGPlugin, SplitText);
    const splitP1 = SplitText.create(".text-1", {
      type: "chars, lines",
      mask: "lines",
    });
    const splitP2 = SplitText.create(".text-2", {
      type: "chars, lines",
      mask: "lines",
    });

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

    tl.from(splitP1.chars, {
      yPercent: -100,
      stagger: {
        each: 0.1,
        from: "random",
      },
    })
      .from(
        splitP2.chars,
        {
          yPercent: -100,
          stagger: {
            each: 0.1,
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
      .to(
        "#scramble",
        {
          scrambleText: "FRONTEND",
        },
        "+=3"
      )
      .to(
        "#scramble",
        {
          scrambleText: "SOFTWARE",
        },
        "+=3"
      );
  });

  return (
    <div className="hero pt-12">
      <div className="px-4 md:px-24 xl:px-32 text-center md:text-left magnetic">
        <h1 className="text-2xl font-semibold">
          Hello ~ I&apos;m Daniel Bisiriyu, a
        </h1>
        <div className="mt-12 xl:pt-0">
          <div className="text-center md:text-left">
            <p
              id="scramble"
              className="text-1 text-6xl md:text-9xl xl:text-[12rem] font-extrabold tracking-[10px] magnet ml-"
            >
              SOFTWARE
            </p>
            <span className="block w-[60%] mx-auto mt-[-1rem] md:ml-8 xl:w-[30rem] xl:ml-24 xl:mt-[-3rem]">
              <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                <path
                  d="M5 15 Q 100 5, 195 15"
                  fill="none"
                  stroke="#8b5cf6"
                  // stroke="rgb(57, 255, 20)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          <div className="text-center md:text-right mt-6">
            <p className="text-2 text-6xl md:pt-12 md:text-9xl xl:text-[12rem] font-extrabold tracking-[10px] magnet">
              ENGINEER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <svg viewBox="0 0 200 20" preserveAspectRatio="none">
              <path
                d="M5 12 Q 50 8, 100 11 T 195 10"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg> */
}
{
  /* <div> */
}
{
  /* <p className="py-6 text-xl">
          I am a jack of all trades, a master of one, Frontend and I have over
          five years building stuff.
        </p> */
}
