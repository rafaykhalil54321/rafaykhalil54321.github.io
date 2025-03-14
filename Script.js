// Handle Donor Form Submission
document.getElementById("donorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    let name = document.getElementById("name").value;
    let bloodGroup = document.getElementById("bloodGroup").value;
    let contact = document.getElementById("contact").value;

    // Save donor info in list
    let donorList = document.getElementById("donorList");
    let donorEntry = document.createElement("li");
    donorEntry.textContent = `${name} - Blood Group: ${bloodGroup} - Contact: ${contact}`;
    donorList.appendChild(donorEntry);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("bloodGroup").value = "";
    document.getElementById("contact").value = "";
});
