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

const wlinks = document.querySelectorAll('.works_list a');
const wvideos = document.querySelectorAll('.works_list video, .works_list img');
const defaultFilters = [];

wvideos.forEach(wvideo => {
    defaultFilters.push(wvideo.style.filter);
});


wlinks.forEach((wlinks, index) => {
    wlinks.addEventListener('mouseover', () => {
        wvideos[index].style.filter = 'none';
    });

    wlinks.addEventListener('mouseout', () => {
        wvideos[index].style.filter = defaultFilters[index];
    });
});

