import { forwardRef } from "react";

const Resume = forwardRef(
  (
    { education, generalInfo, skills, projects, experience, extracurriculars },
    ref
  ) => {
    return (
      <div
        className="bg-white shadow-md rounded-md mb-10 flex flex-col items-center w-[8.5in] min-h-[11in] font-serif gap-0 origin-top
        [@media(max-width:1140px)]:scale-75
        [@media(max-width:500px)]:scale-50
        "
        ref={ref}
      >
        <p className="text-3xl font-bold mt-[0.5in]">
          {generalInfo.first + " " + generalInfo.last}
        </p>
        <div className="flex justify-center gap-2 w-[6.5in] ">
          <p className="w-max text-nowrap">{generalInfo.email}</p>
          <p>&#9670;</p>
          <p className="w-max text-nowrap">{generalInfo.number}</p>
          <p>&#9670;</p>
          <p className="w-max text-nowrap">{generalInfo.location}</p>
          <p>&#9670;</p>
          <a
            href={`https://www.${generalInfo.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-max text-nowrap text-blue-600 underline"
          >
            {generalInfo.website}
          </a>
        </div>
        <div className="flex flex-col w-[7.5in] gap-0 flex-grow-0">
          <div>
            <p className="font-bold mt-5">Education</p>
            <hr className="border-black border-t-2 w-full mt-1"></hr>
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between font-bold">
                  <p>{edu.school}</p>
                  <p>{edu.date}</p>
                </div>
                <div className="flex justify-between italic">
                  {edu.major !== "" ? (
                    <p>{edu.degree + " in " + edu.major}</p>
                  ) : (
                    <p>{edu.degree}</p>
                  )}
                  <p>{edu.location}</p>
                </div>
                <div className="font-bold mb-5">
                  {edu.gpa !== "" && <p>{`▪ GPA: ` + edu.gpa}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[7.5in] gap-0 flex-grow-0">
          <div>
            <p className="font-bold">Skills</p>
            <hr className="border-black border-t-2 w-full mt-1"></hr>
            {skills.map((skillset) => (
              <div key={skillset.id}>
                <div className="flex gap-1">
                  {skillset.section !== "" && (
                    <>
                      <p className="font-bold ">{`▪ ${skillset.section}:`}</p>
                      <p>{skillset.skill.toString().split(",").join(", ")}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[7.5in] gap-0 flex-grow-0">
          <div>
            <p className="font-bold mt-5">Projects</p>
            <hr className="border-black border-t-2 w-full mt-1"></hr>
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between font-bold">
                  <p>{project.name}</p>
                  <p>
                    {project.completed !== "" &&
                      `Completed: ${project.completed}`}
                  </p>
                </div>
                <div className="flex justify-between italic">
                  <p>{project.stack.split(",").join(", ")}</p>
                  <a
                    href={`https://www.${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max text-nowrap text-blue-600 underline"
                  >
                    {project.link}
                  </a>
                </div>
                <div className="flex flex-col mb-5">
                  {project.bullet.map((bullet) => (
                    <div key={project.id + bullet}>
                      <p>{`▪  ${bullet}`}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[7.5in] gap-0 flex-grow-0">
          <div>
            <p className="font-bold">Experience</p>
            <hr className="border-black border-t-2 w-full mt-1"></hr>
            {experience.map((job) => (
              <div key={job.id}>
                <div className="flex justify-between font-bold">
                  <p>{job.company}</p>
                  <p>{job.duration !== "" && `${job.duration}`}</p>
                </div>
                <div className="flex justify-between italic">
                  <p>{job.position}</p>
                  <p>{job.location}</p>
                </div>
                <div className="flex flex-col mb-5">
                  {job.responsibilities.map((bullet) => (
                    <div key={job.id + bullet}>
                      <p>{`▪  ${bullet}`}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[7.5in] gap-0 flex-grow-0">
          <p className="font-bold">Extracurriculars</p>
          <hr className="border-black border-t-2 w-full mt-1"></hr>
          {extracurriculars.map((role) => (
            <div key={role.id}>
              <div className="flex justify-between font-bold">
                <p>{role.organization}</p>
                <p>{role.duration !== "" && `${role.duration}`}</p>
              </div>
              <div className="flex justify-between italic">
                <p>{role.position}</p>
                <p>{role.location}</p>
              </div>
              <div className="flex flex-col mb-5">
                {role.responsibilities.map((bullet) => (
                  <div key={role.id + bullet}>
                    <p>{`▪  ${bullet}`}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

Resume.displayName = "Resume";

export default Resume;
