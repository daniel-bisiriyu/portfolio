import Image from "next/image";
import { IMAGES } from "./gallery2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ThreeDGallery() {
  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLDivElement>(".float-item");

    items.forEach((item) => {
      // Random scattered positions (X, Y)
      const startX = gsap.utils.random(-15, 15); // %
      const startY = gsap.utils.random(-30, 30); // %
      const rotX = gsap.utils.random(-40, -15); // tilt backward
      const deepZ = gsap.utils.random(-2000, -800); // far away
      const yShift = gsap.utils.random(-400, -800); // upward movement range

      gsap.fromTo(
        item,
        {
          xPercent: startX,
          yPercent: startY,
          rotationX: rotX,
          z: deepZ,
          y: 0,
          scale: 1,
        },
        {
          y: yShift,
          z: 2000, // fly past camera
          rotationX: 0,
          scale: 1.3,

          ease: "none",
          scrollTrigger: {
            trigger: ".three-d-gallery",
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });

    gsap.to(".gallery-grid", {
      z: 6000,
      scrollTrigger: {
        trigger: ".three-d-gallery",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => console.log("entered-gallery"),
      },
    });
    // });
  });
  return (
    <div className="relative three-d-gallery my-[10rem]">
      <div className="grid perspective-[4000px] max-w-[40vw] mx-auto relative]">
        <div className="gallery-grid grid gap-x-[1.25em] gap-y-[1.25em] perspective-[4000px] preserve-3d">
          {IMAGES.map((src, i) => (
            <div key={i} className="gallery-grid-item float-item">
              <Image
                src={src}
                alt="Image"
                width={150}
                height={150}
                className="rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
