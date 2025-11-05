"use client";

import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor") as HTMLElement;
    let mouseX: number;
    let mouseY: number;
    // 1. Listen for mouse movement anywhere on the document
    document.addEventListener("mousemove", (e) => {
      // e.clientX and e.clientY provide the mouse position relative to the viewport
      mouseX = e.clientX;
      mouseY = e.clientY;

      // 2. Update the position of the dot using CSS variables or inline styles
      // Using transform is better for performance than setting top/left
      cursor.style.transform = "scale(1)";
      cursor.style.transform = `translate(${mouseX}px, ${
        mouseY - 20
      }px) scale(1)`;
    });

    // To create a "fancy" effect, you can adjust the dot when hovering over interactive elements.
    const interactiveElements = document.querySelectorAll("a, button, input");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseover", () => {
        // Enlarge or change the dot on hover
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(4)`;
        cursor.innerText = "Click";
        cursor.style.color = "#ffffff";
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.style.textAlign = "center";
        cursor.style.paddingTop = "0.5rem";
      });

      el.addEventListener("mouseout", () => {
        // Reset the dot when leaving the element
        cursor.style.transform = `translate(${mouseX}px, ${
          mouseY - 20
        }px) scale(1)`;
        cursor.style.width = "10px";
        cursor.style.height = "10px";
        cursor.innerText = "";
      });
    });
  }, []);

  return <div id="custom-cursor"></div>;
}
