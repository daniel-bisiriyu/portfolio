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

    const splitMobile = SplitText.create(".heading-mobile", {
      type: "chars, lines",
      mask: "lines",
    });

    gsap.from(splitMobile.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        each: 0.05,
        from: "center",
      },
    });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: ".heading",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => console.log("Triggered!"),
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
        scrub: 1,
      },
      clipPath: "inset(0% 0% 100% 0%)",
      ease: "none",
    });
  });

  return (
    <div id="about" className="mt-24 sm:mt-0">
      <h1
        className={`heading hidden sm:block leading-[99%] text-7xl sm:text-[14rem] text-center relative font-extrabold`}
      >
        ABOUT ME
      </h1>
      <h1
        className={`heading-mobile block sm:hidden leading-[99%] text-7xl sm:text-[14rem] text-center relative font-extrabold`}
      >
        ABOUT ME
      </h1>
      <div className="about pb-12 px-4 sm:px-24">
        <div className="moi py-32 flex flex-col-reverse sm:flex-row justify-between">
          <div className="w-full sm:w-1/2">
            <p className="text-2xl pr-6 font-medium uppercase text-justify">
              Hi, I&apos;m Daniel! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aut sint corporis, itaque quis voluptatem nihil
              possimus maxime similique deleniti reprehenderit quos velit esse
              harum facilis neque cupiditate ad sequi temporibus?
            </p>
          </div>
          <div className="hidden sm:block sm:w-1/2 relative flex justify-center">
            <Image
              src="/moi.jpg"
              // width={300}
              // height={300}
              fill
              alt="Daniel Bisiriyu"
              className="moi-img grayscale"
            />
          </div>
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
