var loaderVar;

function loaderFunction() {
    loaderVar = setTimeout(showPage, 1000);
}

function showPage() {
    var loader = document.getElementById("loader");
    var main = document.getElementById("main");

    loader.style.opacity = "0";
    main.style.display = "flex";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500); 
}

window.onload = function() {
    clearTimeout(loaderVar);
    showPage();
};

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

    document.body.style.display = "flex"; 
});




