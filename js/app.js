const submit = document.querySelector("#submit");
const email = document.querySelector("#email");
const invalidText = document.querySelector("#invalid-text");

function validEmail (e) {
    if (email.validity.valid) {
        email.style.borderColor = "#C2D3FF";
        invalidText.style.display = "none";
        
    } else {
        email.style.borderColor = "#ff5466";
        invalidText.style.display = "block";

    }
}

submit.addEventListener('click', validEmail);