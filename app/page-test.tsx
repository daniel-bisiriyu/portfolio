"use client";

import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Test() {
  useGSAP(() => {
    // Kill old triggers (important in React StrictMode / hot reload)
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.killTweensOf(".container section");

    const container = document.querySelector(".container");
    const sections = gsap.utils.toArray<HTMLElement>(".container section");
    const mask = document.querySelector(".mask");

    if (!container || !sections.length) return;

    // Distance to scroll = scrollWidth - viewport
    const distance =
      container.scrollWidth - document.documentElement.clientWidth;

    // Main horizontal scroll tween
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      invalidateOnRefresh: true,
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: () => "+=" + distance,
        anticipatePin: 1,
        markers: true, // remove later
      },
    });

    // Progress bar animation
    if (mask) {
      gsap.to(mask, {
        width: "100%",
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: () => "+=" + distance,
          scrub: 1,
        },
      });
    }

    // Animate items inside each section
    sections.forEach((section) => {
      const textEls = section.querySelectorAll(".anim");
      if (!textEls.length) return;

      gsap.from(textEls, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween, // tie animation to horizontal scroll
          start: "left center",
          end: "right center",
          scrub: true,
          markers: true, // remove later
        },
      });
    });

    ScrollTrigger.refresh();
  });

  // Refresh on resize (helps with fluid layouts)
  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div className="container scrollx">
          <svg
            viewBox="0 0 900 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
              fill="#D9D9D9"
            />
            <mask
              id="mask0_0_1"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="900"
              height="10"
            >
              <path
                d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_0_1)">
              <rect className="mask" y="-49" height="99" fill="black" />
            </g>
          </svg>

          <section className="sec1 pin">
            <span>Advanced</span>
            <h1>Signify Elegance</h1>
            <div className="col">
              <p>Section 1 content…</p>
              <p>More content…</p>
            </div>
          </section>

          <section className="sec2 pin">
            <span className="anim">Advanced</span>
            <h1 className="anim">Signify Elegance</h1>
            <div className="col anim">
              <p>Section 2 content…</p>
              <p>More content…</p>
            </div>
          </section>

          <section className="sec3 pin">
            <span className="anim">Advanced</span>
            <h1 className="anim">Signify Elegance</h1>
            <div className="col anim">
              <p>Section 3 content…</p>
              <p>More content…</p>
            </div>
          </section>
        </div>
      </div>

      <section style={{ backgroundColor: "lightblue", height: "200vh" }} />
    </div>
  );
}
