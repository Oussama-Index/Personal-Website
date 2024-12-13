// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true
});

// Typing animation
const options = {
    strings: ['Full Stack Developer', 'Computer Science Student', 'Machine Learning Enthusiast'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
};

const typed = new Typed('.typing-text', options);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
