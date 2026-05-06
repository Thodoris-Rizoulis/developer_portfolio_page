"use client";

import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { PageInfo } from "@/typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {
  pageInfo: PageInfo;
};

function Contact({ pageInfo }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${pageInfo.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hi, my name is ${formData.name}.\n\n${formData.message}\n\n(${formData.email})`
    )}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="relative min-h-screen md:h-screen flex flex-col md:flex-row text-center md:text-left max-w-7xl px-10 py-12 md:py-0 justify-start md:justify-evenly mx-auto items-center gap-8 md:gap-0">
      <h3 className="tracking-[20px] text-gray-500 text-2xl mb-6 md:mb-0 md:absolute md:top-24">
        CONTACT
      </h3>
      <div className="flex flex-col space-y-8 md:space-y-10 w-full max-w-2xl">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>
        <div className="space-y-6 md:space-y-10 my-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <a href={`tel:${pageInfo.phoneNumber}`} className="text-lg sm:text-2xl hover:text-[#F7AB0A] transition-colors break-all">
              {pageInfo.phoneNumber}
            </a>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <a href={`mailto:${pageInfo.email}`} className="text-lg sm:text-2xl hover:text-[#F7AB0A] transition-colors break-all">
              {pageInfo.email}
            </a>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg sm:text-2xl break-words">{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex flex-col flex-1">
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              {errors.name && (
                <p className="text-[#F7AB0A] text-xs mt-1 pl-1">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col flex-1">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                })}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
              {errors.email && (
                <p className="text-[#F7AB0A] text-xs mt-1 pl-1">{errors.email.message}</p>
              )}
            </div>
          </div>
          <input
            {...register("subject", { required: "Subject is required" })}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          {errors.subject && (
            <p className="text-[#F7AB0A] text-xs pl-1">{errors.subject.message}</p>
          )}
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Message"
            className="contactInput"
          />
          {errors.message && (
            <p className="text-[#F7AB0A] text-xs pl-1">{errors.message.message}</p>
          )}
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg disabled:opacity-60 transition-opacity"
          >
            {submitted ? "Opening mail client..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
