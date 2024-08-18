const toggleAbout = document.getElementById('toggleAbout');
const aboutLyrics = document.querySelector('.about_lyrics');
const aboutContainer = document.querySelector('.about_container');

aboutLyrics.style.opacity = 1;
aboutContainer.style.display = 'none';
toggleAbout.textContent = 'A';

toggleAbout.addEventListener('click', () => {
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

    function applyEffect() {
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
            element.style.margin = `calc(var(--lyrics) / 5 * ${opacity}) 0`;
        });
    }

    aboutLyrics.addEventListener('scroll', applyEffect);

    applyEffect();
});