// Mobile navigation functionality
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileNav = document.getElementById('mobile-nav');
const themeToggle = document.getElementById('theme-toggle');

// Theme toggle functionality
function toggleTheme() {
const html = document.documentElement;
const icon = document.getElementById("theme-icon");
const isLight = html.getAttribute("data-theme") === "light";
html.setAttribute("data-theme", isLight ? "dark" : "light");
icon.textContent = isLight ? "☀️" : "🌙";
}

menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('show');
});

// Close mobile nav when clicking outside
mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
        mobileNav.classList.remove('show');
    }
});