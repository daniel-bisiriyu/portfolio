// app/components/FloatingGallery.tsx
"use client"; // This component uses client-side hooks

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import "./FloatingGallery.css"; // We'll create this CSS file next
import { IMAGES } from "./gallery2";

// 1. Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// 2. Define our image data (use your own images here)

export default function GeminiGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // 3. Create a GSAP context for safe cleanup
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".float-item");

      // 4. Set the initial "scattered" state for each item
      items.forEach((item: any) => {
        gsap.set(item, {
          xPercent: gsap.utils.random(-150, 150),
          yPercent: gsap.utils.random(-150, 150),
          z: gsap.utils.random(-1000, -200), // Far away
          rotationX: gsap.utils.random(-20, 20),
          rotationZ: gsap.utils.random(-45, 45),
        });
      });

      // 5. Create the main ScrollTrigger timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: galleryWrapperRef.current, // Pin the wrapper
          pin: true,
          scrub: 1, // Smooth scrubbing
          start: "top top",
          end: "+=4000", // 4000px of scroll
          // markers: true, // Uncomment for debugging
        },
      });

      // 6. Define the animation phases
      tl
        // PHASE 1: Approach & Re-align
        .to(
          items,
          {
            z: 0, // Move to z=0 (screen level)
            yPercent: 0, // Center vertically
            rotationX: 0, // Straighten out
            rotationZ: 0, // Straighten out
            ease: "power1.inOut",
            stagger: {
              amount: 0.5, // Total time for all items to start
              from: "random", // Start from a random order
            },
          },
          0
        ) // Start at 0 seconds

        // PHASE 2: Spread Evenly
        .to(
          items,
          {
            xPercent: (i) => {
              // This maps the item's index to a horizontal position
              // e.g., 8 items -> -175%, -125%, -75%, -25%, 25%, 75%, 125%, 175%
              const spread = 175; // How far to spread them
              const itemsPerRow = 4; // Assume 4 items fit nicely
              const row = Math.floor(i / itemsPerRow);
              const col = i % itemsPerRow;
              const totalRows = Math.ceil(items.length / itemsPerRow);

              // Map column to xPercent
              const x = gsap.utils.mapRange(
                0,
                itemsPerRow - 1,
                -spread,
                spread,
                col
              );

              // Map row to yPercent (we already set yPercent=0, but we can override it here)
              // This is just an example of how you would do a grid
              // For now, let's keep it simple and just spread horizontally
              return x;
            },
            // Simple even spread for a single row:
            // xPercent: (i) => gsap.utils.mapRange(0, items.length - 1, -175, 175)(i),

            yPercent: (i) => {
              // Optional: Spread into a 2x4 grid
              const itemsPerRow = 4;
              const row = Math.floor(i / itemsPerRow); // 0 or 1
              return gsap.utils.mapRange(0, 1, -50, 50)(row); // Row 0 at -50%, Row 1 at 50%
            },

            ease: "power2.out",
          },
          0.5
        ) // Start 0.5 seconds into the timeline

        // PHASE 3: Fly Past & Fade
        .to(
          items,
          {
            z: 1500, // Fly *past* the camera
            opacity: 0,
            filter: "blur(10px)",
            ease: "power2.in", // Accelerate as it flies past
            stagger: {
              amount: 0.5,
              from: "random",
            },
          },
          1.5
        ); // Start 1.5 seconds into the timeline
    }, galleryWrapperRef); // Scope the context to our wrapper

    // 7. Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    // This wrapper is what we pin
    <div ref={galleryWrapperRef} className="gallery-wrapper">
      {/* This grid has the 3D perspective */}
      <div ref={galleryRef} className="gallery-grid">
        {IMAGES.map((image, i) => (
          <div className="float-item" key={i}>
            <Image
              src={image}
              alt={`Floating image ${i + 1}`}
              width={400}
              height={600}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
