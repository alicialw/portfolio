const scrollSignifier = document.querySelector('.cta');
const worksList = document.querySelector('.works_list');
const worksListItems = document.querySelectorAll('.works_list li');

const worksListMiddle = worksList.offsetTop + (worksList.offsetHeight / 2);
const worksListUpper = worksList.offsetTop + (worksList.offsetHeight / 3);
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



worksList.addEventListener('scroll', function () {

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
                    scrollSignifier.style.opacity = '0';
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
            if (itemTop < worksListUpper && itemTop + itemHeight > worksListUpper) {
                if (index !== topItemIndex) {
                    worksListItems[topItemIndex].style.transform = 'rotateX(-60deg) rotateY(0deg) rotateZ(45deg)';
                    worksListItems[topItemIndex].style.margin = 'calc(var(--rmg)*-4) 0';
                    topItemIndex = index;
                    item.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
                    item.style.margin = '0';
                    scrollSignifier.style.opacity = '0';
                    wvideos.forEach((video, i) => {
                        if (i !== index) {
                            video.style.filter = defaultFilters[i];
                        } else {
                            video.style.filter = 'none';
                        }
                    });
                    wtypes.forEach((video, i) => {
                        if (i !== index) {
                            video.style.display = 'none';
                        } else {
                            video.style.display = 'block';
                        }
                    });
                }
            }
        }
    });
});

const wlinks = document.querySelectorAll('.works_list a');
const wvideos = document.querySelectorAll('.works_list video, .works_list img');
const wtypes = document.querySelectorAll('.works_list h3');
const defaultFilters = [];

wvideos.forEach(wvideo => {
    defaultFilters.push(wvideo.style.filter);
});