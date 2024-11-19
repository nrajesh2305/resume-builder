import "./style.css";

function Home()
{
    let isButtonClicked = false
    if(!isButtonClicked)
    {
        isButtonClicked = true;
        const home = document.querySelector("#home");
        const contact_us = document.querySelector("#contact_us");
        const menu = document.querySelector("#menu");
        home.style.backgroundColor = "rgb(165, 137, 103)";
        contact_us.style.backgroundColor = "tan";
        menu.style.backgroundColor = "tan";
        const info_section = document.querySelector("#info-section");
        info_section.innerHTML = "";
        info_section.classList.add('home-grid');
        info_section.classList.remove('menu-grid');
        for(let i = 0; i < 4; i++)
        {
            const gridItem = document.createElement('div');
            gridItem.classList.add('home-grid-item');
            if (i === 0 || i === 2)
            {
                gridItem.className = "restaurant_logo";
            }
            if(i === 1)
            {
                gridItem.className = "welcome_sign";
                gridItem.style.color = "black";
                gridItem.textContent = "Welcome to Papa's Piearria!";
            }
            if(i === 3)
            {
                gridItem.className = "restaurant_name";
                gridItem.style.color = "black";
                gridItem.textContent = "Come Eat With Us!"; 
            }
            info_section.appendChild(gridItem);
        }
    }
    else
    {
        return;
    }

}

export default Home;