
    document.addEventListener("DOMContentLoaded", function() {
        var dropdown = document.querySelector(".dropdown");
        dropdown.addEventListener("click", function() {
            dropdown.classList.toggle("active");
        });
    });