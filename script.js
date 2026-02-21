const cards = document.querySelectorAll('.gallery-card');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const imageElements = document.querySelectorAll('.gallery-item');

// Open Lightbox 
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        updateLightbox();
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Stop scrolling
    });
});

function updateLightbox() {
    lightboxImg.src = imageElements[currentIndex].src;
}

// Navigation 
nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % imageElements.length;
    updateLightbox();
};

prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + imageElements.length) % imageElements.length;
    updateLightbox();
};

// Close
closeBtn.onclick = () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
};

// Close on background click
lightbox.onclick = (e) => {
    if (e.target === lightbox) closeBtn.onclick();
};