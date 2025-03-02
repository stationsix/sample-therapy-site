document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const modal = document.getElementById("customModal");
    const modalMessage = document.getElementById("modalMessage");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // Ensure the script only runs on pages where the form exists
    if (!form || !modal || !modalMessage || !closeModalBtn) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop actual submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            modalMessage.innerText = `Thank you, ${name}! Your message has been received.`;
            modal.style.display = "flex"; // or "block"
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });

    // Close modal when clicking OK
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
});