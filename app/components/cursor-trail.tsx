"use client";

import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor") as HTMLElement;
    let mouseX: number;
    let mouseY: number;
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.transform = "scale(1)";
      cursor.style.transform = `translate(${mouseX}px, ${
        mouseY - 20
      }px) scale(1)`;
    });

    const interactiveElements = document.querySelectorAll("a, button, input");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseover", () => {
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(4)`;
        cursor.innerText = "Click";
        cursor.style.color = "#ffffff";
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.style.textAlign = "center";
        cursor.style.paddingTop = "0.5rem";
      });

      el.addEventListener("mouseout", () => {
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
