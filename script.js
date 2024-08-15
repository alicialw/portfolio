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

let isFilterApplied = false;

const toggleTheme = document.getElementById('toggleTheme');
const body = document.querySelector('body');
const worksFrame = document.querySelector('.works_list');
const gradientOverlays = document.querySelectorAll('.gradient_overlay');
const lightMode = document.getElementById('light_mode');
const rainbowMode = document.getElementById('rainbow_mode');

toggleTheme.addEventListener('click', function() {
    if (worksFrame) {
        if (!isFilterApplied) {
            body.style.filter = 'invert(0.84)';
            worksFrame.style.filter = 'invert(1) contrast(1.5)';
            lightMode.style.opacity = '1';
            rainbowMode.style.opacity = '0';
            gradientOverlays.forEach(overlay => {
                overlay.style.filter = 'none';
            });
            isFilterApplied = true;
        } else {
            if (lightMode.style.opacity === '1') {
                body.style.filter = 'invert(0)';
                worksFrame.style.filter = 'invert(0) contrast(1)';
                lightMode.style.opacity = '0';
                rainbowMode.style.opacity = '1';
                gradientOverlays.forEach(overlay => {
                    overlay.style.filter = 'invert(15%) sepia(83%) saturate(5325%) hue-rotate(267deg) brightness(68%) contrast(125%)';
                });
            } else {
                lightMode.style.opacity = '0';
                rainbowMode.style.opacity = '0';
                gradientOverlays.forEach(overlay => {
                    overlay.style.filter = 'none';
                });
                isFilterApplied = false;
            }
        }
    } else {
        if (!isFilterApplied) {
            body.style.filter = 'invert(0.84)';
            lightMode.style.opacity = '1';
            rainbowMode.style.opacity = '0';
            gradientOverlays.forEach(overlay => {
                overlay.style.filter = 'none';
            });
            isFilterApplied = true;
        } else {
            if (lightMode.style.opacity === '1') {
                body.style.filter = 'invert(0)';
                lightMode.style.opacity = '0';
                rainbowMode.style.opacity = '1';
                gradientOverlays.forEach(overlay => {
                    overlay.style.filter = 'invert(15%) sepia(83%) saturate(5325%) hue-rotate(267deg) brightness(68%) contrast(125%)';
                });
            } else {
                lightMode.style.opacity = '0';
                rainbowMode.style.opacity = '0';
                gradientOverlays.forEach(overlay => {
                    overlay.style.filter = 'none';
                });
                isFilterApplied = false;
            }
        }
    }
});





