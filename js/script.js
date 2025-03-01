document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const modal = document.getElementById("customModal");
    const modalMessage = document.getElementById("modalMessage");

    // Prevent errors on pages without a form
    if (!form) return;  

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop actual submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check if all fields are filled
        if (name && email && message) {
            modalMessage.innerText = `Thank you, ${name}! Your message has been received.`;
            modal.style.display = "flex"; 
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });

    // Close modal when clicking OK
    document.getElementById("closeModalBtn").addEventListener("click", function () {
        modal.style.display = "none";
    });
});
