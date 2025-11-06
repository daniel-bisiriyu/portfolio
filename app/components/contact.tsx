"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mwprngpl");

  // const handleMouseMove = (
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ): void => {
  //   const strength = 90;
  //   const magneticDiv = e.target as HTMLDivElement;
  //   const bound = magneticDiv.getBoundingClientRect();

  //   gsap.to(magneticDiv, {
  //     x: ((e.clientX - bound.left) / magneticDiv.offsetWidth - 0.5) * strength,
  //     y: ((e.clientY - bound.top) / magneticDiv.offsetHeight - 0.5) * strength,
  //     duration: 2,
  //     ease: "elastic.easeOut",
  //   });
  // };

  // const handleMouseLeave = (
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   const magneticDiv = e.target as HTMLDivElement;
  //   gsap.to(magneticDiv, {
  //     x: 0,
  //     y: 0,
  //     ease: "elastic.easeOut",
  //     duration: 0.5,
  //   });
  // };

  return (
    <div className="text-center pb-24">
      <div>
        <h1 className="text-5xl font-extrabold">Want to get in Touch?</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full px-6 xl:px-0 md:w-[50%] xl:w-[30%]"
        >
          <div className="py-12">
            <input
              id="email"
              type="email"
              name="email"
              className="w-full py-3 border-b outline-none border-[#aaa] text-[#aaa]"
              placeholder="Email Address *"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="pt-6 pb-12">
            <input
              id="message"
              name="message"
              className="w-full py-3 border-b outline-none border-[#aaa] text-[#aaa]"
              placeholder="Message *"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="py-6">
            <button
              type="submit"
              disabled={state.submitting}
              className="text-[#aaa] border rounded-md w-[12rem] w-full cursor-pointer py-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
