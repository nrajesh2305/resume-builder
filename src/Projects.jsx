import { useState, useRef } from "react";

export default function Projects({ projects, setProjects }) {
  const [isFullHeight, setIsFullHeight] = useState(false);
  const containerRef = useRef(null);

  const handleChange = (project, field) => (e) => {
    setProjects((prev) => {
      return prev.map((proj) =>
        proj.id === project.id ? { ...proj, [field]: e.target.value } : proj
      );
    });
    console.log(project);
  };

  const handleAddProject = () => {
    setProjects((prev) => [
      ...prev,
      {
        name: "",
        link: "",
        stack: "",
        bullet: [""],
        completed: "",
        id: crypto.randomUUID(),
      },
    ]);
  };

  const handleRemoveProject = () => {
    if (projects.length === 1) return;
    setProjects((prev) => prev.slice(0, -1));
  };

  const handleAddBullet = (project) => {
    setProjects((prev) =>
      prev.map((proj) =>
        proj === project ? { ...proj, bullet: [...proj.bullet, ""] } : proj
      )
    );
  };

  const handleRemoveBullet = (project) => {
    if (project.bullet.length === 1) return;
    setProjects((prev) =>
      prev.map((proj) =>
        proj === project ? { ...proj, bullet: proj.bullet.slice(0, -1) } : proj
      )
    );
  };

  const handleChangeBullet = (project, index) => (e) => {
    setProjects((prev) =>
      prev.map((proj) =>
        proj === project
          ? {
              ...proj,
              bullet: proj.bullet.map((bullet, i) =>
                i === index ? e.target.value : bullet
              ),
            }
          : proj
      )
    );
  };

  const handleMouseEnter = () => {
    setIsFullHeight(true);
  };

  const handleMouseLeave = () => {
    setIsFullHeight(false);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  return (
     <div
        ref={containerRef}
        className={`text-gray-800 flex flex-col bg-white shadow-lg p-6 rounded-lg transition-height duration-1000 overflow-hidden
                ${
                   isFullHeight
                      ? "h-96 overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-gray-300"
                      : "h-20"
                }`}
        onClick={handleMouseEnter}
        onDoubleClick={handleMouseLeave}
     >
        <h1 className="text-3xl font-semibold mb-6">Projects</h1>
        {projects.map((project, index) => (
           <div key={project.id}>
              {index !== 0 && (
                 <div className="mt-4 mb-4 flex justify-center">
                    <hr className="border-gray-300 w-full" />
                 </div>
              )}
              {Object.keys(project).map(
                 (field) =>
                    field !== "id" && (
                       <div
                          className="flex flex-col items-start mb-4"
                          key={project.id + field}
                       >
                          <label className="font-medium text-base mb-2">
                             {field === "bullet"
                                ? "Bullet Points:"
                                : field.charAt(0).toUpperCase() +
                                  field.slice(1) +
                                  ":"}
                          </label>
                          <div className="flex w-full">
                             {field !== "bullet" && (
                                <input
                                   onChange={handleChange(project, field)}
                                   value={project[field]}
                                   className="bg-gray-100 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-700"
                                />
                             )}
                             {field === "bullet" && (
                                <div className="flex flex-col gap-2 w-full">
                                   {project[field].map((bullet, index) => (
                                      <input
                                         key={project.id + field + index}
                                         onChange={handleChangeBullet(
                                            project,
                                            index
                                         )}
                                         value={bullet}
                                         className="bg-gray-100 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-700"
                                      />
                                   ))}
                                </div>
                             )}
                          </div>
                          {field === "bullet" && (
                             <div className="flex w-full gap-2 justify-center mt-3">
                                <button
                                   onClick={() => handleRemoveBullet(project)}
                                   className="p-2 w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-200 text-gray-800"
                                >
                                   -
                                </button>
                                <button
                                   onClick={() => handleAddBullet(project)}
                                   className="p-2 w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-200 text-gray-800"
                                >
                                   +
                                </button>
                             </div>
                          )}
                       </div>
                    )
              )}
           </div>
        ))}
        <div className="flex flex-col justify-center gap-3">
           <button
              onClick={handleRemoveProject}
              className="p-2 border border-indigo-700 rounded-md hover:bg-indigo-700 hover:text-white text-indigo-700"
           >
              Remove Project
           </button>
           <button
              onClick={handleAddProject}
              className="p-2 border border-indigo-700 rounded-md hover:bg-indigo-700 hover:text-white text-indigo-700"
           >
              Add Project
           </button>
        </div>
     </div>
  );
}
