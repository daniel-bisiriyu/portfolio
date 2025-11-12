"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
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

export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLDivElement>(".float-item");

      items.forEach((item) => {
        // Random scattered positions (X, Y)
        const startX = gsap.utils.random(-40, 40); // %
        const startY = gsap.utils.random(-30, 30); // %
        const rotX = gsap.utils.random(-40, -15); // tilt backward
        const deepZ = gsap.utils.random(-6000, -3000); // far away

        gsap.fromTo(
          item,
          {
            xPercent: startX,
            yPercent: startY,
            rotationX: rotX,
            z: deepZ,
          },
          {
            z: 1500, // fly past camera
            rotationX: 0,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              scrub: true,
              start: "top bottom",
              end: "bottom top",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* <div
        ref={containerRef}
        className="relative h-[200vh] w-full perspective-1000 overflow-visible"
      > */}
      <div className="preserve-3d grid w-full place-items-center perspective-[4000px] max-w-[40vw] mx-auto relative">
        <div className="gallery-grid relative justify-center perspective-[4000px] preserve-3d grid w-full gap-x-[1.25em] gap-y-[1.25em] auto-cols-[1fr] grid-rows-[auto]">
          {IMAGES.map((src, i) => (
            <div
              key={i}
              className="float-item absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 preserve-3d"
            >
              <Image
                src={src}
                alt="Floating"
                width={150}
                height={150}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
