import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { Carousel } from "@/components/ui/carousel";

const Projects = () => {
  const projectCards = projects.map((item) => (
    <div
      className="lg:min-h-[45rem] h-[30rem] flex items-center justify-center sm:w-96 w-[80vw]"
      key={item.id}
    >
      <PinContainer
        title={item.linkTitle}
        href={item.linkHref}
      >

        <div className="relative flex items-center justify-center sm:w-96  overflow-hidden h-[20vh] lg:h-[45vh] mb-10">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <img src="/bg.png" alt="Project Image" />
          </div>
          <img
            src={item.img}
            alt="cover"
            className="z-10 absolute top-0"
          />
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{item.title}</h1>

        <p className="lg:text-md lg:font-normal font-light text-sm line-clamp-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          {item.des}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {item.iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={`/tools/${icon}`} alt="icon" className="p-2" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <p className="flex lg:text-xl md:text-xs text-sm text-purple">Live</p>
            <FaLocationArrow className="ms-3" color="#CBACF9" />
          </div>
        </div>
      </PinContainer>
    </div>
  ));

  return (
    <div className="pt-40 pb-20" id="projects">
      <h2 className="heading relative">
        Unique <span className="text-purple">Projects</span>
      </h2>
      <Carousel items={projectCards} />
    </div>
  );
};

export default Projects;
