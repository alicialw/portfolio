const side = document.querySelector('.side');
const details = document.querySelector('.details');
const workPage = document.querySelector('.work_page');
const gradientTop = document.getElementById('gradient_top');
const backToTop = document.getElementById('backToTop');
let timeoutId;

const showDetails = () => {
    side.style.opacity = '1';
    details.style.opacity = '1';
    backToTop.style.opacity = '0';
    gradientTop.style.opacity = '1';
};

const hideDetails = () => {
    side.style.opacity = '0';
    details.style.opacity = '0';
    backToTop.style.opacity = '1';
    gradientTop.style.opacity = '0';
};

const scrollToTop = () => {
    workPage.scrollTop = 0;
};

showDetails();

backToTop.addEventListener('click', () => {
    scrollToTop();
});


let scrollPos = 0;

workPage.addEventListener('scroll', function () {
    if (workPage.scrollTop > scrollPos) {
        // console.log('Scroll direction: DOWN');
        hideDetails();
    } else {
        // console.log('Scroll direction: UP');
        showDetails();
    }
    scrollPos = workPage.scrollTop;
});

const setGradientTopDisplay = () => {
    const entries = document.querySelectorAll('.entry');
    if (window.matchMedia('(min-aspect-ratio: 4/5)').matches) {
        gradientTop.style.display = 'none';
    } else {
        gradientTop.style.display = 'block';
    }
};

setGradientTopDisplay();

window.addEventListener('resize', setGradientTopDisplay);

function entersWorkPageBy25Percent(element) {
    const elementRect = element.getBoundingClientRect();
    const workPageRect = workPage.getBoundingClientRect();

    const entersWorkPage = elementRect.top <= workPageRect.bottom - (workPageRect.height * 0.25) &&
        elementRect.bottom >= workPageRect.top + (workPageRect.height * 0.25);

    console.log(`Element top: ${elementRect.top}, Element bottom: ${elementRect.bottom}`);
    console.log(`WorkPage top: ${workPageRect.top}, WorkPage bottom: ${workPageRect.bottom}`);
    console.log(`WorkPage height: ${workPageRect.height}, Element height: ${elementRect.height}`);
    console.log(`Enters WorkPage by 25%: ${entersWorkPage}`);

    return entersWorkPage;
}

function handleScroll() {
    const entries = document.querySelectorAll('.entry');

    entries.forEach(entry => {
        if (entersWorkPageBy25Percent(entry)) {
            entry.classList.add('visible');
        }
    });
}

workPage.addEventListener('scroll', handleScroll);

window.addEventListener('load', handleScroll);