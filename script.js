/* ============================================
   PORTFOLIO SCRIPTS - MODULARIZED
   Features: Dark mode, mobile menu, smooth scroll,
   enhanced form, scroll reveal, back to top,
   typing effect, active nav link, portfolio filter.
   ============================================ */

const App = {
    init() {
        this.initTheme();
        this.initMobileMenu();
        this.initSmoothScroll();
        this.initForms();
        this.initScrollReveal();
        this.initBackToTop();
        this.initTypingEffect();
        this.initActiveNav();
        this.initPortfolioFilter();
    },

    /* ---------- 1. DARK MODE TOGGLE ---------- */
    initTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const htmlEl = document.documentElement;

        // Restore saved theme or check system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            htmlEl.setAttribute('data-theme', 'dark');
        } else {
            htmlEl.setAttribute('data-theme', 'light');
        }

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const current = htmlEl.getAttribute('data-theme');
                const next = current === 'dark' ? 'light' : 'dark';
                htmlEl.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
            });
        }
    },

    /* ---------- 2. MOBILE MENU TOGGLE ---------- */
    initMobileMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const navbar = document.getElementById('navbar');

        if (menuToggle && navbar) {
            menuToggle.addEventListener('click', () => {
                navbar.classList.toggle('active');
            });

            // Close menu when a link is clicked
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => navbar.classList.remove('active'));
            });
        }
    },

    /* ---------- 3. SMOOTH SCROLL ---------- */
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    },

    /* ---------- 4. FORM HANDLING (Contact & Comment) ---------- */
    initForms() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            this.setupFormSubmission(contactForm, 'Send Message');
        }

        const commentForm = document.getElementById('commentForm');
        if (commentForm) {
            this.setupFormSubmission(commentForm, 'Post Comment');
        }
    },

    // Helper to handle form submission logic
    setupFormSubmission(form, originalBtnText) {
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Create status message element
        const formStatus = document.createElement('div');
        formStatus.className = 'form-status';
        form.appendChild(formStatus);

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            // Simulate API request delay
            setTimeout(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';

                // Show success message
                formStatus.textContent = 'Thank you! Your message has been sent.';
                formStatus.style.display = 'block';

                this.reset();

                // Hide message after 3 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 3000);
            }, 1500);
        });
    },

    /* ---------- 5. SCROLL REVEAL ---------- */
    initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal');
        if (revealElements.length > 0) {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });

            revealElements.forEach(el => observer.observe(el));
        }
    },

    /* ---------- 6. BACK TO TOP BUTTON ---------- */
    initBackToTop() {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '↑';
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTopBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    /* ---------- 7. TYPING EFFECT ---------- */
    initTypingEffect() {
        const typingElement = document.getElementById('typing-text');
        if (!typingElement) return;

        const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver'];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000; // Pause when word is fully typed
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    },

    /* ---------- 8. ACTIVE NAV LINK ON SCROLL ---------- */
    initActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');

        if (sections.length === 0 || navLinks.length === 0) return;

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    },

    /* ---------- 9. PORTFOLIO FILTER ---------- */
    initPortfolioFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioCards = document.querySelectorAll('.portfolio-card');

        if (filterButtons.length === 0 || portfolioCards.length === 0) return;

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button state
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                portfolioCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                        setTimeout(() => card.style.opacity = '1', 50);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });
    }
};


// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());