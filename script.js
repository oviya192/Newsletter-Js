var emailField = document.getElementById("email-field");
var emailLabel = document.getElementById("email-label");
var emailError = document.getElementById("email-error");
var subscribe = document.getElementById("Subscribe");

function validateEmail(){

    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML = "Please enter a valid email address";
        emailError.style.color = "red";
        emailField.style.borderRadius = "3px";
        emailField.style.color = "red";
        emailField.style.borderColor = "red";
        subscribe.style.backgroundColor = "red";
        return false;
    }

    else{
        emailError.innerHTML = "Verified Email address";
        emailError.style.color = "green";
        emailField.style.borderRadius = "3px";
        emailField.style.color = "green";
        emailField.style.borderColor = "green";
        subscribe.style.backgroundColor = "green";
    return true;
    }
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
}