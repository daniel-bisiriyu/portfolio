"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef, useEffect } from "react";

export default function SlideText({ text }: { text: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const split = useRef<any>(null);
  const splitLower = useRef<any>(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    // Split the two text layers
    split.current = new SplitText(
      wrapperRef.current!.querySelector(".upper-text"),
      {
        type: "chars",
      }
    );

    splitLower.current = new SplitText(
      wrapperRef.current!.querySelector(".lower-text"),
      { type: "chars" }
    );
  }, []);

  const handleMouseEnter = () => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.out" },
    });

    tl.to(split.current.chars, {
      yPercent: -100,
      stagger: {
        each: 0.03,
        from: "start",
      },
    }).to(
      splitLower.current.chars,
      {
        yPercent: -100,
        stagger: {
          each: 0.03,
          from: "start",
        },
      },
      0
    );
  };

  const handleMouseLeave = () => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.out" },
    });

    tl.to(split.current.chars, {
      yPercent: 0,
      stagger: {
        each: 0.03,
        from: "end",
      },
    }).to(
      splitLower.current.chars,
      {
        yPercent: 0,
        stagger: {
          each: 0.03,
          from: "end",
        },
      },
      0
    );
  };

  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="upper-text">{text}</div>

      <div className="lower-text absolute left-0">{text}</div>
    </div>
  );
}
