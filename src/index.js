import "./style.css";
import Home from "./home";
import Menu from "./menu";
import Contact from "./contact_us";

let global_container = document.createElement("div");
let nav_container = document.createElement("div");

global_container.className = "global-container";
nav_container.className = "nav-container";

let home = document.createElement("button");
let menu = document.createElement("button");
let contact_us = document.createElement("button");

home.className = "home";
home.id = "home";
home.innerText = "Home";
home.style.backgroundColor = "rgb(165, 137, 103)";

menu.className = "the_menu";
menu.id = "menu";
menu.innerText = "Menu";

contact_us.className = "contact_us";
contact_us.id = "contact_us";
contact_us.innerText = "Contact Us";

let info_section = document.querySelector("#info-section");
info_section.id = "info-section";

home.addEventListener("click", () => 
{
    Home()
});

menu.addEventListener("click", Menu);

contact_us.addEventListener("click", Contact);

document.body.appendChild(global_container);
global_container.appendChild(nav_container);
global_container.appendChild(info_section);
nav_container.appendChild(home);
nav_container.appendChild(menu);
nav_container.appendChild(contact_us);
