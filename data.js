export const businessData = {
    name: "Raya Relax Meknès",
    category: "Hammam & Spa (Women Only)",
    rating: 4.9,
    reviewCount: 145,
    phone: "+212 6 44 44 53 70",
    whatsapp: "212644445370",
    address: "5 Lotissement E28 Magasin 5, Meknès 50050, Morocco",
    mapsCode: "VC6J+H9 Meknès",
    hours: "Ouvert tous les jours — fermeture à 22h00"
};

export const services = [
    {
        title: "Hammam Marocain",
        description: "Un bain de vapeur traditionnel qui purifie le corps et l'esprit, dans la plus pure tradition marocaine.",
        icon: "steam",
        accent: "Eucalyptus & vapeur"
    },
    {
        title: "Gommage & Savon Noir",
        description: "Exfoliation profonde au savon noir d'eucalyptus et gant de kessa pour une peau infiniment douce.",
        icon: "sparkle",
        accent: "Savon noir artisanal"
    },
    {
        title: "Massage Relaxant",
        description: "Un massage enveloppant à l'huile d'argan pure qui libère les tensions et invite à la sérénité.",
        icon: "hands",
        accent: "Huile d'argan pure"
    },
    {
        title: "Soins du Visage",
        description: "Des soins sur mesure au ghassoul et à l'eau de rose pour révéler l'éclat naturel de votre peau.",
        icon: "face",
        accent: "Ghassoul & eau de rose"
    },
    {
        title: "Soins Beauté",
        description: "Épilation, manucure, pédicure et soins esthétiques pour sublimer votre beauté naturelle.",
        icon: "beauty",
        accent: "Soins personnalisés"
    },
    {
        title: "Forfait Mariée",
        description: "Un rituel complet dédié à la future mariée : hammam, gommage, massage, soins visage et corps.",
        icon: "crown",
        accent: "Expérience royale"
    }
];

export const experienceSteps = [
    {
        number: "01",
        title: "Accueil",
        description: "Un thé à la menthe vous attend dans un espace chaleureux et apaisant."
    },
    {
        number: "02",
        title: "Hammam",
        description: "Immersion dans la vapeur purifiante du hammam traditionnel."
    },
    {
        number: "03",
        title: "Gommage",
        description: "Exfoliation douce au savon noir et gant de kessa."
    },
    {
        number: "04",
        title: "Massage",
        description: "Massage relaxant à l'huile d'argan, un pur moment de détente."
    },
    {
        number: "05",
        title: "Détente",
        description: "Repos dans un cocon de sérénité avec infusion et douceurs."
    }
];

export const testimonials = [
    {
        name: "Fatima Z.",
        text: "Un vrai moment de bonheur ! L'accueil est chaleureux, le hammam est impeccable et le massage divin. Je recommande les yeux fermés.",
        rating: 5,
        date: "Il y a 2 semaines"
    },
    {
        name: "Salma B.",
        text: "Le meilleur spa de Meknès sans hésiter. L'ambiance est luxueuse, le personnel attentionné. Mon forfait mariée était parfait !",
        rating: 5,
        date: "Il y a 1 mois"
    },
    {
        name: "Nadia M.",
        text: "Propreté irréprochable, soins de qualité et un cadre magnifique. C'est devenu mon rituel mensuel, je ne peux plus m'en passer.",
        rating: 5,
        date: "Il y a 3 semaines"
    },
    {
        name: "Houda K.",
        text: "Le gommage au savon noir est incroyable, ma peau n'a jamais été aussi douce. L'équipe est très professionnelle et bienveillante.",
        rating: 5,
        date: "Il y a 1 semaine"
    },
    {
        name: "Amina R.",
        text: "Une parenthèse de bien-être absolue. Le massage à l'argan est un pur délice. Merci Raya Relax pour cette expérience unique !",
        rating: 5,
        date: "Il y a 2 mois"
    },
    {
        name: "Khadija L.",
        text: "J'ai offert un forfait à ma mère, elle était aux anges ! Tout est pensé pour le confort et la relaxation. Bravo !",
        rating: 5,
        date: "Il y a 1 mois"
    }
];

