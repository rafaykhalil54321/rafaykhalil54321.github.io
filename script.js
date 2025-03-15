document.addEventListener("DOMContentLoaded", function () {
    const donorForm = document.getElementById("donorForm");
    const donorList = document.getElementById("donorList");

    // Load saved donors from local storage
    const savedDonors = JSON.parse(localStorage.getItem("donors")) || [];
    savedDonors.forEach(donor => addDonorToList(donor));

    donorForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const bloodGroup = document.getElementById("bloodGroup").value.trim();
        const contact = document.getElementById("contact").value.trim();

        if (name && bloodGroup && contact) {
            const donor = { name, bloodGroup, contact };
            addDonorToList(donor);

            // Save to local storage
            savedDonors.push(donor);
            localStorage.setItem("donors", JSON.stringify(savedDonors));

            donorForm.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });

    function addDonorToList(donor) {
        const donorEntry = document.createElement("li");
        donorEntry.textContent = `${donor.name} - Blood Group: ${donor.bloodGroup} - Contact: ${donor.contact}`;
        donorList.appendChild(donorEntry);
    }

    // Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Toggle Visibility of Sections
    document.querySelectorAll("section").forEach(section => {
        if (section.id !== "home") section.style.display = "none"; // Hide all except home

        document.querySelector(`nav a[href="#${section.id}"]`).addEventListener("click", function () {
            document.querySelectorAll("section").forEach(s => s.style.display = "none");
            section.style.display = "block";
        });
    });
});
