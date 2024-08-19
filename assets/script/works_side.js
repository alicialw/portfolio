const side = document.querySelector('.side');
const details = document.querySelector('.details');
const workPage = document.querySelector('.work_page');
const backToTop = document.getElementById('backToTop')
let timeoutId;

const showDetails = () => {
    side.style.opacity = '1';
    details.style.opacity = '1';
    backToTop.style.opacity = '0';
};

const hideDetails = () => {
    side.style.opacity = '0';
    details.style.opacity = '0';
    backToTop.style.opacity = '1';
};

const scrollToTop = () => {
    workPage.scrollTop = 0;
};

showDetails();

backToTop.addEventListener('click', () => {
    scrollToTop();
});


let scrollPos = 0;

workPage.addEventListener('scroll', function() {
    if (workPage.scrollTop > scrollPos) {
        console.log('Scroll direction: DOWN');
        hideDetails();
    } else {
        console.log('Scroll direction: UP');
        showDetails();
    }
    scrollPos = workPage.scrollTop;
});



/*workPage.addEventListener('scroll', () => {
    const scrollPosition = workPage.scrollTop;
    const windowHeight = workPage.clientHeight;
    
    if (window.matchMedia('(min-aspect-ratio: 4/5)').matches) {
        if (scrollPosition === 0) {
            showDetails();
        } else if (scrollPosition >= windowHeight / 2) {
            hideDetails();
        }
    } else if (window.matchMedia('(max-aspect-ratio: 4/5)').matches) {
        backToTop.style.display = 'none';
        if (scrollPosition === 0) {
            showDetails();
            backToTop.style.display = 'none';

        } else if (scrollPosition >= windowHeight / 3) {
            hideDetails();
            backToTop.style.display = 'block';
        }
    } else {
    }
});*/