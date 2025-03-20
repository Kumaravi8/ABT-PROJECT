// Attach event listeners to handle changes dynamically
document.getElementById("eventType").addEventListener("change", handleEventType);
document.getElementById("specialRequest").addEventListener("change", handleSpecialRequest);
document.getElementById("name").addEventListener("input", clearError);
document.getElementById("email").addEventListener("input", clearError);
document.getElementById("phone").addEventListener("input", clearError);
document.getElementById("eventDate").addEventListener("input", clearError);

/**
 * Handles the visibility of the "Other" event type input field.
 * If "Other" is selected, the input field appears and is required.
 * Otherwise, it is hidden and not required.
 */
function handleEventType() {
    let eventType = document.getElementById("eventType").value;
    let otherEventDiv = document.getElementById("otherEventDiv");
    let otherEventInput = document.getElementById("otherEventInput");

    if (eventType === "Other") {
        otherEventDiv.style.display = "block"; // Show the input field
        otherEventInput.setAttribute("required", "true"); // Make it mandatory
    } else {
        otherEventDiv.style.display = "none"; // Hide the input field
        otherEventInput.removeAttribute("required"); // Remove required attribute
    }
}

/**
 * Handles the visibility of the "Other" special request input field.
 * If "Other" is selected, the input field appears and is required.
 * Otherwise, it is hidden and not required.
 */
function handleSpecialRequest() {
    let specialRequest = document.getElementById("specialRequest").value;
    let otherRequestDiv = document.getElementById("otherRequestDiv");
    let otherRequestInput = document.getElementById("otherRequest");

    if (specialRequest === "Other") {
        otherRequestDiv.style.display = "block"; // Show the input field
        otherRequestInput.setAttribute("required", "true"); // Make it mandatory
    } else {
        otherRequestDiv.style.display = "none"; // Hide the input field
        otherRequestInput.removeAttribute("required"); // Remove required attribute
    }
}

/**
 * Validates the form before submission.
 * Prevents submission if validation fails and shows appropriate error messages.
 */
function validateForm(event) {
    event.preventDefault(); // Prevent form submission if validation fails

    let isValid = true; // Flag to track overall validation status
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let eventDate = document.getElementById("eventDate").value;
    let today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    // Validate name (only letters and spaces, minimum 3 characters)
    let namePattern = /^[A-Za-z ]{3,}$/;
    if (!namePattern.test(name)) {
        showError("nameError", "Please enter a valid name (min 3 letters).");
        isValid = false;
    }

    // Validate email (must start with a letter and be a valid format)
    let emailPattern = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError("emailError", "Email must start with a letter.");
        isValid = false;
    }

    // Validate phone number (must be exactly 10 digits)
    if (!/^\d{10}$/.test(phone)) {
        showError("phoneError", "Please enter a valid 10-digit phone number.");
        isValid = false;
    }

    // Validate event date (must be selected and not in the past)
    if (!eventDate) {
        showError("eventDateError", "Please select an event date.");
        isValid = false;
    } else if (eventDate < today) {
        showError("eventDateError", "Event date cannot be in the past.");
        isValid = false;
    }

    // Validate "Other" event type input if selected
    if (document.getElementById("eventType").value === "Other" && document.getElementById("otherEventInput").value.trim() === "") {
        showError("eventTypeError", "Please specify your event type.");
        isValid = false;
    }

    // Validate "Other" special request input if selected
    if (document.getElementById("specialRequest").value === "Other" && document.getElementById("otherRequest").value.trim() === "") {
        showError("otherRequestError", "Please specify your special request.");
        isValid = false;
    }

    // If all validations pass, show success message
    if (isValid) {
        alert("Form submitted successfully!");
        return true;
    }

    return false; // Prevent form submission if any validation fails
}

/**
 * Displays an error message for a specific field.
 
 */
function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

/**
 * Clears the error message when the user starts typing in the input field.
 * Automatically removes the error message when the input is corrected.
 */
function clearError(event) {
    let errorId = event.target.id + "Error"; // Determine the corresponding error message ID
    document.getElementById(errorId).innerText = ""; // Clear the error message
}
// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("/ABT-PROJECT/Frontend/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});

