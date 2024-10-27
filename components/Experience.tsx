import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import MagicButton from "./MagicButton";
import { FaAnglesRight } from "react-icons/fa6";

export default function ExperienceTimeline() {
  const data = [
    {
      title: "Present",
      comment: "Web Developer & Freelancer",
      content: (
        <div className="text-center">
          <div className=" text-neutral-700 dark:text-neutral-300 text-lg md:text-5xl font-bold pb-5 md:pb-0">
            Looking for internships!
          </div>
          <a href="#contact" target="_blank" rel="noopener" title="Hire Me" className="inline-block">
            <MagicButton
              title="HIRE ME"
              icon={<FaAnglesRight  />}
              position="right"
            />
          </a>
        </div>
      ),
    },
    {
      title: "2023-2024",
      comment: "Comeback",
      content: (
        <>
          <div>
            <div className="flex pb-10">
              <Image src="/experience/ysj.png" width={100} height={100} className="w-[50px] h-[20px] translate-y-2" alt="Hack club" />
              <div className="ml-4 flex flex-col justify-center">
                <h2 className="text-sm md:text-md font-bold">Webmaster</h2>
                <h2 className="text-sm md:text-base italic">Youth Science Journal Internship</h2>
                <div className="py-2 list-disc list-inside mt-2 leading-9 text-sm md:text-base">
                  <p className="flex gap-2 pb-4 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base text-justify">
                    YSJ is the first Egyptian scientific journal published by high school students. I had an offer in YSJ as a webmaster but with no pay. I managed a journal website and worked on real experience for the first time. I had to promote my skills to the next level to match the team. In not time, I learned Bootstrap, LaTeX, React, and SASS. I learned how to manage my tasks and assign them properly to meet the deadlines. Although the website was a journal, which should be built content-based technology to upload papers using Markdown, the website was still legacy and I uploaded issue 10 in 2 weeks. I then studided Astro framework in 4 days and restructured the website.
                  </p>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    ✅ Conducted a detailed plan to improve the website’s structure and performance
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    ✅ Coded the program page; supervised the application portal
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    ✅ Spent 70+ hours on uploading issue 10 to the website
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    ✅ Refactored the website in  to cut down the website uploading time for a single paper from average 9 hours to just 20 minutes. The team could then publish papers using Markdown and with minimal guidance.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <Image src="/experience/hack.png" width={100} height={100} className="w-[40px] h-[40px]" alt="Hack club" />
              <div className="ml-4 flex flex-col justify-center">
                <h2 className="text-sm md:text-md font-bold">Chapter President</h2>
                <h2 className="text-sm md:text-base italic">Hack Club</h2>
                <div className="py-2 list-disc list-inside mt-2 leading-9 text-sm md:text-base">
                  <p className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base text-justify">
                    I founded the 3rd season of the school’s branch of the international hack club for which the club has passed a year of postponing. I revived the club when no one was interested in joining neither as a mentor nor a member. For a year, I provided  mentorship plans in web development for 25+ students, organized 60+ weekly workshops, Q&A sessions, and competitions with quizzes. The club became the most engaged and renowned in my school. Moreover, I received some gifts from the Hack Club including a github backpack, notebooks, web domain for 4 years, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Late 2022",
      comment: "High School",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            👨‍🎓 Admitted to Gharbiya STEM High School (470th/+20,000)
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            Pasued Web Development Work and Practiced Problem Solving on <span className="text-[#f05656]">Codewars</span> with Javascript, Python, and Typescript
          </p>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ⚪ Problem-solving
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ⚪ Critical Thinking
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ⚪ Competitive Programming
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal my-4">
            💻 Head of Gharbiya STEM Learning Entertainment Program @CS Department
            <ul className="pl-3 list-disc list-inside mt-2 leading-7">
              <li>Lead a team of 6 mentors in a school summer program for primary and prep students</li>
              <li>Organized 2 sessions/week; teaching them the fundamentals of CS including web development, video editing, scratch, and Microsoft PowerPoint.</li>
            </ul>
          </p>
          <Image
            src="stem.svg"
            alt="Gharbiya STEM High School"
            width={300}
            height={300}
            className="mx-auto mt-10 object-cover"
          />
        </div>
      ),
    },
    {
      title: "2020",
      comment: "COVID Quarantine ",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
            Started my journey in Web Development With Elzero Web School
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Fundamentals of Front-End Development (HTML, CSS, JS)
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Practice with Templates & Tutorials
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Markdown, Git & Github
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ 20+ Front-End Mentor Challenges
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Made a Notion dashboard recruted with resources and cheatsheets
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["tutorial-1.png", "tutorial-2.jpg", "tutorial-3.jpg", "tutorial-4.jpg", "tutorial-5.jpg", "tutorial-6.png"].map((tutorial) => (
              <Image
                key={tutorial}
                src={`/projects/${tutorial}`}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id="experience">
      <Timeline data={data} />
    </div>
  );
}
