import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

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
  id,
  title,
  img,
}: {
  className?: string;
  id: number;
  title?: string;
  img?: string;
}) => {

  return (
    <div className="row-span-1 relative p-4 rounded-xl border-2 border-white/[0.1] group/bento flex justify-center align-center flex-col">
      <img src={img} alt={title} title={title} className="object-cover object-center" />
    </div>
  );
};
