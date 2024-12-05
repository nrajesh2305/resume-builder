import { useState, useEffect } from "react";
import { usePDF } from "react-to-pdf";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Resume from "./Resume";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Extracurriculars from "./Extracurriculars";

export default function App() {
  const { toPDF, targetRef } = usePDF({ filename: "EasyCV.pdf" });
  const [generalInfo, setGeneralInfo] = useState({
    first: "John",
    last: "Smith",
    email: "johnsmith@example.com",
    number: "555-555-5555",
    location: "Example, USA",
    website: "github.com/johnsmith",
  });

  const [education, setEducation] = useState([
    {
      school: "University of Example",
      location: "Example, USA",
      degree: "B.S.",
      major: "Computer Science",
      date: "Aug 2022 - May 2026",
      gpa: "4.0 / 4.0",
      id: crypto.randomUUID(),
    },
  ]);

  const [skills, setSkills] = useState([
    {
      section: "Languages",
      skill: ["JavaScript", "Python", "Java"],
      id: crypto.randomUUID(),
    },

    {
      section: "Frameworks",
      skill: ["React", "Tailwind CSS", "Express"],
      id: crypto.randomUUID(),
    },
    {
      section: "Tools",
      skill: ["Git", "Webpack", "VS Code"],
      id: crypto.randomUUID(),
    },
  ]);

  const [projects, setProjects] = useState([
    {
      name: "Wordle",
      link: "github.com/johnsmith/wordle",
      stack: "HTML, CSS, JavaScript",
      bullet: [
        "Created a clone of the popular game Wordle",
        "Implemented responsive design for mobile and desktop",
      ],
      completed: "Jan 2024",
      id: crypto.randomUUID(),
    },
    {
      name: "Music Player",
      link: "github.com/johnsmith/music-player",
      stack: "React, Tailwind CSS, Spotify API",
      bullet: [
        "Developed a web-based music player with playback controls",
        "Integrated Spotify API for streaming music",
      ],
      completed: "Apr 2024",
      id: crypto.randomUUID(),
    },
  ]);

  const [experience, setExperience] = useState([
    {
      company: "Innovatech LLC",
      position: "Software Engineer Intern",
      location: "Example, USA",
      responsibilities: [
        "Assisted in developing backend services with Node.js and Express",
        "Participated in code reviews and agile sprint planning",
      ],
      duration: "Jan 2023 - May 2023",
      id: crypto.randomUUID(),
    },
    {
      company: "Example Restaurant",
      position: "Waiter",
      location: "Example City, USA",
      responsibilities: [
        "Provided excellent customer service",
        "Managed order taking and delivery",
      ],
      duration: "Aug 2022 - Aug 2022",
      id: crypto.randomUUID(),
    },
  ]);

  const [extracurriculars, setExtracurriculars] = useState([
    {
      organization: "Society of Computer Science",
      position: "President",
      location: "University of Example",
      responsibilities: [
        "Led weekly meetings and events",
        "Coordinated with industry professionals for guest lectures",
      ],
      duration: "Sept 2022 - Present",
      id: crypto.randomUUID(),
    },
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex justify-center gap-4
      ${isVisible ? "animate-fadeIn" : ""}
      [@media(max-width:1140px)]:flex-col 
      [@media(max-width:1140px)]:items-center
      `}
    >
      <div className="flex flex-col gap-4">
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <Education education={education} setEducation={setEducation} />
        <Skills skills={skills} setSkills={setSkills} />
        <Projects projects={projects} setProjects={setProjects} />
        <Experience experience={experience} setExperience={setExperience} />
        <Extracurriculars
          extracurriculars={extracurriculars}
          setExtracurriculars={setExtracurriculars}
        />
        <button
          onClick={() => toPDF()}
          className="px-4 py-3 text-xl bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Download PDF
        </button>
      </div>
      <Resume
        ref={targetRef}
        generalInfo={generalInfo}
        education={education}
        skills={skills}
        projects={projects}
        experience={experience}
        extracurriculars={extracurriculars}
      />
    </div>
  );
}
