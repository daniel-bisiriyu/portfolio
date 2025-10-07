"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingArea from "./components/landing";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    // Kill old triggers on hot reload (important in Next.js dev mode)
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.killTweensOf(".container .section");

    const container = document.querySelector(".container") as HTMLElement;
    const sections = gsap.utils.toArray<HTMLElement>(".container .section");

    scrollRef.current = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      // invalidateOnRefresh: true,
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        end: () =>
          container
            ? "+=" +
              (container.scrollWidth - document.documentElement.clientWidth)
            : "+=0",
      },
    });

    // Example: animate each section as it comes into view
    sections.forEach((section) => {
      gsap.from(section.querySelector("h1"), {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollRef.current ?? undefined, // tie to horizontal scroll
          start: "left center",
          end: "right center",
          scrub: true,
        },
      });
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={mainRef} className="h-screen">
      <div className="container flex">
        <section className="section bg-black flex items-center justify-center">
          {/* <h1 className="text-6xl font-bold text-white">Section 1</h1> */}
          <LandingArea scrollTween={scrollRef} />
        </section>
        <section className="section bg-red flex items-center justify-center">
          {/* <h1 className="text-6xl font-bold text-white">Section 2</h1> */}{" "}
          <LandingArea scrollTween={scrollRef} />
        </section>
        <section className="section bg-black flex items-center justify-center">
          {/* <h1 className="text-6xl font-bold text-white">Section 3</h1> */}
          <LandingArea scrollTween={scrollRef} />
        </section>
      </div>
    </div>
  );
}
