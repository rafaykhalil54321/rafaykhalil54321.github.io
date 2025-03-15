document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Scroll to registration form when clicking "Click Here to Register"
    document.getElementById("registerBtn").addEventListener("click", function () {
        document.getElementById("donate").scrollIntoView({ behavior: "smooth" });
    });

    // Show Google Form only if eligible
    document.getElementById("proceedBtn").addEventListener("click", function () {
        let eligibility = document.getElementById("donorEligibility").value;
        if (eligibility === "yes") {
            document.getElementById("formContainer").classList.remove("hidden");
        } else {
            alert("Sorry, you are not eligible to donate blood.");
        }
    });

    // Fade-in animations
    let sections = document.querySelectorAll(".animated");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = "0.3s";
                entry.target.classList.add("fadeInUp");
            }
        });
    });

    sections.forEach(section => observer.observe(section));
});