export const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbec6a?w=800&q=80",
        alt: "Hammam steam ambiance",
        label: "Hammam"
    },
    {
        src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
        alt: "Spa candles relaxation",
        label: "Ambiance"
    },
    {
        src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80",
        alt: "Massage oils argan",
        label: "Huiles"
    },
    {
        src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
        alt: "Facial treatment spa",
        label: "Soins visage"
    },
    {
        src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
        alt: "Spa towels luxury",
        label: "Détente"
    },
    {
        src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80",
        alt: "Candle spa warm light",
        label: "Atmosphère"
    },
    {
        src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
        alt: "Spa interior design",
        label: "Intérieur"
    },
    {
        src: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=600&q=80",
        alt: "Rose petals spa",
        label: "Rituels"
    }
];

function getServiceIcon(type) {
    const icons = {
        steam: '<svg class="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"/></svg>',
        sparkle: '<svg class="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/></svg>',
        hands: '<svg class="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3.15M10.05 4.575a1.575 1.575 0 013.15 0v3.15M10.05 4.575v3.15M3.75 6.75h16.5M3.75 6.75V21h16.5V6.75M7.5 13.5h.01M12 13.5h.01M16.5 13.5h.01"/></svg>',
        face: '<svg class="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/></svg>',
        beauty: '<svg class="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>',
        crown: '<svg class="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>'
    };
    return icons[type] || icons.steam;
}

export function renderServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    grid.innerHTML = services.map((service, i) => `
        <div class="service-card reveal-up" style="transition-delay: ${i * 80}ms">
            <div class="service-icon">
                ${getServiceIcon(service.icon)}
            </div>
            <h3 class="font-serif text-xl mb-3">${service.title}</h3>
            <p class="font-elegant text-warm-800/60 leading-relaxed mb-4">${service.description}</p>
            <span class="text-xs tracking-wider uppercase text-gold-500 font-medium">${service.accent}</span>
        </div>
    `).join('');
}

export function renderExperience() {
    const container = document.getElementById('experience-steps');
    if (!container) return;

    container.innerHTML = experienceSteps.map((step, i) => `
        <div class="experience-step reveal-up" style="transition-delay: ${i * 120}ms">
            <div class="step-number">${step.number}</div>
            <div class="step-connector"></div>
            <h3 class="font-serif text-lg text-white mb-2">${step.title}</h3>
            <p class="font-elegant text-sm text-white/50 leading-relaxed">${step.description}</p>
        </div>
    `).join('');
}

export function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    if (!grid) return;

    grid.innerHTML = testimonials.slice(0, 6).map((review, i) => `
        <div class="review-card reveal-up" style="transition-delay: ${i * 100}ms">
            <div class="flex items-center gap-1 mb-4">
                ${'<span class="text-gold-500">★</span>'.repeat(review.rating)}
            </div>
            <p class="font-elegant text-warm-800/70 leading-relaxed mb-6 italic">"${review.text}"</p>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center">
                        <span class="font-serif text-gold-600 text-sm font-semibold">${review.name.charAt(0)}</span>
                    </div>
                    <div>
                        <div class="text-sm font-medium">${review.name}</div>
                        <div class="text-xs text-warm-800/40">${review.date}</div>
                    </div>
                </div>
                <svg class="w-8 h-8 text-gold-400/20" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/></svg>
            </div>
        </div>
    `).join('');
}

export function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = galleryImages.map((img, i) => `
        <div class="gallery-item reveal-up" data-index="${i}" style="transition-delay: ${i * 60}ms">
            <img src="${img.src}" alt="${img.alt}" loading="lazy">
            <div class="gallery-overlay">
                <span class="text-white text-sm font-medium tracking-wider">${img.label}</span>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderExperience();
    renderReviews();
    renderGallery();
});
