"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ScrollProvider } from "./scroll-context";
import LandingArea from "./landing-area";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollTweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray(".section");

    // Horizontal scroll tween
    scrollTweenRef.current = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        end: () =>
          "+=" +
          (containerRef.current!.scrollWidth -
            document.documentElement.clientWidth),
        markers: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <ScrollProvider value={{ scrollTween: scrollTweenRef.current }}>
      <div className="wrapper h-screen overflow-hidden">
        <div ref={containerRef} className="container flex w-[400vw] h-full">
          <LandingArea />
          <LandingArea />
          <LandingArea />
          <LandingArea />
        </div>
      </div>
    </ScrollProvider>
  );
}
