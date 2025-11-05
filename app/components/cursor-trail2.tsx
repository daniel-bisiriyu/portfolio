"use client";

import { useEffect } from "react";

export default function CursorTrail2() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Track the actual mouse position
    const handleMouseMove = (e: MouseEvent) => {
      console.log("mouse-move");
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smoothly follow the target position using requestAnimationFrame
    const animate = () => {
      console.log("animate");

      // Lerp: move 10% closer to target each frame
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    // Fancy hover effects
    const interactiveElements = document.querySelectorAll("a, button, input");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className="fixed top-0 left-0 w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out"
    ></div>
  );
}
