# MuseoSpace - Virtual Art Exhibition Platform

A cinematic, immersive virtual museum experience showcasing four distinct art movements through an interactive web gallery. Built with vanilla HTML, CSS, and JavaScript—no frameworks, no build steps.

## Overview

MuseoSpace is a web-based art exhibition platform that takes visitors on a curated journey through four beautifully designed gallery rooms:

1. **The Renaissance Hall** - Classical masterpieces celebrating the rebirth of detail
2. **Abstract Explosion** - Vibrant, expressive artworks exploring color and form
3. **Modern Surrealism** - Dream-like, imaginative pieces from the surrealist movement
4. **Digital Future** - Cyberpunk-inspired digital and technological art

## Features

### Interactive Gallery Experience
- **4 Immersive Rooms** - Each with unique visual identity, color palette, and atmospheric design
- **12 Curated Artworks** - 3 pieces per room with rich metadata and descriptions
- **Artwork Details Modal** - Glassmorphism design with zoom effects and curator notes
- **Related Artworks Carousel** - Discover similar pieces within each collection

### User Engagement
- **Cinematic Lobby** - Welcome screen with cursor spotlight effect and pulsing button animation
- **Favorite System** - Save your favorite artworks with localStorage persistence
- **Visitor Feedback Form** - Share thoughts with live preview panel and email validation
- **Confetti Celebration** - Delightful animation on successful feedback submission

### Design & UX
- **Mini-Map Navigation** - Track your position through the gallery rooms
- **Smooth Transitions** - Seamless page-to-page navigation
- **Ambient Mode** - Optional atmospheric audio toggle on the lobby
- **Fully Responsive** - Mobile, tablet, and desktop optimized layouts

### Technical Highlights
- **No Dependencies** - Pure HTML, CSS, and JavaScript
- **Browser Storage** - localStorage for favorites and guestbook entries
- **Custom Modals** - Professional validation and thank-you dialogs (no browser alerts)
- **Accessibility** - Semantic HTML, ARIA attributes, and screen reader friendly

## Project Structure

\`\`\`
museo-space/
├── index.html          # Main HTML file with all 4 pages and modals
├── styles.css          # Comprehensive styling, animations, and theme systems
├── script.js           # JavaScript for interactivity, navigation, and localStorage
└── public/             # Artwork images (12 total)
    ├── renaissance-*.jpg
    ├── abstract-*.jpg
    ├── surrealism-*.jpg
    └── digital-*.jpg
\`\`\`

## Getting Started

### Quick Start (Local File)
1. Download or clone this repository
2. Open `index.html` directly in your web browser
3. Click "Start The Tour" to begin exploring


### Exploring the Exhibition

1. **Lobby Page** - Enter the museum and set your mood with ambient audio
2. **Gallery** - Scroll through 4 rooms, each with 3 artworks
3. **Artwork Details** - Click any artwork to view full metadata and add to favorites
4. **Feedback** - Share your experience in the final form with favorite artwork dropdown
5. **Submit** - Enjoy confetti celebration and see your message in the guestbook

### Features to Try

- Click artworks to see detailed information and zoom effects
- Add artworks to favorites (persists in browser)
- View related artworks in the carousel
- Use the mini-map to navigate between rooms
- Fill out the feedback form to join the guestbook
- Toggle ambient music on the lobby page

