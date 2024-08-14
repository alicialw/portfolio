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
    }, 500); // Fade out duration
}

loaderFunction(); 

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




const worksList = document.querySelector('.works_list');
const worksListItems = document.querySelectorAll('.works_list li');

const worksListMiddle = worksList.offsetTop + (worksList.offsetHeight / 2);
let topItemIndex = 0;

const getItemTop = (item) => {
    const marginTop = parseInt(window.getComputedStyle(item).marginTop);
    return item.offsetTop - worksList.scrollTop - marginTop;
};

const getItemHeight = (item) => {
    const marginTop = parseInt(window.getComputedStyle(item).marginTop);
    const marginBottom = parseInt(window.getComputedStyle(item).marginBottom);
    return item.offsetHeight + marginTop + marginBottom;
};

worksList.addEventListener('scroll', function() {
    worksListItems.forEach((item, index) => {
        const itemTop = getItemTop(item);
        const itemHeight = getItemHeight(item);

        if (window.matchMedia('(min-aspect-ratio: 4/5)').matches) {
            if (itemTop < worksListMiddle && itemTop + itemHeight > worksListMiddle) {
                if (index !== topItemIndex) {
                    worksListItems[topItemIndex].classList.remove('focus');
                    worksListItems[topItemIndex].style.transform = 'rotateX(-60deg) rotateY(0deg) rotateZ(45deg)';
                    topItemIndex = index;
                    item.style.transform = 'translateX(-50%) translateY(0) rotateX(-60deg) rotateY(0deg) rotateZ(0deg)';
                    item.classList.add('focus');
                    wvideos.forEach((video, i) => {
                        if (i !== index) {
                            video.style.filter = defaultFilters[i];
                        } else {
                            video.style.filter = 'none';
                        }
                    });
                    wlinks.forEach((link, i) => {
                        if (i === index) {
                            link.style.opacity = 1;
                        } else {
                            link.style.opacity = 0;
                        }
                    });
                }
            }
        } else if (window.matchMedia('(max-aspect-ratio: 4/5)').matches) {
            if (itemTop < worksListMiddle && itemTop + itemHeight > worksListMiddle) {
                if (index !== topItemIndex) {
                    worksListItems[topItemIndex].style.transform = 'rotateX(-60deg) rotateY(0deg) rotateZ(45deg)';
                    topItemIndex = index;
                    item.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
                    item.style.margin = 'var(--rmg) 0';
                    wvideos.forEach((video, i) => {
                        if (i !== index) {
                            video.style.filter = defaultFilters[i];
                        } else {
                            video.style.filter = 'none';
                        }
                    });
                }
            }
        }
    });
});

const wlinks = document.querySelectorAll('.works_list a');
const wvideos = document.querySelectorAll('.works_list video, .works_list img');
const defaultFilters = [];

wvideos.forEach(wvideo => {
    defaultFilters.push(wvideo.style.filter);
});




const toggleButton = document.getElementById('toggleAbout');
const aboutLyrics = document.querySelector('.about_lyrics');
const aboutContainer = document.querySelector('.about_container');

aboutLyrics.style.opacity = 1;
aboutContainer.style.display = 'none';
toggleButton.textContent = 'A';

toggleButton.addEventListener('click', () => {
    if (aboutLyrics.style.opacity == 0) {
        aboutLyrics.style.opacity = 1;
        aboutLyrics.style.zIndex = 5;
        aboutContainer.style.display = 'none';
        toggleAbout.textContent = 'A';
    } else {
        aboutLyrics.style.opacity = 0;
        aboutLyrics.style.zIndex = -1;
        aboutContainer.style.display = 'flex';
        toggleAbout.textContent = '⏵';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const lyricsElements = aboutLyrics.querySelectorAll('p, li, a');

    aboutLyrics.addEventListener('scroll', function() {
        const scrollPosition = aboutLyrics.scrollTop;
        const scrollCenter = aboutLyrics.clientHeight / 2;

        lyricsElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2 - aboutLyrics.offsetTop;
            const distanceFromCenter = Math.abs(elementCenter - scrollCenter);
            const opacity = 1 - (distanceFromCenter / scrollCenter);
            const scale = 0.2 + 0.8 * (1 - distanceFromCenter / scrollCenter);

            element.style.opacity = opacity;
            element.style.transform = `scale(${scale})`;
            element.style.margin = `calc(var(--lyrics) / 5 * ${opacity})`;
        });
    });
});


