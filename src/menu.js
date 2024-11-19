import "./style.css";


function Menu()
{
    const home = document.querySelector("#home");
    const contact_us = document.querySelector("#contact_us");
    const menu = document.querySelector("#menu");
    home.style.backgroundColor = "tan";
    contact_us.style.backgroundColor = "tan";
    menu.style.backgroundColor = "rgb(165, 137, 103)";
    const info_section = document.querySelector("#info-section");
    info_section.innerHTML = "";
    info_section.classList.add('menu-grid');
    info_section.classList.remove("home-grid");
    info_section.classList.remove("contact-grid");

    let pie_types = ["Apple Pie: Your sweet delight, fruity flavor in the world of Pies!", "Mango Pie: Your sweet delight, fruity flavor in the world of Pies!", "Pumpkin Pie: Your sweet delight, fruity flavor in the world of Pies!", "Cherry Pie: Your sweet delight, fruity flavor in the world of Pies!"];

    for(let i = 0; i < 4; i++)
    {
        const gridItem = document.createElement('div');
        const description = document.createElement("div");
        const image = document.createElement("img");
        image.className = "item_image";
        description.className = "item_description";
        if(i === 0)
        {
            description.textContent = pie_types[0];
            image.style.backgroundImage = "/imgs/mango_pie.png";
        }
        if(i === 1)
        {
            description.textContent = pie_types[1];   
            image.style.backgroundImage = "/imgs/mango_pie.png"; 
        }
        if(i === 2)
        {
            description.textContent = pie_types[2];    
        }
        if(i === 3)
        {
            description.textContent = pie_types[3];    
        }
        gridItem.className = "menu_item";
        gridItem.appendChild(image);
        gridItem.appendChild(description);
        info_section.appendChild(gridItem);
    }
}

export default Menu;