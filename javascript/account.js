document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    //validation of the email address at

    emailInput.addEventListener("input", () => {
        if (!emailInput.value.includes("@gmal.com")) {
            emailError.textContent = "Enter a valid email address ,please!";
            emailError.style.display = "block";
        }
        else {
            emailError.style.display = "none";
        }
    });
    //The form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
         alert("The form is successfully sent !");
        form.reset();
    });
});