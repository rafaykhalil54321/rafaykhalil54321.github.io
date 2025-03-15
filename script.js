document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Scroll to Registration Form on Click
    document.querySelector(".register-btn").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfc5AUVrFMLZCPG9b0-lZgkX0vLf1bBKP2JyMBup8mHC4gKJQ/viewform?embedded=true";
    });

    // Trigger Animations
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animationDelay = `${index * 0.3}s`;
            el.classList.add("fade-in");
        }, 500);
    });
});
