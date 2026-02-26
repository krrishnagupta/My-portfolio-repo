import portfolioImg from "../assets/png/portfolioImg.png";
import chatbot from '../assets/png/chatbotImg.jpeg';
import myntra from '../assets/png/myntraImg.png';
import accidentDetection from '../assets/png/AccidentDetection.jpg';
import passwordgenrator from '../assets/png/motrex.jpg';
import futureguide from '../assets/png/futureguide.jpg';
import { useState } from "react";

const CardGrid = ({ data }) => (
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
    {data.map((p) => (
      <article
        key={p.id}
        className="group border shadow-[#7a5235dc] border-[#e99b63] relative h-[280px] overflow-hidden rounded-xl shadow-lg bg-gray-900"
      >
        {/* Image fills the whole card */}
        <img
          src={p.image}
          alt={p.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Project title bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <h3 className="text-white text-lg font-semibold">{p.name}</h3>
        </div>

        {/* Hover overlay: slides up, covers half height */}
        <div className="absolute left-0 right-0 bottom-0 h-1/2 translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300 ease-out bg-black/80 p-4 flex flex-col justify-between">
          <p className="text-xs text-justify text-gray-200">{p.desc}</p>
          <a
            href={p.link}
            className="mt-3 inline-block rounded-md border border-white bg-white/5 px-3 py-2 text-sm hover:bg-black hover:border-[#e99b63] hover:text-[#e99b63]  focus:ring-2 focus:ring-offset-1 focus:ring-[#e99b63]"
          >
            View Project
          </a>
        </div>
      </article>
    ))}
  </div>
);

const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 640; 
};

const Project = () => {

  const mobile = isMobileDevice();

  // Default: mobile -> personal, desktop -> all
  const [filter, setFilter] = useState(mobile ? "personal" : "all");

  const personalProjects = [
    {
      id: 1,
      name: "Personal Portfolio",
      image: portfolioImg,
      desc: "A fully responsive portfolio website built with React to showcase projects, skills, and experience.    Includes custom UI components, smooth animations, and optimized loading for better user experience.",
      link: "https://github.com/krrishnagupta/front-end-portfolio",
    },
    {
      id: 2,
      name: "Myntra Clone",
      image: myntra,
      desc: "A fully responsive and functional e-commerce UI with product listings, filters, cart system, and smooth mobile-first design.",
      link: "https://github.com/krrishnagupta/Myntra-Clone",
    },
    {
      id: 3,
      name: "Psychiatrist Bot",
      image: chatbot,
      desc: "An AI-powered mental-health chatbot that simulates basic psychiatric conversations. It uses machine-learning models and a clean interface to provide supportive, interactive guidance.",
      link: "https://github.com/krrishnagupta/major-project",
    },
  ];

  const academicProjects = [
    {
      id: 4,
      name: "Accident Detection",
      image: accidentDetection,
      desc: "A web app where users upload accident videos, and the system detects incidents and sends an alert with the uploader’s location to emergency services.",
      link: "https://github.com/krrishnagupta/minorproject",
    },
    {
      id: 5,
      name: "Future Guide",
      image: futureguide,
      desc: "A simple guidance tool that provides students with clear, structured roadmaps to help them choose and prepare for the right career path.",
      link: "https://github.com/krrishnagupta/Mini-project",
    },
    {
      id: 6,
      name: "Password generator",
      image: passwordgenrator,
      desc: "A secure, cross-platform mobile utility built with React Native that generates customizable, high-entropy passwords with a clean, intuitive UI.",
      link: "https://github.com/krrishnagupta/Password-generator-App",
    },
  ];

  const allProjects = [...personalProjects, ...academicProjects];

  return (
    <div className="mb-16">
      <div className="text-center mt-10 mb-4">
        <h2 className="text-3xl tracking-widest font-semibold text-[#e99b63]">My-Projects</h2>
        <div className="w-20 h-[2px] bg-[#80461d] mx-auto mt-2 rounded-full"></div>
      </div>
      <section id="projects" name="projects" className="max-w-6xl mx-auto px-4 py-8 z-20">
        {/* Header + Filter */}
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-center text-2xl font-light sm:text-left">Projects</h2>

          {/* Dropdown: centered on mobile, right-aligned on larger screens */}
          <div className="flex w-full justify-center sm:w-auto sm:justify-end">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-[100%] max-w-[200px] word-wrap rounded-md border border-gray-700 bg-gray-300 text-black px-3 py-2 text-md focus:outline-none focus:ring-2 focus:ring-[#e99b63]"
            >
              {/* Desktop: show All option; Mobile: hide All */}
              {!mobile && <option value="all">All</option>}
              <option value="personal">Personal Projects</option>
              <option value="academic">Academic Projects</option>
            </select>
          </div>
        </div>

        {/* Desktop: All projects grid (6 cards, 3 + 3) */}
        {!mobile && filter === "all" && <CardGrid data={allProjects} />}

        {/* Personal projects (default on mobile) */}
        {filter === "personal" && <CardGrid data={personalProjects} />}

        {/* Academic projects */}
        {filter === "academic" && <CardGrid data={academicProjects} />}
      </section>
    </div>
  )
};

export default Project;





