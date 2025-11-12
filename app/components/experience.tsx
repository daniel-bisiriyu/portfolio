"use client";

import { useRef } from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";
import SlideText from "./slide-text";
import ThreeDGallery from "./3d-gallery";
// import Gallery from "./gallery";
// import FloatingImages from "./gallery2";

export default function Experience() {
  const experienceRef = useRef(null);

  return (
    <div ref={experienceRef}>
      <div className="experience text-left pt-8">
        <Heading ref={experienceRef} text="Experience" />
        {/* <FloatingImages /> */}
        <ThreeDGallery />
        <div className="px-6 md:px-24 xl:px-64 mt-12 md:mt-12">
          <div className="flex flex-col md:flex-row justify-between pb-12 md:pb-24">
            <div className="w-full md:w-1/2">
              <div className="text-3xl md:text-5xl font-semibold">
                {/* Moniepoint */}
                <SlideText text="Moniepoint" />
              </div>
              <p>[2021 - 2025]</p>
            </div>
            <div className="text-left py-2 w-full md:w-1/2">
              <Paragraph ref={experienceRef}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi fugiat veritatis enim eveniet! Culpa tempora commodi
                optio, voluptatem porro rem voluptate quisquam tempore facere
                eligendi quod, laborum quia repellendus natus?
              </Paragraph>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pb-12 md:pb-24">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-5xl">
                <SlideText text="Scelloo" />
              </h1>
              <p>[2020 - 2021]</p>
            </div>
            <div className="text-left py-2 w-full md:w-1/2">
              <Paragraph ref={experienceRef}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi fugiat veritatis enim eveniet! Culpa tempora commodi
                optio, voluptatem porro rem voluptate quisquam tempore facere
                eligendi quod, laborum quia repellendus natus?
              </Paragraph>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pb-12 md:pb-24">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-5xl">
                <SlideText text="VisionDev" />
              </h1>
              <p>[2019 - 2020]</p>
            </div>
            <div className="text-left py-2 w-full md:w-1/2">
              <Paragraph ref={experienceRef}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi fugiat veritatis enim eveniet! Culpa tempora commodi
                optio, voluptatem porro rem voluptate quisquam tempore facere
                eligendi quod, laborum quia repellendus natus?
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
