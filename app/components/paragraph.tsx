"use client";

import gsap from "gsap";
import { ReactRef, useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Inter } from "next/font/google";

const montSerrat = Inter({ weight: ["400"] });

export default function Paragraph({
  text,
  ref,
}: {
  text: string;
  ref: ReactRef;
}) {
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      const splitP = SplitText.create(".p-wrapper p", {
        type: "lines",
        mask: "lines",
      });

      gsap.from(splitP.lines, {
        scrollTrigger: {
          trigger: ".p-wrapper p",
          start: "top 80%",
          end: "bottom 30%",
          scrub: true,
          onEnter: () => console.log("p entered"),
        },
        yPercent: 100,
        opacity: 0,
        duration: 0.2,
        stagger: {
          each: 0.05,
          from: "end",
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="p-wrapper">
      <p className={`${montSerrat.className} text-sm  sm:text-lg`}>{text}</p>
    </div>
  );
}
