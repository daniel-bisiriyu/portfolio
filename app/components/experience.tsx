"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

export default function Experience() {
  const experienceRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      const split = SplitText.create(".exp-text", {
        type: "chars, lines",
        mask: "lines",
      });
      const splitPFirst = SplitText.create(".first p", {
        type: "lines",
        mask: "lines",
      });
      const splitPSecond = SplitText.create(".second p", {
        type: "lines",
        mask: "lines",
      });
      const splitPThird = SplitText.create(".third p", {
        type: "lines",
        mask: "lines",
      });

      //   let tl = gsap.timeline();

      gsap.from(split.chars, {
        //   scrollTrigger: ".exp-text",
        scrollTrigger: {
          trigger: ".exp-text",
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

      gsap.from(splitPFirst.lines, {
        scrollTrigger: {
          trigger: ".first",
          start: "top 80%",
          end: "bottom 30%",
          scrub: true,
        },
        yPercent: 100,
        opacity: 0,
        duration: 0.2,
        stagger: {
          each: 0.05,
          from: "end",
        },
      });

      gsap.from(splitPSecond.lines, {
        scrollTrigger: {
          trigger: ".second",
          start: "top 80%",
          end: "bottom 30%",
          scrub: true,
        },
        yPercent: 100,
        opacity: 0,
        duration: 0.2,
        stagger: {
          each: 0.05,
          from: "end",
        },
      });

      gsap.from(splitPThird.lines, {
        scrollTrigger: {
          trigger: ".third",
          start: "top 80%",
          end: "bottom 30%",
          scrub: true,
        },
        yPercent: 100,
        opacity: 0,
        duration: 0.2,
        stagger: {
          each: 0.05,
          from: "end",
        },
      });
    },
    { scope: experienceRef }
  );

  return (
    <div ref={experienceRef}>
      <div className="experience text-left pt-8">
        <h1
          className={`hidden sm:block exp-text leading-[99%] text-[14rem] text-center relative font-extrabold pb-24`}
        >
          EXPERIENCE
        </h1>
        <h1
          className={`block sm:hidden exp-text leading-[99%] text-7xl text-center relative font-extrabold pb-12`}
        >
          EXPERIENCE
        </h1>
        <div className=" px-6 sm:px-32">
          <div className="first flex flex-col sm:flex-row justify-between pb-12 sm:pb-24">
            <div className="w-full sm:w-1/2">
              <h1 className="text-5xl font-semibold">Moniepoint</h1>
              <p>[2021 - 2025]</p>
            </div>
            <div className="text-left w-full sm:w-1/2">
              <p className="py-2 uppercase text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi fugiat veritatis enim eveniet! Culpa tempora commodi
                optio, voluptatem porro rem voluptate quisquam tempore facere
                eligendi quod, laborum quia repellendus natus?
              </p>
            </div>
          </div>
          <div className="second flex flex-col sm:flex-row justify-between pb-12 sm:pb-24">
            <div className="w-full sm:w-1/2">
              <h1 className="text-5xl">Scelloo</h1>
              <p>[2020 - 2021]</p>
            </div>
            <div className="text-left w-full sm:w-1/2">
              <p className="py-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit dignissimos ipsam distinctio rem sint voluptatum earum
                quibusdam hic maiores perspiciatis illo excepturi dolorum, dolor
                nihil error consectetur? Quo, consequatur debitis.
              </p>
            </div>
          </div>
          <div className="third flex flex-col sm:flex-row justify-between pb-12 sm:pb-24">
            <div className="w-full sm:w-1/2">
              <h1 className="text-5xl">VisionDev</h1>
              <p>[2019 - 2020]</p>
            </div>
            <div className="text-left w-full sm:w-1/2">
              <p className="py-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit dignissimos ipsam distinctio rem sint voluptatum earum
                quibusdam hic maiores perspiciatis illo excepturi dolorum, dolor
                nihil error consectetur? Quo, consequatur debitis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
