"use client";

import About from "./components/about";
import Contact from "./components/contact";
import CursorTrail from "./components/cursor-trail";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import LoaderText from "./components/loading-text";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
// import { useEffect } from "react";

import gsap from "gsap";

export default function Home() {
  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(".loading-screen", {
  //       yPercent: -100,
  //       ease: "power4.inOut",
  //       duration: 1,
  //     })
  //     .from(".page-content", {
  //       opacity: 0,
  //       y: 50,
  //       duration: 0.8,
  //       ease: "power2.out",
  //     });
  // }, []);

  return (
    <>
      <div className="loading-screen fixed top-0 left-0 w-screen h-screen bg-black z-50 flex items-center justify-center">
        {/* <h1 className="text-white">Loading...</h1> */}
        <LoaderText />
      </div>
      {/* <div className={`page-content overflow-hidden`}>
        <CursorTrail />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div> */}
    </>
  );
}
