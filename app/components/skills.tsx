"use client";

import { useRef } from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";

export default function Skills() {
  const skillsSectionRef = useRef(null);

  return (
    <div className="px-6 sm:px-24 pt-12 pb-34">
      <Heading text="Skills" ref={skillsSectionRef} />
      <div className="w-full sm:w-3/4 mx-auto">
        <div className="pt-12">
          <small>01</small>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-1/3">
            <h1 className="text-2xl font-semibold">
              &lt; Languages & Framework / &gt;
            </h1>
          </div>
          <div className="w-full sm:w-2/3 sm:px-24">
            <div className="flex justify-between">
              {/* <p className="text-lg pt-6 sm:pt-0 sm:text-2xl">
                Javascript, TypeScript, Node.Js, React, Next.js, Vue, Nuxt,
                Angular, GSAP
              </p> */}
              <Paragraph
                ref={skillsSectionRef}
                text={`Javascript, TypeScript, Node.Js, React, Next.js, Vue, Nuxt,
                Angular, GSAP`}
              />
            </div>
          </div>
        </div>
        <div className="pt-12">
          <small>02</small>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-1/3">
            <h1 className="text-2xl font-semibold">&lt; Testing / &gt;</h1>
          </div>
          <div className="w-full sm:w-2/3 sm:px-24">
            <div className="flex justify-between">
              <Paragraph
                ref={skillsSectionRef}
                text={`Jest, Cypress, Cucumber.js, Gherkin`}
              />
            </div>
          </div>
        </div>
        <div className="pt-12">
          <small>03</small>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-1/3">
            <h1 className="text-2xl font-semibold">
              &lt; Tooling & Devops / &gt;
            </h1>
          </div>
          <div className="w-full sm:w-2/3 sm:px-24">
            <div className="flex justify-between">
              <Paragraph
                ref={skillsSectionRef}
                text={` Docker, Kubernetes, Storybook`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
