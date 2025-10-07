"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { RefObject } from "react";

gsap.registerPlugin(useGSAP);

type SectionProps = {
  scrollTween: RefObject<gsap.core.Tween | null>;
};

export default function LandingArea(props: SectionProps) {
  const container = useRef(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          // scrollTrigger: {
          //   trigger: container.current, // 👈 this section
          //   containerAnimation: props.scrollTween.current ?? undefined, // 👈 tie to parent scroll
          //   start: "left center", // when section enters view horizontally
          //   end: "right center",
          //   scrub: true, // link progress to scroll
          //   markers: true, // for debugging
          // },
          defaults: { duration: 0.3 },
        })
        .fromTo(
          "h1",
          {
            y: 100,
            opacity: 0,
            duration: 0.5,
          },
          {
            y: 0,
            opacity: 1,
          }
        )
        .fromTo(
          ".p1",
          {
            y: 100,
            opacity: 0,
            duration: 0.5,
          },
          {
            y: 0,
            opacity: 1,
          }
        )
        .fromTo(
          ".p2",
          {
            y: 100,
            opacity: 0,
            duration: 0.5,
          },
          {
            y: 0,
            opacity: 1,
          }
        );
    },
    { scope: container }
  );

  return (
    <div className="p-12 section landing text-[#8dc9f4]" ref={container}>
      <div className="w-full">
        <h1 className="text-9xl font-bold">Hi, I'm Daniel,</h1>
        <p className="text-5xl py-6 p1">
          a software engineer with 5+ years experience building cool stuff.
        </p>
        <p className="text-5xl pt-12 p2">
          Let me tell you about some of the things I've been up to....
        </p>
      </div>
    </div>
  );
}
