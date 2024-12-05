import { useState, useRef } from "react";

export default function Education({ education, setEducation }) {
  const [isFullHeight, setIsFullHeight] = useState(false);
  const containerRef = useRef(null);

  const handleChange = (school, field) => (e) => {
    setEducation((prev) => {
      return prev.map((edu) =>
        edu.id === school.id ? { ...edu, [field]: e.target.value } : edu
      );
    });
  };

  const handleAddEducation = () => {
    setEducation((prev) => [
      ...prev,
      {
        school: "",
        location: "",
        degree: "",
        major: "",
        date: "",
        gpa: "",
        id: crypto.randomUUID(),
      },
    ]);
  };

  const handleRemoveEducation = () => {
    if (education.length === 1) return;
    setEducation((prev) => prev.slice(0, -1));
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
      <h1 className="text-3xl font-semibold mb-6">Education</h1>

      {education.map((edu, index) => (
        <div key={edu.id}>
          {index !== 0 && (
            <div className="mt-4 mb-4 flex justify-center">
              <hr className="border-gray-300 w-full" />
            </div>
          )}
          {Object.keys(edu).map(
            (field) =>
              field !== "id" && (
                <div
                  className="flex flex-col items-start mb-4"
                  key={edu.id + field}
                >
                  <label className="font-medium text-base mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                  </label>
                  <input
                    value={edu[field]}
                    onChange={handleChange(edu, field)}
                    className="bg-gray-100 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-700"
                  />
                </div>
              )
          )}
        </div>
      ))}

      <div className="flex flex-col justify-center gap-3">
        <button
          onClick={handleRemoveEducation}
          className="p-2 border border-indigo-700 rounded-md hover:bg-indigo-700 hover:text-white text-indigo-700"
        >
          Remove School
        </button>
        <button
          onClick={handleAddEducation}
          className="p-2 border border-indigo-700 rounded-md hover:bg-indigo-700 hover:text-white text-indigo-700"
        >
          Add School
        </button>
      </div>
    </div>
  );
}
