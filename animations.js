document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
            el.style.opacity = '1';
        });
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        gsap.fromTo(heroContent.children,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.3
            }
        );
    }

    const heroImg = document.getElementById('hero-img');
    if (heroImg) {
        gsap.to(heroImg, {
            scale: 1,
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    function createReveal(selector, fromVars) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            gsap.fromTo(el, fromVars, {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true
                }
            });
        });
    }

    createReveal('.reveal-up', { opacity: 0, y: 50 });
    createReveal('.reveal-left', { opacity: 0, x: -50 });
    createReveal('.reveal-right', { opacity: 0, x: 50 });

    setTimeout(() => {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 88%',
                        once: true
                    }
                }
            );
        });

        const steps = document.querySelectorAll('.experience-step');
        steps.forEach((step, i) => {
            gsap.fromTo(step,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 88%',
                        once: true
                    }
                }
            );
        });

        const reviewCards = document.querySelectorAll('.review-card');
        reviewCards.forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 88%',
                        once: true
                    }
                }
            );
        });

        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, i) => {
            gsap.fromTo(item,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    delay: i * 0.06,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        once: true
                    }
                }
            );
        });
    }, 100);

    ScrollTrigger.refresh();
});
