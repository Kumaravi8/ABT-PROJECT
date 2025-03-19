// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("/ABT-PROJECT/Frontend/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});
