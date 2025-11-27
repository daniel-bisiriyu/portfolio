"use client";

import { useRef } from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";

export default function Skills() {
  const skillsSectionRef = useRef(null);

  return (
    <div id="skills" className="px-6 md:px-32 xl:px-52 pt-12 pb-34">
      <Heading text="Skills" ref={skillsSectionRef} />
      <div className="w-full xl:w-3/4 md:mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mt-24">
          <div className="w-full sm:w-1/3">
            <h1 className="text-2xl font-semibold">
              &lt; Languages & Framework / &gt;
            </h1>
          </div>
          <div className="w-full sm:w-2/3 sm:px-6 md:px-12 xl:px-12">
            <Paragraph ref={skillsSectionRef}>
              Javascript, TypeScript, Node.Js, React, Next.js, Vue, Nuxt,
              Angular, GSAP
            </Paragraph>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-24">
          <div className="w-full sm:w-1/3">
            <h1 className="text-2xl font-semibold">&lt; Testing / &gt;</h1>
          </div>
          <div className="w-full sm:w-2/3 sm:px-6 md:px-12 xl:px-12">
            <Paragraph ref={skillsSectionRef}>
              Jest, Cypress, Cucumber.js, Gherkin
            </Paragraph>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-24">
          <div className="w-full sm:w-1/3">
            <h1 className="text-2xl font-semibold">
              &lt; Tooling & Devops / &gt;
            </h1>
          </div>
          <div className="w-full sm:w-2/3 sm:px-6 md:px-12 xl:px-12">
            <Paragraph ref={skillsSectionRef}>
              Docker, Kubernetes, AWS, Scripting, Storybook
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}
