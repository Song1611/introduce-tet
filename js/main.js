// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal Observer
function revealOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it hits the viewport
    });

    document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
    });
}

// Background slider for header
let currentSlide = 0;
const slides = document.querySelectorAll('.background-slider .slide');
const totalSlides = slides.length;

function updateHeaderText() {
    const introText = document.querySelector('.intro-text');
    if (introText) {
        const h1 = introText.querySelector('h1');
        const p = introText.querySelector('p');
        const data = tetData.headers[currentSlide];
        
        if (h1 && p && data) {
            h1.innerHTML = `${data.title}<span></span>`;
            p.textContent = data.paragraph;
        }
        
        // Reset and trigger animation
        introText.classList.remove('active-animation');
        void introText.offsetWidth; // Force reflow
        introText.classList.add('active-animation');
    }
}

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
    
    updateHeaderText();
}

// Change slide every 5 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('menu');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
    this.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.page-scroll').forEach(link => {
    link.addEventListener('click', function() {
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
    });
});

// Load Features
function loadFeatures() {
    const featuresContent = document.getElementById('features-content');
    tetData.features.forEach((feature, index) => {
        const featureDiv = document.createElement('div');
        featureDiv.className = `col-md-3 col-sm-6 feature-item reveal-up delay-${(index % 4) + 1}`;
        featureDiv.innerHTML = `
            <div class="feature-card" onclick="window.location.href='detail.html?type=features&id=${index}'" style="cursor: pointer;">
                <img src="${feature.image}" alt="${feature.title}">
                <div class="feature-overlay">
                    <h3>${feature.title}</h3>
                    <p>${feature.text}</p>
                </div>
            </div>
        `;
        featuresContent.appendChild(featureDiv);
    });
}

// Load About
function loadAbout() {
    document.getElementById('about-paragraph').textContent = tetData.about.paragraph;
    
    const whyList1 = document.getElementById('why-list-1');
    tetData.about.why.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        whyList1.appendChild(li);
    });
    
    const whyList2 = document.getElementById('why-list-2');
    tetData.about.why2.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        whyList2.appendChild(li);
    });
}

// Load Traditions
function loadTraditions() {
    const traditionsContent = document.getElementById('traditions-content');
    tetData.traditions.forEach((tradition, index) => {
        const traditionDiv = document.createElement('div');
        traditionDiv.className = `col-md-4 tradition-item reveal-up delay-${(index % 3) + 1}`;
        traditionDiv.innerHTML = `
            <i class="${tradition.icon}"></i>
            <div class="tradition-desc">
                <h3>${tradition.name}</h3>
                <p>${tradition.text}</p>
            </div>
        `;
        traditionsContent.appendChild(traditionDiv);
    });
}

// Load Gallery
function loadGallery() {
    const galleryContent = document.getElementById('gallery-content');
    galleryContent.innerHTML = `
        <div class="gallery-marquee">
            <div class="marquee-row" id="marquee-row-1">
                <div class="marquee-track"></div>
            </div>
            <div class="marquee-row" id="marquee-row-2">
                <div class="marquee-track"></div>
            </div>
        </div>
    `;

    const track1 = document.getElementById('marquee-row-1').querySelector('.marquee-track');
    const track2 = document.getElementById('marquee-row-2').querySelector('.marquee-track');

    // Split gallery items into two rows
    const half = Math.ceil(tetData.gallery.length / 2);
    const row1Items = tetData.gallery.slice(0, half);
    const row2Items = tetData.gallery.slice(half);

    function createItem(item) {
        const div = document.createElement('div');
        div.className = 'marquee-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" onerror="this.src='https://placehold.co/400x300?text=${encodeURIComponent(item.title)}'">
            <div class="marquee-overlay">
                <span>${item.title}</span>
            </div>
        `;
        return div;
    }

    // Populate Row 1 (normal and clone)
    row1Items.forEach(item => track1.appendChild(createItem(item)));
    row1Items.forEach(item => track1.appendChild(createItem(item))); // Clone for seamless loop

    // Populate Row 2 (normal and clone)
    row2Items.forEach(item => track2.appendChild(createItem(item)));
    row2Items.forEach(item => track2.appendChild(createItem(item))); // Clone for seamless loop
}

// Load Foods
function loadFoods() {
    const foodsContent = document.getElementById('foods-content');
    tetData.foods.forEach((food, index) => {
        const foodDiv = document.createElement('div');
        foodDiv.className = `col-md-4 food-item reveal-up delay-${(index % 3) + 1}`;
        foodDiv.innerHTML = `
            <div class="food-card" onclick="window.location.href='detail.html?type=foods&id=${index}'" style="cursor: pointer;">
                <div class="food-image">
                    <img src="${food.img}" alt="${food.name}" onerror="this.src='https://placehold.co/400x300?text=${encodeURIComponent(food.name)}'">
                </div>
                <div class="food-content">
                    <h4>${food.name}</h4>
                    <p>${food.text || food.description}</p>
                </div>
            </div>
        `;
        foodsContent.appendChild(foodDiv);
    });
}

// Load Activities
function loadActivities() {
    const activitiesContent = document.getElementById('activities-content');
    activitiesContent.innerHTML = '<div class="activities-accordion"></div>';
    const accordion = activitiesContent.querySelector('.activities-accordion');
    
    tetData.activities.forEach((activity, index) => {
        const activityCard = document.createElement('div');
        activityCard.className = 'activity-card';
        activityCard.onclick = () => window.location.href = `detail.html?type=activities&id=${index}`;
        activityCard.innerHTML = `
            <img src="${activity.image}" alt="${activity.title}">
            <div class="activity-overlay">
                <div class="activity-overlay-content">
                    <i class="${activity.icon}"></i>
                    <h3>${activity.title}</h3>
                    <p>${activity.text}</p>
                </div>
            </div>
        `;
        
        accordion.appendChild(activityCard);
    });
}

// Load Contact
function loadContact() {
    document.getElementById('contact-address').textContent = tetData.contact.address;
    document.getElementById('contact-phone').textContent = tetData.contact.phone;
    document.getElementById('contact-email').textContent = tetData.contact.email;
    document.getElementById('social-facebook').href = tetData.contact.facebook;
    document.getElementById('social-youtube').href = tetData.contact.youtube;
    document.getElementById('social-instagram').href = tetData.contact.instagram;
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Cảm ơn ${name}! Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất.`);
    
    // Reset form
    this.reset();
});

// Initialize all content when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadFeatures();
    loadAbout();
    loadTraditions();
    loadGallery();
    loadFoods();
    loadActivities();
    loadContact();
    initSearch(); // Initialize search functionality

    // Start reveal animation observer
    revealOnScroll();

    // Initial trigger for hero animation and text
    updateHeaderText();
});
