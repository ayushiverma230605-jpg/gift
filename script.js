// DOM Elements
const slidesContainer = document.getElementById('slides-container');
const dots = document.querySelectorAll('.dot');
const playBtn = document.getElementById('playBtn');
const bgMusic = document.getElementById('bgMusic');

// Create floating hearts
function createHearts(containerId, count) {
    const container = document.getElementById(containerId);
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-shape');
        
        // Random position
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 20 + 10;
        
        // Random animation
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        heart.style.left = `${left}%`;
        heart.style.top = `${top}%`;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        container.appendChild(heart);
    }
}

// Create hearts for each slide
createHearts('hearts1', 15);
createHearts('hearts2', 15);
createHearts('hearts3', 15);
createHearts('hearts4', 15);
createHearts('hearts5', 15);

// Update active dot based on scroll position
slidesContainer.addEventListener('scroll', () => {
    const slideWidth = slidesContainer.clientWidth;
    const currentSlide = Math.round(slidesContainer.scrollLeft / slideWidth);
    
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
});

// Dot navigation
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-slide'));
        const slideWidth = slidesContainer.clientWidth;
        slidesContainer.scrollTo({
            left: slideWidth * slideIndex,
            behavior: 'smooth'
        });
    });
});

// Music player functionality
let isPlaying = false;

// Set volume when page loads
bgMusic.volume = 0.7;

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        playBtn.innerHTML = '▶';
        isPlaying = false;
    } else {
        bgMusic.play();
        playBtn.innerHTML = '❚❚';
        isPlaying = true;
    }
});