const submit = document.querySelector("#submit");
const email = document.querySelector("#email");
const invalidText = document.querySelector("#invalid-text");
const validText = document.querySelector("#valid-text");

function validEmail (e) {
    e.preventDefault();
    if (email.validity.valid && email.value !== "") {
        email.style.borderColor = "#2ECC71";
        invalidText.style.display = "none";
        validText.style.display = "block";
        email.value = "";
        
    } else {
        email.style.borderColor = "#ff5466";
        invalidText.style.display = "block";
        validText.style.display = "none";

    }
}

submit.addEventListener('click', validEmail);