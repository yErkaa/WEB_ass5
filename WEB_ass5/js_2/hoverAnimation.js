// scripts/hoverAnimation.js

// Hover animation on the main image
function initHoverAnimation() {
    const mainImage = document.getElementById('mainImage');
    mainImage.addEventListener('mouseenter', () => {
        mainImage.style.transform = 'scale(1.1)';
    });
    mainImage.addEventListener('mouseleave', () => {
        mainImage.style.transform = 'scale(1)';
    });
}

initHoverAnimation();
