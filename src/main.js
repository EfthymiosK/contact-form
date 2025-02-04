const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const queryType = document.querySelector("input[name='query-type']:checked");
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent").checked;

    const formAlerts = document.querySelectorAll(".form-alert");

    let isValid = true;

    //test
    console.log(firstName)


    if (firstName==='') {
        isValid = false;

        document.querySelector("#first-name + .form-alert").style.display = "block";
        document.getElementById("first-name").style.border = "1px solid var(--color-Red)"
        console.log(document.querySelector("#first-name + .form-alert"))
    } else {
        document.querySelector("#first-name + .form-alert").style.display = "none";
        document.getElementById("first-name").style.border = "1px solid var(--color-Grey500)"

    }

    if (lastName==='') {
        isValid = false;

        document.querySelector("#last-name + .form-alert").style.display = "block";
        document.getElementById("last-name").style.border = "1px solid var(--color-Red)"
    } else {
        document.querySelector("#last-name + .form-alert").style.display = "none";
        document.getElementById("last-name").style.border = "1px solid var(--color-Grey500)"

    }

    if(!isValidEmail(email)) {
        isValid = false;

        document.querySelector("#email + .form-alert").style.display = "block";
        document.getElementById("email").style.border = "1px solid var(--color-Red)"
    } else {
        document.querySelector("#email + .form-alert").style.display = "none";
        document.getElementById("email").style.border = "1px solid var(--color-Grey500)"

    }

    if(!queryType) {


        document.querySelector("#radio-form-alert").style.display = "block";
        
    } else {
        document.querySelector("#radio-form-alert").style.display = "none";
        

    }

    if(message === '') {

        document.querySelector("#message + .form-alert").style.display = "block";
        document.getElementById("message").style.border = "1px solid var(--color-Red)"
    } else {
        document.querySelector("#message + .form-alert").style.display = "none";
        document.getElementById("message").style.border = "1px solid var(--color-Grey500)"
    }
    
    if(!consent) {
        isValid = false;
        formAlerts[5].classList.remove("hidden");
    } else {
        formAlerts[5].classList.add("hidden");
    }

    if(isValid) {
        successMessage.style.display = "block"
    }
})

function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return pattern.test(email);
}
