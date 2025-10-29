"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mwprngpl");

  return (
    <div className="text-center pb-24">
      <div>
        <h1 className="text-5xl font-extrabold">Want to get in Touch?</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="w-[30%]">
          <div className="py-12">
            {/* <label htmlFor="email" className="block pb-6 text-left text-[#aaa]">
              Email Address: *
            </label> */}
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
            {/* <label htmlFor="email" className="block pb-6 text-left text-[#aaa]">
              Message: *
            </label> */}
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
          <button
            type="submit"
            disabled={state.submitting}
            className="text-[#aaa] border rounded-md py-3 w-[12rem] w-full cursor-pointer mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
