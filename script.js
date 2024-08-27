// Dark Mode Toggle
function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const isDark = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDark);
    navbar.classList.toggle('navbar-dark', isDark);
    navbar.classList.toggle('navbar-light', !isDark);
}

// Sample product data
const products = [
    'Laptop',
    'Smartphone',
    'Headphones',
    'Camera',
    'Smartwatch',
    'Tablet',
    'Bluetooth Speaker'
];

function showResults() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const results = products.filter(product => product.toLowerCase().includes(input));
    const searchResults = document.getElementById('searchResults');

    searchResults.innerHTML = results.map(result => `<div>${result}</div>`).join('');

    if (!input) {
        searchResults.innerHTML = '';
    }
}

// Initialize Bootstrap carousel with auto slide
const carousel = document.querySelector('#heroCarousel');
const bootstrapCarousel = new bootstrap.Carousel(carousel, {
    interval: 5000,  // Slide interval in milliseconds
    wrap: true,      // Allows to loop through slides
    pause: false     // Disable pause on hover
});

// Dark/Light Mode Toggle Button
const toggleBtn = document.querySelector('#toggleMode');
let isDarkMode = false;

toggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    toggleBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    toggleBtn.classList.toggle('light', !isDarkMode);
});





// Dark/Light Mode Toggle
document.getElementById('toggleMode').addEventListener('click', () => {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDarkMode);
    const toggleBtn = document.getElementById('toggleMode');
    toggleBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    toggleBtn.classList.toggle('light', !isDarkMode);
});



document.addEventListener('DOMContentLoaded', function() {
    const carousel = new bootstrap.Carousel(document.getElementById('popularProductsCarousel'));
});
