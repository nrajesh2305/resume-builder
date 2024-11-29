import "./style.css";

let global_container = document.createElement("div");
let edit_resume_container = document.createElement("div");
let showcase_resume_container = document.createElement("div");
let print_button = document.createElement("button");
let prof_summary_button = document.createElement("button");
let education_button = document.createElement("button");
let skills_button = document.createElement("button");
let experience_button = document.createElement("button");

global_container.className = "global-container";
edit_resume_container.className = "edit-resume";
showcase_resume_container.className = "showcase-resume";

print_button.className = "print_button";

print_button.textContent = "PRINT RESUME";

prof_summary_button.className = "prof_summary_button";

prof_summary_button.textContent = "Add Item to Summary";

education_button.className = "education_button";

education_button.textContent = "Add Education";

skills_button.className = "skills_button";

skills_button.textContent = "Add Skill";

experience_button.className = "experience_button";

experience_button.textContent = "Add New Experience";

document.body.appendChild(global_container);
global_container.appendChild(edit_resume_container);

edit_resume_container.appendChild(prof_summary_button);
edit_resume_container.appendChild(education_button);
edit_resume_container.appendChild(skills_button);
edit_resume_container.appendChild(experience_button);
edit_resume_container.appendChild(print_button);

global_container.appendChild(showcase_resume_container);