
const form = document.getElementById('myForm');
const nameInput = document.getElementById('n');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submitButton');


function checkFormValidity() {
    if (nameInput.checkValidity() && phoneInput.checkValidity() && emailInput.checkValidity()) {
        submitButton.disabled = false; 
        submitButton.style.backgroundColor = 'green'; 
    } else {
        submitButton.disabled = true; 
        submitButton.style.backgroundColor = 'red'; 
    }
}


nameInput.addEventListener('input', checkFormValidity);
phoneInput.addEventListener('input', checkFormValidity);
emailInput.addEventListener('input', checkFormValidity);


checkFormValidity();



document.addEventListener("DOMContentLoaded", function () {
    const animatedLink = document.getElementById("animatedLink");

    animatedLink.addEventListener("mouseover", () => {
        animatedLink.classList.add("bounce");
    });

    animatedLink.addEventListener("animationend", () => {
        animatedLink.classList.remove("bounce");
    });
});
