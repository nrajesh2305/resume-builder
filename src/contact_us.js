import "./style.css";

function Contact()
{
    const home = document.querySelector("#home");
    const contact_us = document.querySelector("#contact_us");
    const menu = document.querySelector("#menu");
    home.style.backgroundColor = "tan";
    contact_us.style.backgroundColor = "rgb(165, 137, 103)";
    menu.style.backgroundColor = "tan";
    const info_section = document.querySelector("#info-section");
    info_section.innerHTML = "";
    info_section.style.backgroundColor = "#8BB06F";
    info_section.classList.add("contact-grid");
    info_section.classList.remove('menu-grid');
    info_section.classList.remove("home-grid");
    for(let i = 0; i < 2; i++)
    {
        const gridItem = document.createElement('div');
        if(i === 0)
        {
            const form_title = document.createElement("div");
            form_title.className = "send_message-title";
            form_title.textContent = "Send Us a Message!";
            gridItem.className = "send_message-container";
            let form = document.createElement("form");
            form.className = "form-send_message-form";
            form.setAttribute("action", "/my-handling-form-page");
            form.setAttribute("method", "post");

            let nameLabel = document.createElement("label");
            nameLabel.setAttribute("for", "name");
            nameLabel.textContent = "Name: ";
            let nameInput = document.createElement("input");
            nameInput.setAttribute("type", "text");
            nameInput.setAttribute("id", "name");
            nameInput.setAttribute("name", "user_name");

            let emailLabel = document.createElement("label");
            emailLabel.setAttribute("for", "mail");
            emailLabel.textContent = "Email: ";
            let emailInput = document.createElement("input");
            emailInput.setAttribute("type", "email");
            emailInput.setAttribute("id", "name");
            emailInput.setAttribute("name", "user_email");

            let messageLabel = document.createElement("label");
            messageLabel.setAttribute("for", "msg");
            messageLabel.textContent = "Message: ";
            let messageTextArea = document.createElement("textarea");
            messageTextArea.setAttribute("id", "msg");
            messageTextArea.setAttribute("name", "user_message");

            let submit_button = document.createElement("button");
            submit_button.setAttribute("type", "submit");
            submit_button.textContent = "Send Message";
            submit_button.className = "submit";


            let name = document.createElement("p");
            name.appendChild(nameLabel);
            name.appendChild(nameInput);

            let email = document.createElement("p");
            email.appendChild(emailLabel);
            email.appendChild(emailInput);

            let message = document.createElement("p");
            message.appendChild(messageLabel);
            message.appendChild(messageTextArea);
            
            form.appendChild(form_title);
            form.appendChild(name);
            form.appendChild(email);
            form.appendChild(message);
            form.appendChild(submit_button);

            form.addEventListener("submit", function(event) 
            {
                event.preventDefault();
                location.reload();
            })

            gridItem.appendChild(form);
        }
        else if(i === 1)
        {
            gridItem.className = "contact_info-container";
            let toll_free = document.createElement("div");
            let toll_free_number = document.createElement("div");
            toll_free.classList.add("toll-free-text");
            toll_free_number.classList.add("toll-free-number");
            toll_free.innerHTML = "TOLL-FREE-NUMBER<br>&emsp;&emsp;OPEN 24/7";
            toll_free_number.textContent = "+1 123-456-7890";
            gridItem.appendChild(toll_free);
            gridItem.appendChild(toll_free_number);
        }
        info_section.appendChild(gridItem);
    }
}

export default Contact;