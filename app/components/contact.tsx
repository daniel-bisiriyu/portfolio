"use client";

import { useForm, ValidationError } from "@formspree/react";
import SlideText from "./slide-text";
import Loader from "./loader";
import { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({ weight: ["400"] });

export default function Contact({ onSuccess }: { onSuccess: () => void }) {
  const [state, handleSubmit] = useForm("mwprngpl");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [clientErrors, setClientErrors] = useState<any>({});
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
      onSuccess();
    }
  }, [state.succeeded, onSuccess]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errors: any = {};

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Enter a valid email.";
    }

    if (!message) {
      errors.message = "Message cannot be empty.";
    }

    if (Object.keys(errors).length > 0) {
      setClientErrors(errors);
      return;
    }

    setClientErrors({});
    handleSubmit(e);
  };

  return (
    <div id="contact" className="text-center pb-24">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        <SlideText text="Want to get in Touch?" />
      </h1>

      <div className="flex flex-col justify-center items-center">
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className={`${montSerrat.className} w-full px-6 xl:px-0 md:w-[50%] xl:w-[30%]`}
        >
          <div className="py-12">
            <input
              id="email"
              type="email"
              name="email"
              className="w-full py-3 border-b outline-none border-[#aaa] text-[#aaa]"
              placeholder="Email Address *"
            />

            {clientErrors.email && (
              <p className="text-left text-red-500 text-sm mt-1">
                {clientErrors.email}
              </p>
            )}

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="pb-12">
            <input
              id="message"
              name="message"
              className="w-full py-3 border-b outline-none border-[#aaa] text-[#aaa]"
              placeholder="Message *"
            />

            {clientErrors.message && (
              <p className="text-left text-red-500 text-sm mt-1">
                {clientErrors.message}
              </p>
            )}

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
              className="text-[#aaa] border rounded-md w-full cursor-pointer py-3"
            >
              {state.submitting ? <Loader /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
