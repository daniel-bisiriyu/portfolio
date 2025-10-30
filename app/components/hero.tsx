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

  interface MouseEnterEvent
    extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

  const handleMouseMove = (e: MouseEnterEvent): void => {
    const strength = 90;
    const magneticDiv = e.target as HTMLDivElement;
    const bound = magneticDiv.getBoundingClientRect();

    gsap.to(magneticDiv, {
      x: ((e.clientX - bound.left) / magneticDiv.offsetWidth - 0.5) * strength,
      y: ((e.clientY - bound.top) / magneticDiv.offsetHeight - 0.5) * strength,
      duration: 2,
      ease: "elastic.easeOut",
    });
  };

  const handleMouseLeave = (e: MouseEnterEvent) => {
    const magneticDiv = e.target as HTMLDivElement;
    gsap.to(magneticDiv, { x: 0, y: 0, ease: "elastic.easeOut", duration: 2 });
  };

  return (
    <div className="hero pt-12 sm:h-screen">
      <div className="px-4 sm:px-12 text-center sm:text-left magnetic">
        <h1 className="text-2xl font-semibold">
          Hello ~ I'm Daniel Bisiriyu, a
        </h1>
        <div className="pt-12 sm:pt-0">
          <p
            id="scramble"
            className="text-1 text-7xl sm:text-[14rem] font-extrabold tracking-[10px] magnet"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            SOFTWARE
          </p>
          <span className="block w-[15rem] ml-8 mt-[-1rem] sm:w-[30rem] sm:ml-24 sm:mt-[-6rem]">
            <svg viewBox="0 0 200 20" preserveAspectRatio="none">
              <path
                d="M5 15 Q 100 5, 195 15"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <p
            className="text-2 text-7xl pt-12 sm:pt-0 sm:text-[14rem] font-extrabold sm:ml-150 tracking-[10px] magnet"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            ENGINEER
          </p>
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
