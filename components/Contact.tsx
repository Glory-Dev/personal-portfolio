"use client";
import React from "react";
// Image Slider
import { gallery } from "@/data";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";
// Contact Form
import { Label } from "./ui/label";
import { Input, Textarea } from "./ui/input";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <>
      {/* Form */}
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 mb-20 shadow-input bg-white dark:bg-black" id="contact">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Contact Me!
        </h2>

        <form className="my-8" action="https://formspree.io/f/mwpkvrqq" method="POST">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" name="First Name" placeholder="John" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" name="Last Name" placeholder="Doe" type="text" />
          </LabelInputContainer>
        </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="Email" placeholder="your_email@gmail.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="Message" placeholder="Type your message..." className="min-h-96" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>

      {/* Gallery */}
      <div>
        <h2 className="font-bold text-xl md:text-5xl pb-8 text-neutral-800 dark:text-neutral-200">
          Gallery
        </h2>
        <ImagesSlider className="h-[40rem] w-full rounded-sm" images={gallery}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
          </motion.div>
        </ImagesSlider>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Contact;
