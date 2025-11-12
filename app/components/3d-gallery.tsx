import Image from "next/image";
import { IMAGES } from "./gallery2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ThreeDGallery() {
  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLDivElement>(".float-item");

    items.forEach((item) => {
      // Random scattered positions (X, Y)
      const startX = gsap.utils.random(-40, 40); // %
      const startY = gsap.utils.random(-30, 30); // %
      const rotX = gsap.utils.random(-40, -15); // tilt backward
      const deepZ = gsap.utils.random(-6000, -3000); // far away

      gsap.fromTo(
        item,
        {
          xPercent: startX,
          yPercent: startY,
          rotationX: rotX,
          z: deepZ,
        },
        {
          z: 1500, // fly past camera
          rotationX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".three-d-gallery",
            scrub: true,
            start: "top bottom",
            end: "bottom top",
            onEnter: () => console.log("entered-gallery"),
          },
        }
      );
    });
    // });
  });
  return (
    <div className="relative three-d-gallery">
      <div className="grid perspective-[4000px] max-w-[50vw] mx-auto relative]">
        <div className="gallery-grid grid gap-x-[1.25em] gap-y-[1.25em] perspective-[4000px">
          {IMAGES.map((src, i) => (
            <div key={i} className="gallery-grid-item float-item">
              <Image
                src={src}
                alt="Image"
                width={200}
                height={200}
                className="rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
