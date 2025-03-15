document.addEventListener("DOMContentLoaded", function () {
    // Handle Donor Form Submission
    document.getElementById("donorForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        const name = document.getElementById("name").value.trim();
        const bloodGroup = document.getElementById("bloodGroup").value.trim();
        const contact = document.getElementById("contact").value.trim();

        if (name && bloodGroup && contact) {
            // Save donor info in the list
            const donorList = document.getElementById("donorList");
            const donorEntry = document.createElement("li");
            donorEntry.textContent = `${name} - Blood Group: ${bloodGroup} - Contact: ${contact}`;
            donorList.appendChild(donorEntry);

            // Clear input fields
            document.getElementById("donorForm").reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});
