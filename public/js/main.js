// =====================
// MOBILE MENU TOGGLE
// =====================

const hamburger = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');
const header = document.querySelector('.site-header');
const navLinks = document.querySelectorAll('.main-nav a');
const langButtons = document.querySelectorAll('.lang-switcher button');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mainNav.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (mainNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Function to close mobile menu
function closeMobileMenu() {
    hamburger.classList.remove('active');
    mainNav.classList.remove('active');
    document.body.style.overflow = '';
}

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu when clicking on a language button (both desktop and mobile)
langButtons.forEach(button => {
    button.addEventListener('click', function () {
        // First close the mobile menu
        closeMobileMenu();

        // Then load the language (your existing loadLanguage function)
        // Note: You'll need to extract the language code from the button
        const lang = this.textContent.slice(0, 2).toLowerCase();
        if (loadLanguage) {
            loadLanguage(lang);
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mainNav.contains(e.target)) {
        closeMobileMenu();
    }
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        closeMobileMenu();
    }
});

// =====================
// HEADER VISIBILITY
// =====================

function handleHeaderVisibility() {
    // Check if we're on mobile (less than or equal to 1300px as defined in your CSS)
    const isMobile = window.innerWidth <= 1300;

    // Don't hide header if menu is open
    if (mainNav.classList.contains('active')) {
        header.classList.remove('hide-on-scroll');
        return;
    }

    if (isMobile) {
        // On mobile: show header only at the top of the page
        if (window.scrollY === 0) {
            header.classList.remove('hide-on-scroll');
        } else {
            header.classList.add('hide-on-scroll');
        }
    } else {
        // On desktop: always show the header (remove hide-on-scroll)
        header.classList.remove('hide-on-scroll');
    }
}

// Initial check
window.addEventListener('load', handleHeaderVisibility);
// Check on scroll
window.addEventListener('scroll', handleHeaderVisibility);
// Check on window resize
window.addEventListener('resize', handleHeaderVisibility);