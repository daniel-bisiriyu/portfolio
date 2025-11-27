// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

import PreLoader from "./loader/pre-loader";

export default function LoaderText() {
  // useGSAP(() => {
  //   const tl = gsap.timeline();

  //   gsap.set(".loader-text.left", { yPercent: -100, opacity: 0 });
  //   gsap.set(".loader-text.right", { yPercent: 100, opacity: 0 });

  //   tl.to(".loader-text.left", {
  //     yPercent: 0,
  //     opacity: 1,
  //     duration: 0.5,
  //   }).to(
  //     ".loader-text.right",
  //     {
  //       yPercent: 0,
  //       opacity: 1,
  //       duration: 0.5,
  //     },
  //     "<"
  //   );
  // });
  return (
    <div className="overflow-hidden flex items-cente">
      <svg viewBox="0 0 300 100" className="w-[15rem] font-medium">
        <text
          x="50%"
          y="50%"
          dy=".28em"
          textAnchor="middle"
          className="stroke-white stroke-2 text-7xl tracking-widest loader-text left"
        >
          Daniel
        </text>
      </svg>
      <div className="mx-[1em]">
        <PreLoader />
      </div>
      <svg viewBox="0 0 300 100" className="w-[15rem] font-medium">
        <text
          x="50%"
          y="50%"
          dy=".28em"
          textAnchor="middle"
          className="stroke-white stroke-2 text-7xl tracking-widest loader-text right"
        >
          Bisiriyu
        </text>
      </svg>
    </div>
  );
}
