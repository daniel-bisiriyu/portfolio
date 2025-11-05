"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin, DrawSVGPlugin } from "gsap/all";

export default function Hero() {
  useGSAP(() => {
    gsap.registerPlugin(ScrambleTextPlugin, DrawSVGPlugin);

    const tl = gsap.timeline({
      yoyo: true,
      duration: 1,
      delay: 2,
    });

    gsap.from(".text-1", {
      y: 50,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".text-2", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    tl.to("#scramble", {
      scrambleText: "FRONTEND",
    }).to(
      "#scramble",
      {
        scrambleText: "SOFTWARE",
      },
      "+=3"
    );
  });

  // const handleMouseMove = (
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ): void => {
  //   const strength = 90;
  //   const magneticDiv = e.target as HTMLDivElement;
  //   const bound = magneticDiv.getBoundingClientRect();

  //   gsap.to(magneticDiv, {
  //     x: ((e.clientX - bound.left) / magneticDiv.offsetWidth - 0.5) * strength,
  //     y: ((e.clientY - bound.top) / magneticDiv.offsetHeight - 0.5) * strength,
  //     duration: 2,
  //     ease: "elastic.easeOut",
  //   });
  // };

  // const handleMouseLeave = (
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   const magneticDiv = e.target as HTMLDivElement;
  //   gsap.to(magneticDiv, { x: 0, y: 0, ease: "elastic.easeOut", duration: 2 });
  // };

  return (
    <div className="hero pt-12">
      <div className="px-4 sm:px-32 text-center sm:text-left magnetic">
        <h1 className="text-2xl font-semibold">
          Hello ~ I&apos;m Daniel Bisiriyu, a
        </h1>
        <div className="mt-12 sm:pt-0">
          <div className="text-center sm:text-left">
            <p
              id="scramble"
              className="text-1 text-6xl sm:text-[12rem] font-extrabold tracking-[10px] magnet"
            >
              SOFTWARE
            </p>
            <span className="block w-[15rem] ml-12 mt-[-1rem] sm:w-[30rem] sm:ml-24 sm:mt-[-3rem]">
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
          <div className="text-center sm:text-right mt-6">
            <p className="text-2 text-6xl sm:pt-12 sm:text-[12rem] font-extrabold tracking-[10px] magnet">
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
