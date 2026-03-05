import { galleryImages } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    document.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            const index = parseInt(item.dataset.index);
            if (galleryImages[index]) {
                lightboxImg.src = galleryImages[index].src;
                lightboxImg.alt = galleryImages[index].alt;
                lightbox.classList.remove('hidden');
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    });

    function closeLightbox() {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeLightbox();
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
            closeLightbox();
        }
    });
});
