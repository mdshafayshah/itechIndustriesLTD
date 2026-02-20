let timeout;

const servicesLink = document.querySelector('#services-link');
const dropdownMenu = document.querySelector('#dropdown-menu');

// Show dropdown when mouse enters Services link
servicesLink.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    dropdownMenu.classList.add('show');
});

// Start timer when mouse leaves Services link
servicesLink.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        dropdownMenu.classList.remove('show');
    }, 300);
});

// Keep dropdown open when mouse enters dropdown menu
dropdownMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
});

// Hide dropdown when mouse leaves dropdown menu
dropdownMenu.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        dropdownMenu.classList.remove('show');
    }, 300);
});

// Load services page on click
servicesLink.addEventListener('click', () => {
    window.location.href = 'services.html';
});