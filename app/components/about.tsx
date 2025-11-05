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
    <div id="about" className="mt-24 sm:mt-48">
      <Heading ref={aboutRef} text="About" />
      <div className="about pb-12 px-4 sm:px-64">
        <div className="moi py-12 sm:py-32 flex flex-col-reverse sm:flex-row justify-between">
          <div className="w-full sm:w-1/2 text-left">
            <Paragraph
              ref={aboutRef}
              text={`Hi, I'm Daniel! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aut sint corporis, itaque quis voluptatem nihil
              possimus maxime similique deleniti reprehenderit quos velit esse
              harum facilis neque cupiditate ad sequi temporibus?`}
            />
          </div>
          <div className="hidden sm:flex justify-center sm:w-1/2">
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
        <div className="py-6 sm:py-24">
          <Paragraph
            ref={aboutRef}
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad
            labore dolor ab dolores alias mollitia aliquid minus possimus,
            pariatur dolorum magni esse veritatis hic sint id ex numquam
            doloremque!`}
          />
        </div>
      </div>
    </div>
  );
}
