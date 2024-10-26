import { FaLocationArrow, FaRegFilePdf } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";

const Hero = () => {
  return (
    <div className="pt-36">
       {/* UI: Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] pt-[4rem] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xl text-center text-blue-100 max-w-80">
            Hi there, I&apos;m
          </p>

          {/**
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Amjad Mounir"
            className="text-center text-4xl md:text-5xl lg:text-6xl"
          />

          <p className="text-center font-bold uppercase md:tracking-wider text-lg lg:text-4xl mb-6 md:mb-0">
            Web Developer & Freelancer.
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            {socialMedia.map((info) => (
              <a
                key={info.id} target="_blank" rel="noopener" title={info.title}
                href={info.link}
                className="w-12 h-12 md:mt-10 cursor-pointer overflow-hidden p-[1px] flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 focus:outline-none"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ))}
            <a href="https://drive.google.com/file/d/1Z7-ng5YKwNtWMEtEgr8pS2JincCwg79V/view?usp=sharing" target="_blank" rel="noopener" title="Resume">
              <MagicButton
                title="Resume"
                icon={<FaRegFilePdf />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
