let loaderVar;

function loaderFunction() {
    loaderVar = setTimeout(showPage, 1000);
}

function showPage() {
    const loader = document.getElementById("loader");
    const main = document.getElementById("main");

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
const lightMode = document.getElementById('light_mode');
const rainbowMode = document.getElementById('rainbow_mode');
const metaThemeColor = document.querySelector('meta[name="theme-color"]');

toggleTheme.addEventListener('click', function() {
    if (worksFrame) {
        if (!isFilterApplied) {
            body.style.filter = 'invert(0.84)';
            worksFrame.style.filter = 'invert(1) contrast(1.5)';
            worksFrame.style.color = 'black';
            lightMode.style.opacity = '1';
            rainbowMode.style.opacity = '0';
            isFilterApplied = true;
            metaThemeColor.setAttribute('content', '#e0e0e0');
        } else {
            if (lightMode.style.opacity === '1') {
                body.style.filter = 'invert(0)';
                worksFrame.style.filter = 'invert(0) contrast(1)';
                worksFrame.style.color = 'white';
                lightMode.style.opacity = '0';
                rainbowMode.style.opacity = '1';
                metaThemeColor.setAttribute('content', '#3B08A3');
            } else {
                body.style.filter = 'invert(0)';
                worksFrame.style.color = 'white';
                lightMode.style.opacity = '0';
                rainbowMode.style.opacity = '0';
                isFilterApplied = false;
                metaThemeColor.setAttribute('content', 'black');
            }
        }
    } else {
        if (!isFilterApplied) {
            body.style.filter = 'invert(0.84)';
            lightMode.style.opacity = '1';
            rainbowMode.style.opacity = '0';
            isFilterApplied = true;
            metaThemeColor.setAttribute('content', '#e0e0e0');
        } else {
            if (lightMode.style.opacity === '1') {
                body.style.filter = 'invert(0)';
                lightMode.style.opacity = '0';
                rainbowMode.style.opacity = '1';
                metaThemeColor.setAttribute('content', '#3B08A3');
            } else {
                body.style.filter = 'invert(0)';
                lightMode.style.opacity = '0';
                rainbowMode.style.opacity = '0';
                isFilterApplied = false;
                metaThemeColor.setAttribute('content', 'black');
            }
        }
    }
});





