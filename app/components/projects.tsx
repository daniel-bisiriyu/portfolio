"use client";

import { useRef } from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";
import SlideText from "./slide-text";

export default function Projects() {
  const projectsRef = useRef(null);

  return (
    <div ref={projectsRef}>
      <div className="experience text-left pt-8">
        <Heading ref={projectsRef} text="Projects" />
        <div className="px-6 md:px-24 xl:px-64 mt-12 md:mt-12">
          <div className="flex flex-col md:flex-row justify-between pb-12 md:pb-24">
            <div className="w-full md:w-1/2">
              <div className="text-3xl md:text-5xl font-semibold">
                <SlideText text="YouID" />
              </div>
              <p>[2021]</p>
            </div>
            <div className="text-left py-2 w-full md:w-1/2">
              <Paragraph ref={projectsRef}>
                Delivered a critical administrator dashboard feature designed to
                streamline and accelerate the identity verification process. The
                solution focused on providing a secure, high-efficiency tool for
                managing user identity documents and speeding up administrative
                workflows.
              </Paragraph>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pb-12 md:pb-24">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-5xl">
                <SlideText text="Gradely" />
              </h1>
              <p>[2021]</p>
            </div>
            <div className="text-left py-2 w-full md:w-1/2">
              <Paragraph ref={projectsRef}>
                Developed and implemented the comprehensive report card module
                for the educational platform. This project involved complex data
                visualization and ensuring accurate presentation of student
                performance metrics to meet stakeholder and academic
                requirements.
              </Paragraph>
            </div>
          </div>
          {/* <div className="flex flex-col md:flex-row justify-between pb-12 md:pb-24">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-5xl">
                <SlideText text="Jiggle" />
              </h1>
              <p>[2020]</p>
            </div>
            <div className="text-left py-2 w-full md:w-1/2">
              <Paragraph ref={projectsRef}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi fugiat veritatis enim eveniet! Culpa tempora commodi
                optio, voluptatem porro rem voluptate quisquam tempore facere
                eligendi quod, laborum quia repellendus natus?
              </Paragraph>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
