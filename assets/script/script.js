var loaderVar;

function loaderFunction() {
    loaderVar = setTimeout(showPage, 1000);
}

function showPage() {
    var loader = document.getElementById("loader");
    var main = document.getElementById("main");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
        main.style.display = "flex";

        setTimeout(() => {
            const elements = document.querySelectorAll(".load1, .load2, .load3, .load4");
            elements.forEach(element => {
                element.classList.add("load");
            });
        }, 500);
    }, 500);
}

document.addEventListener("DOMContentLoaded", function() {
    loaderFunction();
});

let isFilterApplied = false;

const toggleTheme = document.getElementById('toggleTheme');
const body = document.querySelector('body');
const worksFrame = document.querySelector('.unaffected');
const gradientOverlays = document.querySelectorAll('.gradient_overlay');
const lightMode = document.getElementById('light_mode');
const rainbowMode = document.getElementById('rainbow_mode');

toggleTheme.addEventListener('click', function() {
    if (worksFrame) {
        if (!isFilterApplied) {
            body.style.filter = 'invert(0.84)';
            worksFrame.style.filter = 'invert(1) contrast(1.5)';
            worksFrame.style.color = 'black';
            lightMode.style.opacity = '1';
            rainbowMode.style.opacity = '0';
            gradientOverlays.forEach(overlay => {
                overlay.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%)';
            });
            isFilterApplied = true;
        } else {
            if (lightMode.style.opacity === '1') {
                body.style.filter = 'invert(0)';
                worksFrame.style.filter = 'invert(0) contrast(1)';
                worksFrame.style.color = 'white';
                lightMode.style.opacity = '0';
                rainbowMode.style.opacity = '1';
                gradientOverlays.forEach(overlay => {
                    overlay.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #3B08A3 100%)';
                });
            } else {
                body.style.filter = 'invert(0)';
                worksFrame.style.color = 'white';
                lightMode.style.opacity = '0';
                rainbowMode.style.opacity = '0';
                gradientOverlays.forEach(overlay => {
                    overlay.style.background = 'linear-gradient(0deg, rgba(59, 8, 163, 0) 0%, #000000 100%)';
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
                overlay.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%)';
            });
            isFilterApplied = true;
        } else {
            if (lightMode.style.opacity === '1') {
                body.style.filter = 'invert(0)';
                lightMode.style.opacity = '0';
                rainbowMode.style.opacity = '1';
                gradientOverlays.forEach(overlay => {
                    overlay.style.background = 'linear-gradient(0deg, rgba(59, 8, 163, 0) 0%, #3B08A3 100%)';
                });
            } else {
                body.style.filter = 'invert(0)';
                lightMode.style.opacity = '0';
                rainbowMode.style.opacity = '0';
                gradientOverlays.forEach(overlay => {
                    overlay.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%)';
                });
                isFilterApplied = false;
            }
        }
    }
});





