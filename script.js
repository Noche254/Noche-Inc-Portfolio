// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in effect
const sections = document.querySelectorAll('.fade-in');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Mobile Navigation Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Modal Handling
const modal = document.getElementById('contactModal');
const openModalBtn = document.getElementById('openModalBtn');

openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

function closeModal() {
    modal.style.display = 'none';
}

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Back to Top Button
window.onscroll = function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

document.getElementById('backToTopBtn').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
