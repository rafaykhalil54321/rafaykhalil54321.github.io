document.addEventListener("DOMContentLoaded", function () {
    // Show the registration question when clicking "Click to Register"
    document.getElementById("registerBtn").addEventListener("click", function () {
        document.getElementById("registrationForm").style.display = "block";
    });

    // Scroll to the Google Form after answering the question
    window.scrollToForm = function () {
        document.getElementById("googleForm").scrollIntoView({ behavior: "smooth" });
    };
});
