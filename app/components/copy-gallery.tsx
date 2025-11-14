import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const IMAGES = [
  "/gallery/img1.png",
  "/gallery/img2.png",
  "/gallery/img3.png",
  "/gallery/img4.png",
  "/gallery/img5.png",
  "/gallery/img6.png",
  "/gallery/img7.png",
  "/gallery/img8.png",
  "/gallery/img9.png",
  "/gallery/img10.png",
  "/gallery/img11.png",
  "/gallery/img12.png",
  "/gallery/img13.png",
  "/gallery/img14.png",
  "/gallery/img15.png",
  "/gallery/img16.png",
  "/gallery/img17.png",
  "/gallery/img18.png",
  "/gallery/img19.png",
  "/gallery/img20.png",
];

export default function CopyGallery() {
  useGSAP(() => {
    const gridWrap = document.querySelector(".gallery-grid") as HTMLDivElement;

    const gridItems = gridWrap.querySelectorAll(".gallery-grid-item");
    const gridItemsInner = [...gridItems].map((item) =>
      item.querySelector(".gallery-grid-inner")
    );

    const gridTimeline2 = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: gridWrap,
        start: "top bottom+=5%",
        end: "bottom top-=5%",
        scrub: true,
        id: "gridTimelineTrigger",
      },
    });
    gridTimeline2
      .set(gridItems, {
        transformOrigin: "50% 0%",
        z: () => gsap.utils.random(-6e3, -100),
        rotationX: () => gsap.utils.random(-65, -25),
        autoAlpha: 0.5,
      })
      .to(
        gridWrap,
        {
          scale: 0.8,
        },
        0
      )
      .to(
        gridItems,
        {
          xPercent: () => gsap.utils.random(-150, 150),
          yPercent: () => gsap.utils.random(-300, 300),
          rotationX: 0,
          autoAlpha: 2,
        },
        0
      )
      .to(
        gridWrap,
        {
          z: 6500,
        },
        0
      )
      .fromTo(
        gridItemsInner,
        {
          scale: 2,
        },
        {
          scale: 1,
        },
        0
      );
  });

  return (
    <div className="relative">
      <div className="spacer-10"></div>
      <div
        style={{
          width: "100%",
          maxWidth: "none",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.25em",
          paddingRight: "1.25em",
        }}
      >
        <div className="grid perspective-[4000px] preserve-3d w-full max-w-[40vw] mx-auto relative place-items-center">
          <div className="gallery-grid relative justify-center grid gap-x-[1.25em] gap-y-[1.25em] perspective-[4000px] preserve-3d h-[50vh] w-full">
            {IMAGES.map((src, i) => (
              <div
                key={i}
                className="gallery-grid-item float-item overflow-hidden h-[5em]"
              >
                <div
                  className="overflow-hidden gallery-grid-inner"
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundPosition: "50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                    borderRadius: ".625em",
                  }}
                >
                  <div className="hg-img-w">
                    <div className="hg-img-overlay"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="spacer-10"></div>
    </div>
  );
}
