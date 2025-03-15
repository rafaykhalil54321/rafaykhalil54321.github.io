document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("registerButton");
    const donationForm = document.getElementById("donationForm");

    registerButton.addEventListener("click", function () {
        let confirmRegistration = confirm("Do you want to proceed to the registration form?");
        if (confirmRegistration) {
            donationForm.src = "https://docs.google.com/forms/d/e/1FAIpQLSfc5AUVrFMLZCPG9b0-lZgkX0vLf1bBKP2JyMBup8mHC4gKJQ/viewform?embedded=true";
            donationForm.style.display = "block";
            donationForm.scrollIntoView({ behavior: "smooth" });
        }
    });
});
