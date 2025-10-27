"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

export default function About() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const split = SplitText.create(".heading", {
      type: "chars, lines",
      mask: "lines",
    });

    gsap.from(split.chars, {
      //   scrollTrigger: ".exp-text",
      scrollTrigger: {
        trigger: ".heading",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      yPercent: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        each: 0.05,
        from: "center",
      },
    });

    gsap.from(".moi-img", {
      scrollTrigger: {
        trigger: ".moi",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1, // smooth scrubbing
      },
      clipPath: "inset(0% 0% 100% 0%)", // Hidden (clipped from bottom)
      ease: "none",
    });
  });

  return (
    <div>
      <h1
        className={`heading leading-[99%] text-[12rem] text-center relative font-extrabold`}
      >
        ABOUT ME
      </h1>
      <div className="about pb-12 px-24">
        {/* <div className="pt-12 flex flex-col items-center">
        <div className="ml-[-24rem]">
          <Image
            src="/moi.jpg"
            width={250}
            height={250}
            alt="Daniel Bisiriyu"
            className="grayscale"
          />
          <div className="text-2xl pl-12 pt-6 font-medium uppercase">
            Hi, I'm Daniel!
          </div>
        </div>

        <p className="text-center w-2/3 py-12 uppercase">
          I am a senior frontend engineer <br /> with over five years experience
          crafting products for the web!
        </p>
      </div> */}
        <div className="moi py-32 flex justify-between">
          <div className="w-1/2">
            <p className="text-2xl pr-6 font-medium uppercase text-justify">
              Hi, I'm Daniel! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aut sint corporis, itaque quis voluptatem nihil possimus
              maxime similique deleniti reprehenderit quos velit esse harum
              facilis neque cupiditate ad sequi temporibus?
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <Image
              src="/moi.jpg"
              width={300}
              height={300}
              alt="Daniel Bisiriyu"
              className="moi-img grayscale"
            />
            {/* <p className="pl-12">
            I am a senior frontend engineer <br /> with over five years
            experience crafting products for the web!
          </p> */}
          </div>
          {/* <div className="w-1/3">
          <p className="uppercase">
            I am a senior frontend engineer <br /> with over five years
            experience crafting products for the web!
          </p>
        </div> */}
        </div>
        <div className="">
          <hr />
        </div>
        <div className="py-24">
          <p className="text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad
            labore dolor ab dolores alias mollitia aliquid minus possimus,
            pariatur dolorum magni esse veritatis hic sint id ex numquam
            doloremque!
          </p>
        </div>
      </div>
    </div>
  );
}
