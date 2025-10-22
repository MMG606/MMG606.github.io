

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "1",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: ".swiper-pagination"
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 2
        },
        // when window width is >= 480px
        767: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 3.5
        },
        1200: {
            slidesPerView: 4
        },
        1400: {
            slidesPerView: 4.5
        }
    }
});



VANTA.NET({
    el: "#vanta-bg",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 100.00,
    minWidth: 100.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xd13fff,
    backgroundColor: 0x1f1f28,
    points: 20.00,
    maxDistance: 30.00,
    spacing: 20.00,
    showDots: false
})


// Toggle mobile menu
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image modal functionality
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.getElementById('modal-close-button');
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const imageSrc = card.getAttribute('data-image-src');
        modalImage.src = imageSrc;
        modal.classList.add('visible'); // Add the visible class
    });
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('visible'); // Remove the visible class
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('visible'); // Remove the visible class
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('visible')) {
        modal.classList.remove('visible'); // Remove the visible class
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project-image');

    projectImages.forEach(img => {
        if (img.complete) {
            handleImageLoad(img);
        } else {
            img.addEventListener('load', () => {
                handleImageLoad(img);
            });
        }
    });

    function handleImageLoad(img) {
        const parentCard = img.closest('.project-card');
        const placeholder = parentCard.querySelector('.loading-placeholder');

        img.classList.add('loaded');
        if (placeholder) {
            placeholder.remove();
        }
    }
});




var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "1",
    watchOverflow: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    autoplay: {
        delay: 1500, 
        //disableOnInteraction: true, 
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5
        },
        580: {
            slidesPerView: 2
        },
        767: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 3.5
        },
        1200: {
            slidesPerView: 4
        },
        1400: {
            slidesPerView: 4.5
        }
    }
});

