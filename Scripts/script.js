// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 64,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-level');
const skillsSection = document.querySelector('.skills');

function animateSkillBars() {
    const triggerBottom = window.innerHeight * 0.8;

    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if (barTop < triggerBottom) {
            const width = bar.parentElement.parentElement.querySelector('.skill-info span:last-child').textContent;
            bar.style.width = width;
        }
    });
}

window.addEventListener('scroll', animateSkillBars);

// Initialize skill bars with 0 width
skillBars.forEach(bar => {
    bar.style.width = '0';
});

// Trigger initial animation if skills section is in view
animateSkillBars();