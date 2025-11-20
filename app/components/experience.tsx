"use client";

import { useRef } from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";
import SlideText from "./slide-text";
import ExperienceGallery from "./experience-gallery";

export default function Experience() {
  const experienceRef = useRef(null);

  return (
    <div id="experience" ref={experienceRef}>
      <div className="experience text-left pt-8">
        <Heading ref={experienceRef} text="Experience" />
        <ExperienceGallery />
        <div className="px-6 md:px-24 xl:px-64 mt-12 md:mt-12 xl:mt-64">
          <div className="flex flex-col md:flex-row justify-between pb-12 md:pb-24">
            <div className="w-full md:w-1/2">
              <div className="text-3xl md:text-5xl font-semibold">
                <SlideText text="Moniepoint" />
              </div>
              <p>[2021 - 2025]</p>
            </div>
            <div className="text-left py-2 w-full md:w-1/2">
              <Paragraph ref={experienceRef}>
                I joined Moniepoint in 2021 and spent 3+ years contributing to
                the web infrastructure that powered their growth into a fintech
                unicorn. As a core member of the engineering team during a
                period of rapid growth, I was instrumental in developing and
                maintaining critical web applications for partner banks.
              </Paragraph>
              <br />
              <Paragraph ref={experienceRef}>
                {/* My key focus included engineering the secure 3D payment
                authentication pages and building systems designed to manage
                over 500k daily transactions efficiently. I successfully
                introduced Semantic Versioning and strict code standards to
                enhance team collaboration and ensure long-term system stability
                and maintainability.  */}
                My work included building web apps designed to manage over 500k
                daily transactions effectively, building secure payment widgets,
                engineering Node.js microservices, and implementing 3D Secure
                payment flows for their SaaS product. I also worked on
                comprehensive testing suites with Cypress.
              </Paragraph>
              {/* <br />
              <Paragraph ref={experienceRef}>
                Moniepoint wasn&apos;t a unicorn when I started but it was one before
                I left. Coincidence? I think not.
              </Paragraph> */}
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
                At Scelloo, I contributed to building a logistics operations
                management platform that was designed to streamline complex
                supply chain workflows.
                {/* Tasked with building a core logistics platform, I
                drove the end-to-end development of all user-facing features.
                This required close coordination with the backend team and
                strategic stakeholders to accurately translate complex business
                requirements into clear, executable technical specifications. My
                efforts significantly streamlined feature implementation and
                rapid deployment. */}
              </Paragraph>
              <br />
              <Paragraph ref={experienceRef}>
                Working alongside design, product, and backend teams, I
                translated business requirements into technical specifications
                and built features using Vue.js. I partnered with stakeholders
                to define product vision and coordinated closely with QA to
                ensure reliable, high-quality releases.
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
                I designed and built products for clients and internal tools
                like SmartWorks, a client acquisition tool that leveraged
                Upwork&apos;s API to generate qualified leads for the business
                development team. The platform featured an intuitive interface
                that made lead management efficient and actionable.
              </Paragraph>
              <br />
              <Paragraph ref={experienceRef}>
                My responsibilities included conducting regular client demos and
                feedback sessions, using insights to drive rapid iterations and
                ensure the product evolved with user needs. This client-centered
                approach resulted in features that directly supported business
                growth.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
