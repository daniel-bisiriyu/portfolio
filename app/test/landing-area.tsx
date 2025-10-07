"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollContext } from "./scroll-context";

gsap.registerPlugin(ScrollTrigger);

export default function LandingArea() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollTween } = useScrollContext();

  useGSAP(() => {
    if (!scrollTween || !container.current) return;

    gsap.from(container.current.querySelectorAll("h1, .p1, .p2"), {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        containerAnimation: scrollTween, // 👈 synced to parent
        start: "left center",
        end: "right center",
        scrub: true,
        markers: true,
      },
    });
  }, [scrollTween]); // run when parent tween is ready

  return (
    <div
      ref={container}
      className="section landing p-12 text-[#8dc9f4] w-screen h-full flex items-center"
    >
      <div>
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
