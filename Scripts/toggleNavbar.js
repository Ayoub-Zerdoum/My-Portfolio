const navbar = document.getElementById('stickyNav');

// Toggle the mobile menu on hamburger icon click
const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});