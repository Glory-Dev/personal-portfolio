import { skills } from "@/data";
import { SkillsBenoGrid, SkillsBentoGridItem } from "./ui/SkillsBentoGrid";

const Grid = () => {
  return (
    <section id="skills">
      <SkillsBenoGrid className="w-full pb-20">
        {skills.map((item, i) => (
          <SkillsBentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            img={item.img}
          />
        ))}
      </SkillsBenoGrid>
    </section>
  );
};

export default Grid;
