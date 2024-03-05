const Home = document.getElementById('Home');
const About = document.getElementById('About');

const navbar = document.getElementById('stickyNav');
const mobileMenu = document.querySelector('.mobile-menu');

const observerOptions = {
    threshold: 0 // Adjust the threshold based on your preference
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.target === Home) {
            if (entry.isIntersecting) {
                navbar.classList.add('light-navbar');
                navbar.classList.remove('dark-navbar');
                mobileMenu.classList.remove('dark-navbar');
                mobileMenu.classList.add('light-navbar');
            } else {
                navbar.classList.remove('light-navbar');
                navbar.classList.add('dark-navbar');
                mobileMenu.classList.add('dark-navbar');
                mobileMenu.classList.remove('light-navbar');
            }
        } else if (entry.target === About) {
            if (entry.isIntersecting) {
                navbar.classList.remove('dark-navbar');
                navbar.classList.add('light-navbar');
                mobileMenu.classList.add('light-navbar');
                mobileMenu.classList.remove('dark-navbar');
            } else {
                navbar.classList.add('dark-navbar');
                navbar.classList.remove('light-navbar');
                mobileMenu.classList.remove('light-navbar');
                mobileMenu.classList.add('dark-navbar');
            }
        }
    });
}, observerOptions);

observer.observe(Home);
observer.observe(About);