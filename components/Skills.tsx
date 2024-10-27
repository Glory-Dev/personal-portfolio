import { skills } from "@/data";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Grid = () => {
  return (
    <section id="skills" className="pb-12">
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 md:grid-row-7 gap-4 lg:gap-6 mx-auto">
        <AnimatedTooltip items={skills} />
      </div>
    </section>
  );
};

export default Grid;
