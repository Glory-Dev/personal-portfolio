import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const SkillsBenoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 md:grid-row-7 gap-4 lg:gap-6 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const SkillsBentoGridItem = ({
  className,
  id,
  title,
  img,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  img?: string;
}) => {

  return (
    <div
      className={cn("row-span-1 relative p-4 rounded-xl border-2 border-white/[0.1] group/bento flex justify-center align-center flex-col", className)}
    >
      <img src={img} alt={title} title={title} className={cn("object-cover object-center")} />
    </div>
  );
};
