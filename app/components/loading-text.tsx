import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LoaderText() {
  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set(".loader-text.left", { yPercent: -100, opacity: 0 });
    gsap.set(".loader-text.right", { yPercent: 100, opacity: 0 });

    tl.to(".loader-text.left", {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
    }).to(
      ".loader-text.right",
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
      },
      "<"
    );
  });
  return (
    <div className="overflow-hidden">
      <svg viewBox="0 0 600 200" className="w-[30rem] font-medium">
        <text
          x="30%"
          y="50%"
          dy=".32em"
          textAnchor="middle"
          className="stroke-white stroke-2 text-7xl tracking-widest loader-text left"
        >
          Daniel
        </text>
        <text
          x="70%"
          y="50%"
          dy=".32em"
          textAnchor="middle"
          className="stroke-white stroke-2 text-7xl tracking-widest loader-text right"
        >
          Bisiriyu
        </text>
      </svg>
    </div>
  );
}
