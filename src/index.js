import "./style.css";

let global_container = document.createElement("div");
let edit_resume_container = document.createElement("div");
let showcase_resume_container = document.createElement("div");

global_container.className = "global-container";
edit_resume_container.className = "edit-resume";
showcase_resume_container.className = "showcase-resume";


document.body.appendChild(global_container);
global_container.appendChild(edit_resume_container);
global_container.appendChild(showcase_resume_container);