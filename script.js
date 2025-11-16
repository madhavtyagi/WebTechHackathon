const artworks = [
    // Room 1: Renaissance
    {
        id: 1,
        room: 1,
        title: "Water Lilies at Dusk",
        artist: "Claude Monet",
        year: 1906,
        medium: "Oil on Canvas",
        image: "./public/impressionism-water-lilies-monet-soft.jpg",
        notes: "Monet's serene exploration of light and reflection, capturing the ephemeral quality of nature through soft, impressionistic brushstrokes. A masterpiece of color and atmosphere rather than rigid detail."
    },
    {
        id: 2,
        room: 1,
        title: "The School of Athens",
        artist: "Raphael",
        year: 1511,
        medium: "Fresco",
        image: "./public/renaissance-school-of-athens-philosophers.jpg",
        notes: "An iconic fresco featuring the greatest philosophers of antiquity. Raphael's composition and use of perspective revolutionized Renaissance art."
    },
    {
        id: 3,
        room: 1,
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        year: 1931,
        medium: "Oil on Canvas",
        image: "./public/surrealist-melting-clocks-desert-landscape.jpg",
        notes: "A dreamlike exploration of time and reality, featuring Dalí's signature melting clocks. This work challenges our perception of objective reality."
    },
    
    // Room 2: Abstract
    {
        id: 4,
        room: 2,
        title: "Composition VIII",
        artist: "Wassily Kandinsky",
        year: 1923,
        medium: "Oil on Canvas",
        image: "./public/abstract-geometric-composition-colorful-shapes.jpg",
        notes: "Kandinsky's masterpiece exploring the spiritual essence of color and form. Each geometric element carries emotional and symbolic meaning."
    },
    {
        id: 5,
        room: 2,
        title: "Convergence",
        artist: "Jackson Pollock",
        year: 1952,
        medium: "Oil on Canvas",
        image: "./public/abstract-expressionism-drip-painting-colorful.jpg",
        notes: "A revolutionary work of abstract expressionism using the drip technique. The chaotic yet balanced composition invites viewers to find their own meaning."
    },
    {
        id: 6,
        room: 2,
        title: "Untitled Yellow and Blue",
        artist: "Mark Rothko",
        year: 1954,
        medium: "Oil on Canvas",
        image: "./public/abstract-color-field-yellow-blue-minimalist.jpg",
        notes: "Rothko's exploration of color relationships and emotional resonance. The subtle interplay of yellow and blue creates a meditative experience."
    },
    
    // Room 3: Surrealism
    {
        id: 7,
        room: 3,
        title: "The Temptation of Saint Anthony",
        artist: "Max Ernst",
        year: 1945,
        medium: "Oil on Canvas",
        image: "./public/surrealism-temptation-of-saint-anthony-max-ernst.jpg",
        notes: "Ernst's dreamlike landscape filled with grotesque creatures and impossible architectures. The work explores the subconscious mind and the surreal beauty of irrational imagery."
    },
    {
        id: 8,
        room: 3,
        title: "The Son of Man",
        artist: "René Magritte",
        year: 1964,
        medium: "Oil on Canvas",
        image: "./public/surrealism-son-of-man-magritte-mysterious.jpg",
        notes: "Magritte's iconic work featuring a man with an apple obscuring his face. A profound meditation on identity, concealment, and the mysteries of human existence."
    },
    {
        id: 9,
        room: 3,
        title: "The Elephants",
        artist: "Salvador Dalí",
        year: 1948,
        medium: "Oil on Canvas",
        image: "./public/surrealism-elephants-dali-dreamscape.jpg",
        notes: "Dalí's masterpiece featuring elongated elephants on impossibly thin legs in a desolate landscape. A haunting vision that challenges our perception of reality and dreams."
    },
    
    // Room 4: Digital
    {
        id: 10,
        room: 4,
        title: "Neural Network Dream",
        artist: "Digital Collective",
        year: 2023,
        medium: "Digital Art / AI-Generated",
        image: "./public/cyberpunk-neon-digital-art-neural-network-futurist.jpg",
        notes: "A collaboration between human creativity and artificial intelligence, representing the future of artistic expression in the digital age."
    },
    {
        id: 11,
        room: 4,
        title: "Quantum Flux",
        artist: "VR Artist Studio",
        year: 2023,
        medium: "Interactive Digital Installation",
        image: "./public/digital-glitch-art-neon-colors-cyberpunk-abstract.jpg",
        notes: "An immersive digital experience exploring quantum computing and the nature of digital reality. Viewers become participants in the artwork."
    },
    {
        id: 12,
        room: 4,
        title: "Code as Canvas",
        artist: "Tech Artist Collective",
        year: 2023,
        medium: "Generative Art / Code",
        image: "./public/generative-art-algorithmic-neon-patterns-digital.jpg",
        notes: "Using algorithms and code as an artistic medium, this work demonstrates how technology can be used to create beauty and meaning."
    }
];

