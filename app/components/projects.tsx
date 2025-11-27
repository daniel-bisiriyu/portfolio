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
        <div className="px-6 sm:px-12 md:px-24 xl:px-64 mt-12 md:mt-12">
          <div className="flex flex-col sm:flex-row justify-between pb-12 md:pb-24">
            <div className="w-full sm:w-1/2">
              <div className="text-3xl md:text-5xl font-semibold">
                <SlideText text="YouID" />
              </div>
              <p>[2021]</p>
            </div>
            <div className="text-left py-2 w-full sm:w-1/2">
              <Paragraph ref={projectsRef}>
                I developed a comprehensive administrative dashboard for
                YouID&apos;s identity verification platform using Nuxt.js. The
                solution focused on providing a secure, high-efficiency tool for
                managing user identity documents and speeding up administrative
                workflows. By focusing on intuitive design and efficient data
                presentation, I created a tool that enhanced operational
                efficiency across the organization.
                {/* Delivered a critical administrator dashboard feature designed to
                streamline and accelerate the identity verification process. The
                solution focused on providing a secure, high-efficiency tool for
                managing user identity documents and speeding up administrative
                workflows. */}
              </Paragraph>
              <br />
              <a
                href="https://youverify.co/product/youid"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                YOUID
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between pb-12 md:pb-24">
            <div className="w-full sm:w-1/2">
              <h1 className="text-3xl md:text-5xl">
                <SlideText text="Gradely" />
              </h1>
              <p>[2021]</p>
            </div>
            <div className="text-left py-2 w-full sm:w-1/2">
              <Paragraph ref={projectsRef}>
                {/* I built a report card module for Gradely&apos;s educational platform
                using Vue.js, creating an engaging way for students and parents
                to track academic progress. The module was designed with user
                engagement in mind, contributing to the platform&apos;s growth
                initiatives by making educational data accessible and
                actionable. Clean design and intuitive navigation made it easy
                for users to understand performance metrics at a glance. */}
                Developed and implemented the comprehensive report card module
                for the educational platform. This project involved complex data
                visualization and ensuring accurate presentation of student
                performance metrics to meet stakeholder and academic
                requirements.
              </Paragraph>
              <br />
              <a
                href="https://www.gradely.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Gradely
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
