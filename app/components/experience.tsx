"use client";

import { useRef } from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";

export default function Experience() {
  const experienceRef = useRef(null);

  return (
    <div ref={experienceRef}>
      <div className="experience text-left pt-8">
        <Heading ref={experienceRef} text="Experience" />
        <div className="px-6 sm:px-64 mt-12 sm:mt-12">
          <div className="flex flex-col sm:flex-row justify-between pb-12 sm:pb-24">
            <div className="w-full sm:w-1/2">
              <h1 className="text-3xl sm:text-5xl font-semibold">Moniepoint</h1>
              <p>[2021 - 2025]</p>
            </div>
            <div className="text-left py-2 w-full sm:w-1/2">
              <Paragraph
                ref={experienceRef}
                text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi fugiat veritatis enim eveniet! Culpa tempora commodi
                optio, voluptatem porro rem voluptate quisquam tempore facere
                eligendi quod, laborum quia repellendus natus?`}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between pb-12 sm:pb-24">
            <div className="w-full sm:w-1/2">
              <h1 className="text-3xl sm:text-5xl">Scelloo</h1>
              <p>[2020 - 2021]</p>
            </div>
            <div className="text-left py-2 w-full sm:w-1/2">
              <Paragraph
                ref={experienceRef}
                text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi fugiat veritatis enim eveniet! Culpa tempora commodi
                optio, voluptatem porro rem voluptate quisquam tempore facere
                eligendi quod, laborum quia repellendus natus?`}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between pb-12 sm:pb-24">
            <div className="w-full sm:w-1/2">
              <h1 className="text-3xl sm:text-5xl">VisionDev</h1>
              <p>[2019 - 2020]</p>
            </div>
            <div className="text-left py-2 w-full sm:w-1/2">
              <Paragraph
                ref={experienceRef}
                text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi fugiat veritatis enim eveniet! Culpa tempora commodi
                optio, voluptatem porro rem voluptate quisquam tempore facere
                eligendi quod, laborum quia repellendus natus?`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
