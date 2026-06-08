// script.js
document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Logic
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // Reveal on Scroll Animation
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                
                // Trigger counters if this is a counter section
                if(entry.target.querySelector('.counter')) {
                    startCounters();
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-init').forEach(el => {
        observer.observe(el);
    });

    // Animated Counter Logic
    function startCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const speed = 200; // lower is slower
            
            const updateCount = () => {
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // Mobile Menu Toggle (Simplified for code snippet)
    const menuBtn = document.getElementById('menu-btn');
    menuBtn.addEventListener('click', () => {
        alert('Menu Links:\nHome\nAbout\nProjects\nBenefits\nContact\nCall: 9176765656');
    });

    // Form Submission Logic
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const project = contactForm.querySelector('select').value;
        const message = `Hello Aditi Housing, I am interested in ${project}. Please provide details.`;
        const waUrl = `https://wa.me/9176765656?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
    });
});
