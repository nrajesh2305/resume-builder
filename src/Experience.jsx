import { useState, useRef } from "react";

export default function Experience({ experience, setExperience }) {
  const [isFullHeight, setIsFullHeight] = useState(false);
  const containerRef = useRef(null);

  const handleChange = (exp, field) => (e) => {
    setExperience((prev) => {
      return prev.map((item) =>
        item.id === exp.id ? { ...item, [field]: e.target.value } : item
      );
    });
  };

  const handleAddExperience = () => {
    setExperience((prev) => [
      ...prev,
      {
        company: "",
        position: "",
        location: "",
        responsibilities: [""],
        duration: "",
        id: crypto.randomUUID(),
      },
    ]);
  };

  const handleRemoveExperience = () => {
    if (experience.length === 1) return;
    setExperience((prev) => prev.slice(0, -1));
  };

  const handleAddResponsibility = (exp) => {
    setExperience((prev) =>
      prev.map((item) =>
        item === exp
          ? { ...item, responsibilities: [...item.responsibilities, ""] }
          : item
      )
    );
  };

  const handleRemoveResponsibility = (exp) => {
    if (exp.responsibilities.length === 1) return;
    setExperience((prev) =>
      prev.map((item) =>
        item === exp
          ? {
              ...item,
              responsibilities: item.responsibilities.slice(0, -1),
            }
          : item
      )
    );
  };

  const handleChangeResponsibility = (exp, index) => (e) => {
    setExperience((prev) =>
      prev.map((item) =>
        item === exp
          ? {
              ...item,
              responsibilities: item.responsibilities.map((res, i) =>
                i === index ? e.target.value : res
              ),
            }
          : item
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-3xl font-semibold mb-6">Experience</h1>
      {experience.map((exp, index) => (
        <div key={exp.id}>
          {index !== 0 && (
            <div className="mt-4 mb-4 flex justify-center">
              <hr className="border-gray-300 w-full" />
            </div>
          )}
          {Object.keys(exp).map(
            (field) =>
              field !== "id" && (
                <div
                  className="flex flex-col items-start mb-4"
                  key={exp.id + field}
                >
                  <label className="font-medium text-base mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                  </label>
                  <div className="flex w-full">
                    {field !== "responsibilities" && (
                      <input
                        onChange={handleChange(exp, field)}
                        value={exp[field]}
                        className="bg-gray-100 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-700"
                      />
                    )}
                    {field === "responsibilities" && (
                      <div className="flex flex-col gap-2 w-full">
                        {exp[field].map((res, idx) => (
                          <input
                            key={exp.id + field + idx}
                            onChange={handleChangeResponsibility(exp, idx)}
                            value={res}
                            className="bg-gray-100 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-700"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  {field === "responsibilities" && (
                    <div className="flex w-full gap-2 justify-center mt-3">
                      <button
                        onClick={() => handleRemoveResponsibility(exp)}
                        className="p-2 w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-200 text-gray-800"
                      >
                        -
                      </button>
                      <button
                        onClick={() => handleAddResponsibility(exp)}
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
          onClick={handleRemoveExperience}
          className="p-2 border border-indigo-700 rounded-md hover:bg-indigo-700 hover:text-white text-indigo-700"
        >
          Remove Experience
        </button>
        <button
          onClick={handleAddExperience}
          className="p-2 border border-indigo-700 rounded-md hover:bg-indigo-700 hover:text-white text-indigo-700"
        >
          Add Experience
        </button>
      </div>
    </div>
  );
}