// ============= STATE MANAGEMENT =============
let currentPage = 'lobby';
let currentArtwork = null;
let favorites = JSON.parse(localStorage.getItem('museospaceStarred')) || [];
let ambientMode = false;

// ============= PAGE NAVIGATION =============
function goToPage(page) {
    // Hide current page
    const currentPageEl = document.getElementById(`page-${currentPage}`);
    if (currentPageEl) {
        currentPageEl.classList.remove('active');
    }

    // Show new page
    const newPageEl = document.getElementById(`page-${page}`);
    if (newPageEl) {
        newPageEl.classList.add('active');
    }

    currentPage = page;
    window.scrollTo(0, 0);

    // Initialize page-specific elements
    if (page === 'gallery') {
        initializeGallery();
    } else if (page === 'feedback') {
        populateFavorites();
    }
}

function startTour() {
    goToPage('gallery');
}

function restartTour() {
    closeModal('thankYouModal');
    goToPage('lobby');
}

// ============= GALLERY INITIALIZATION =============
function initializeGallery() {
    // Populate each room
    for (let room = 1; room <= 4; room++) {
        const roomArtworks = artworks.filter(art => art.room === room);
        const gridElement = document.getElementById(`room${room}-grid`);
        gridElement.innerHTML = '';

        roomArtworks.forEach(artwork => {
            const card = document.createElement('div');
            card.className = 'artwork-card';
            card.innerHTML = `
                <img src="${artwork.image}" alt="${artwork.title}">
                <div class="artwork-label">
                    <h4>${artwork.title}</h4>
                    <p>${artwork.artist}</p>
                </div>
            `;
            card.onclick = () => showArtwork(artwork);
            gridElement.appendChild(card);
        });
    }
}

// ============= ARTWORK DETAIL PAGE =============
function showArtwork(artwork) {
    currentArtwork = artwork;
    goToPage('artwork');

    // Populate artwork details
    document.getElementById('artworkImage').src = artwork.image;
    document.getElementById('artworkImage').alt = artwork.title;
    document.getElementById('artworkTitle').textContent = artwork.title;
    document.getElementById('artworkArtist').textContent = `by ${artwork.artist}`;
    document.getElementById('artworkYear').textContent = artwork.year;
    document.getElementById('artworkMedium').textContent = artwork.medium;
    document.getElementById('curatorNotes').textContent = artwork.notes;

    // Update favorite button
    updateFavoriteButton();

    // Populate related artworks carousel
    populateCarousel();
}

function closeArtwork() {
    goToPage('gallery');
}

function updateFavoriteButton() {
    const btn = document.getElementById('favoriteButton');
    const isFavorite = favorites.includes(currentArtwork.id);
    
    if (isFavorite) {
        btn.classList.add('active');
        btn.innerHTML = '<span class="heart">♥</span> Starred';
    } else {
        btn.classList.remove('active');
        btn.innerHTML = '<span class="heart">♡</span> Add to Favorites';
    }
}

function toggleFavorite() {
    const index = favorites.indexOf(currentArtwork.id);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(currentArtwork.id);
    }

    localStorage.setItem('museospaceStarred', JSON.stringify(favorites));
    updateFavoriteButton();
}

function populateCarousel() {
    const track = document.getElementById('carouselTrack');
    track.innerHTML = '';

    const relatedArtworks = artworks.filter(art => 
        art.room === currentArtwork.room && art.id !== currentArtwork.id
    );

    if (relatedArtworks.length === 0) {
        track.innerHTML = '<p style="opacity: 0.6;">No related artworks</p>';
        return;
    }

    relatedArtworks.forEach(artwork => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `<img src="${artwork.image}" alt="${artwork.title}">`;
        item.onclick = () => showArtwork(artwork);
        track.appendChild(item);
    });
}

// ============= FEEDBACK PAGE =============
function populateFavorites() {
    const select = document.getElementById('favoriteArtwork');
    select.innerHTML = '<option value="">Select from your favorites...</option>';

    favorites.forEach(favId => {
        const artwork = artworks.find(art => art.id === favId);
        if (artwork) {
            const option = document.createElement('option');
            option.value = favId;
            option.textContent = artwork.title;
            select.appendChild(option);
        }
    });
}

