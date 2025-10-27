// import { Sofia_Sans_Condensed } from "next/font/google";

// const sofia = Sofia_Sans_Condensed();

export default function Hero() {
  return (
    <div className="hero pt-24  h-screen">
      <div className="pl-12">
        <h1 className="text-2xl font-semibold">
          Hello ~ I'm Daniel Bisiriyu, a
        </h1>
        <p className="text-[13rem] font-extrabold">
          SOFTWARE ENGINEER
          {/* <span className=""> </span> */}
          <span className="block w-[30rem] ml-24 mt-[-6rem]">
            {/* <svg viewBox="0 0 200 20" preserveAspectRatio="none">
              <path
                d="M5 12 Q 50 8, 100 11 T 195 10"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg> */}
            <svg viewBox="0 0 200 20" preserveAspectRatio="none">
              {" "}
              <path
                d="M5 15 Q 100 5, 195 15"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="4"
                strokeLinecap="round"
              />{" "}
            </svg>
          </span>
        </p>
        {/* <div> */}
        <p className="py-6 text-xl">
          I am a jack of all trades, a master of one, Frontend and I have over
          five years building stuff.
        </p>
        {/* </div> */}
        {/* <div className="flex justify-between pt-32">
          <div className="w-1/2 pr-6">
            <p className="text-xl">
              A <span className="font-bold">software engineer</span> with over 5
              years building products for the web! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Animi tenetur temporibus veniam
              mollitia necessitatibus beatae, eligendi, maxime obcaecati
              doloribus repudiandae aspernatur ipsa cum! Cum fugiat vel quo,
              perferendis labore esse.
            </p>
          </div>
          <div className="w-1/2 px-24">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolore iste beatae exercitationem temporibus ipsam
              voluptate ea aspernatur ullam, eveniet odit impedit rem optio, at
              fugiat facere error. Iste, inventore.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
