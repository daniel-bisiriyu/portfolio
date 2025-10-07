"use client"; // if you’re in Next.js App Router

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current as HTMLDivElement;

    const scrollWidth = track.scrollWidth - window.innerWidth;

    let ctx = gsap.context(
      () => {
        gsap.to(track, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${scrollWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });
      },
      { context: section }
    );

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <>
      <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Welcome</h1>
      </section>

      <section ref={sectionRef} className="relative h-screen overflow-hidden">
        <div ref={trackRef} className="flex h-full">
          <div className="w-screen h-full flex items-center justify-center bg-red-500 text-5xl font-bold">
            Panel 1
          </div>
          <div className="w-screen h-full flex items-center justify-center bg-blue-500 text-5xl font-bold">
            Panel 2
          </div>
          <div className="w-screen h-full flex items-center justify-center bg-purple-600 text-5xl font-bold">
            Panel 3
          </div>
          <div className="w-screen h-full flex items-center justify-center bg-green-500 text-5xl font-bold">
            Panel 4
          </div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center bg-gray-200 text-black">
        <h2 className="text-3xl font-semibold">Thanks for scrolling!</h2>
      </section>
    </>
  );
}
