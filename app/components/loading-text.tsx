import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LoaderText() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".loader-text.left", {
      yPercent: -100,
      duration: 1,
    })
      .from(
        ".loader-text.right",
        {
          yPercent: 100,
          duration: 1,
        },
        "<"
      )
      .to(".loader-text", {
        fill: "#fff",
        duration: 2,
      });
  });
  return (
    <div>
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
