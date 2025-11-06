"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Heading from "./heading";
import { useRef } from "react";
import Paragraph from "./paragraph";

export default function About() {
  const aboutRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    gsap.from(".moi-img", {
      scrollTrigger: {
        trigger: ".moi",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
      },
      clipPath: "inset(0% 0% 100% 0%)",
      ease: "none",
    });
  });

  return (
    <div id="about" className="mt-24 xl:mt-48">
      <Heading ref={aboutRef} text="About" />
      <div className="about pb-12 px-4 md:px-24 xl:px-64">
        <div className="moi py-12 md:py-32 flex flex-col-reverse md:flex-row justify-between">
          <div className="w-full md:w-1/2 text-left">
            <Paragraph ref={aboutRef}>
              TL:DR - I am a great engineer and you should hire me!
            </Paragraph>
            <Paragraph ref={aboutRef}>
              Hi, I&apos;m Daniel! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aut sint corporis, itaque quis voluptatem nihil
              possimus maxime similique deleniti reprehenderit quos velit esse
              harum facilis neque cupiditate ad sequi temporibus?x
            </Paragraph>
          </div>
          <div className="hidden md:flex justify-center md:w-1/2">
            <Image
              src="/moi.jpg"
              width={300}
              height={300}
              alt="Daniel Bisiriyu"
              className="moi-img grayscale"
            />
          </div>
        </div>
        <div className="">
          <hr />
        </div>
        <div className="py-6 md:py-12 xl:py-24">
          <Paragraph ref={aboutRef}>
            My CORE values: Conscientious, Not sure what should be O yet
            Reliable, Excellence! <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            deserunt. Ea molestias fugiat doloribus! Voluptatem commodi omnis
            mollitia iure laboriosam laudantium. Nobis facilis adipisci dolorum
            maiores officia rem, repellat blanditiis.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
