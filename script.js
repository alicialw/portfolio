document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".load1 .load2");
    elements.forEach(element => {
        element.classList.add("load");
    });

});

window.addEventListener("loading", function() {
    const elements = document.querySelectorAll("*");

    elements.forEach(element => {
        element.style.opacity = 1;
    });

    document.body.style.display = "block"; 
});

