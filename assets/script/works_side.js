const side = document.querySelector('.side');
const details = document.querySelector('.details');
let timeoutId;

const showDetails = () => {
    side.style.transform = 'translateX(0%)';
    side.style.opacity = '1';
    details.style.transform = 'translateX(0)';
    details.style.opacity = '1';
};

const hideDetails = () => {
    side.style.transform = 'translateX(100%)';
    side.style.opacity = '0';
    details.style.transform = 'translateX(-50%)';
    details.style.opacity = '0';
};

details.addEventListener('mouseenter', showDetails);
side.addEventListener('mouseenter', showDetails);

details.addEventListener('mouseleave', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hideDetails, 5000);
});

side.addEventListener('mouseleave', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hideDetails, 5000);
});

details.addEventListener('click', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hideDetails, 5000);
});

side.addEventListener('click', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hideDetails, 5000);
});