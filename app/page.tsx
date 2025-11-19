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
import { useEffect, useState } from "react";

import gsap from "gsap";
import Projects from "./components/projects";
import Notification from "./components/notification";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });

    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (!isLoading && fontsLoaded) {
      const tl = gsap.timeline({ delay: 0.7 });

      tl.to(".loading-screen", {
        yPercent: -100,
        ease: "power4.inOut",
        duration: 1,
        onComplete: () => setShowContent(true),
      }).from(".page-content", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, [isLoading, fontsLoaded]);

  const handleContactSuccess = () => {
    setShowNotification(true);
  };

  const handleContactClose = () => {
    setShowNotification(false);
  };

  return (
    <>
      {showNotification && <Notification onClose={handleContactClose} />}
      <div className="loading-screen fixed top-0 left-0 w-screen h-screen bg-black z-50 flex items-center justify-center">
        <LoaderText />
      </div>
      <div className={`page-content overflow-hidden`}>
        <CursorTrail />
        <Navbar />
        <Hero startAnimation={showContent} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact onSuccess={handleContactSuccess} />
        <Footer />
      </div>
    </>
  );
}
