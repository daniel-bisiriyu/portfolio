"use client";

import { useEffect } from "react";
import LandingArea from "./landing";

export default function Wrapper() {
  useEffect(() => {
    console.log("effect");

    const container = document.querySelector(".container") as HTMLElement;
    console.log("container", container);

    window.addEventListener("scroll", () => {
      console.log("scroll");
      const scrollY = window.scrollY;
      container.style.transform = `translateX(-${scrollY}px)`;
    });
  }, []);

  return (
    <div className="flex justify-start container w-[500vw]">
      <div className="main-bg"></div>
      {/* <LandingArea />
      <LandingArea />
      <LandingArea />
      <LandingArea />
      <LandingArea /> */}
    </div>
  );
}
