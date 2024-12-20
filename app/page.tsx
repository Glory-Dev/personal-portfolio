"use client";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import ExperienceTimeline from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Skills />
        <Projects />
        <Clients />
        <ExperienceTimeline />
        <Approach />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
