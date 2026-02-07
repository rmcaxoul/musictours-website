const header = document.querySelector('.site-header');

function handleHeaderVisibility() {
    // Check if we're on mobile (less than or equal to 1300px as defined in your CSS)
    const isMobile = window.innerWidth <= 1300;

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