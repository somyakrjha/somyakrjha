// script.js

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const submitButton = document.getElementById("bt");

    submitButton.addEventListener("click", function () {
        validateInput(nameInput.value);
    });

    function validateInput(inputValue) {
        const errorContainer = document.getElementById("error-message");
        errorContainer.innerHTML = ""; // Clear previous error messages

        // Check if only 9 characters are allowed
        if (inputValue.length !== 9) {
            displayError("Only 9 characters are allowed.");
            return;
        }

        // Check if at least 1 alphabet is required
        if (!/[a-zA-Z]/.test(inputValue)) {
            displayError("At least 1 alphabet is required.");
            return;
        }

        // Check if it doesn't match the records (Simulated condition)
        const recordsMatched = true; // Change this based on your actual validation logic
        if (!recordsMatched) {
            displayError("Input doesn't match the records.");
            return;
        }

        // Add additional logic here for successful submission if needed
    }

    function displayError(message) {
        const errorContainer = document.getElementById("error-message");
        const errorElement = document.createElement("p");
        errorElement.className = "error";
        errorElement.textContent = message;
        errorContainer.appendChild(errorElement);
    }
});
