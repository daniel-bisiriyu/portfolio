"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const IMAGES = [
  "/gallery/img1.png",
  "/gallery/img2.png",
  "/gallery/img3.png",
  "/gallery/img4.png",
  "/gallery/img5.png",
  "/gallery/img6.png",
  "/gallery/img7.png",
  "/gallery/img8.png",
  "/gallery/img9.png",
  "/gallery/img10.png",
  "/gallery/img11.png",
  "/gallery/img12.png",
  "/gallery/img13.png",
  "/gallery/img14.png",
  "/gallery/img15.png",
];

export default function ImageDepthScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = gsap.utils.toArray<HTMLDivElement>(".image-3d");

    items.forEach((item, i) => {
      // --- RANDOMIZED START POSITIONS (THE FIX) ---
      const startX = gsap.utils.random(-40, 40); // percent
      const startY = gsap.utils.random(-40, 40); // percent
      const startZ = gsap.utils.random(-4000, -800); // deeper into the screen
      const startRotX = gsap.utils.random(-40, 40);

      // Store initial transforms in CSS vars
      item.style.setProperty("--x", `${startX}%`);
      item.style.setProperty("--y", `${startY}%`);
      item.style.setProperty("--z", `${startZ}px`);
      item.style.setProperty("--rx", `${startRotX}deg`);

      // --- SCROLL ANIMATION ---
      gsap.to(item, {
        duration: 1,
        "--z": 1000, // move forward toward the camera
        "--rx": 0, // straighten rotation
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] w-full"
      style={{
        perspective: "1200px",
        overflow: "visible",
      }}
    >
      <div
        className="sticky top-0 h-screen w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {IMAGES.map((src, i) => (
          <div
            key={i}
            className="image-3d absolute"
            style={{
              transformStyle: "preserve-3d",
              transform:
                "translate(var(--x), var(--y)) translate3d(0,0,var(--z)) rotateX(var(--rx))",
            }}
          >
            <img
              src={src}
              alt="3d"
              className="w-48 h-48 object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