function updatePreview() {
    const name = document.getElementById('visitorName').value || 'Your Name';
    const email = document.getElementById('visitorEmail').value || 'email@example.com';
    const message = document.getElementById('visitorMessage').value || 'Your thoughts will appear here...';

    document.getElementById('previewName').textContent = name;
    document.getElementById('previewEmail').textContent = email;
    document.getElementById('previewMessage').textContent = message;
}

document.addEventListener('DOMContentLoaded', () => {
    const formInputs = ['visitorName', 'visitorEmail', 'visitorMessage'];
    formInputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', updatePreview);
        }
    });

    // Add next button after gallery
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer && !document.getElementById('nextPageButton')) {
        const nextBtn = document.createElement('button');
        nextBtn.id = 'nextPageButton';
        nextBtn.className = 'next-page-button';
        nextBtn.textContent = 'Continue to Feedback ➜';
        nextBtn.onclick = () => goToPage('feedback');
        galleryContainer.appendChild(nextBtn);
    }
});

function submitFeedback(event) {
    event.preventDefault();

    const name = document.getElementById('visitorName').value;
    const email = document.getElementById('visitorEmail').value;
    const message = document.getElementById('visitorMessage').value;
    const artwork = document.getElementById('favoriteArtwork').value;

    // Validate using custom modal instead of alert()
    if (!name || !email || !message) {
        showValidationError('Please fill in all required fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showValidationError('Please enter a valid email address');
        return;
    }

    // Store in localStorage
    const feedback = {
        name,
        email,
        message,
        artwork: artwork || 'Not specified',
        timestamp: new Date().toISOString()
    };

    let allFeedback = JSON.parse(localStorage.getItem('museospaceGuestbook')) || [];
    allFeedback.push(feedback);
    localStorage.setItem('museospaceGuestbook', JSON.stringify(allFeedback));

    // Show thank you modal with confetti
    showConfetti();
    openModal('thankYouModal');

    // Reset form
    document.getElementById('feedbackForm').reset();
    updatePreview();
}

function showValidationError(message) {
    document.getElementById('validationTitle').textContent = 'Validation Error';
    document.getElementById('validationMessage').textContent = message;
    openModal('validationModal');
}

// ============= MODAL FUNCTIONS =============
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// ============= CONFETTI ANIMATION =============
function showConfetti() {
    const container = document.getElementById('confettiContainer');
    container.innerHTML = '';

    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = ['var(--renaissance-light)', 'var(--abstract-primary)', 'var(--digital-neon)'][Math.floor(Math.random() * 3)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        container.appendChild(confetti);
    }
}

// ============= SPOTLIGHT EFFECT (LOBBY) =============
document.addEventListener('mousemove', (e) => {
    if (currentPage === 'lobby') {
        const spotlight = document.getElementById('spotlight');
        spotlight.classList.add('active');
        spotlight.style.left = (e.clientX - 75) + 'px';
        spotlight.style.top = (e.clientY - 75) + 'px';
    }
});

// ============= AMBIENT MODE =============
function toggleAmbient() {
    const btn = document.getElementById('ambientToggle');
    const audio = document.getElementById('ambientMusic');

    ambientMode = !ambientMode;
    btn.classList.toggle('active');

    // Note: Audio won't play without user interaction or in preview mode
    // In production, you would use a proper audio file
    if (ambientMode) {
        // Audio play attempt (may be blocked by browser)
        audio.play().catch(() => {
            console.log('Audio autoplay not allowed');
        });
    } else {
        audio.pause();
    }
}

// ============= SCROLL TRACKING FOR MINI MAP =============
document.addEventListener('scroll', () => {
    if (currentPage === 'gallery') {
        const scrollPosition = window.scrollY;
        const items = document.querySelectorAll('.mini-map-item');
        
        // Determine which room is in view
        let activeRoom = 1;
        if (scrollPosition > window.innerHeight * 2.5) activeRoom = 4;
        else if (scrollPosition > window.innerHeight * 1.8) activeRoom = 3;
        else if (scrollPosition > window.innerHeight * 0.8) activeRoom = 2;

        items.forEach((item, index) => {
            item.classList.remove('active');
            if (index + 1 === activeRoom) {
                item.classList.add('active');
            }
        });
    }
});

// ============= MINI MAP CLICK NAVIGATION =============
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('mini-map-item')) {
        const room = parseInt(e.target.dataset.room);
        const rooms = document.querySelectorAll('.gallery-room');
        if (rooms[room - 1]) {
            rooms[room - 1].scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Initialize lobby on page load
window.addEventListener('load', () => {
    goToPage('lobby');
});
