// import "./login.js"

const languageBtn = document.getElementById('languageBtn');
const dropdown = document.getElementById('dropdown');
const arrowIcon = document.getElementById('arrowIcon');
const selectedFlag = document.getElementById('selectedFlag');
const selectedLang = document.getElementById('selectedLang');

// Toggle dropdown menu
languageBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
    arrowIcon.classList.toggle('rotate-180'); // Rotate the icon 180 degrees
});

// Close dropdown when clicked outside
window.addEventListener('click', (e) => {
    if (!languageBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
        arrowIcon.classList.remove('rotate-180');
    }
});

// Change selected language when clicked
dropdown.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = item.getAttribute('data-lang');
        const flag = item.getAttribute('data-flag');

        selectedLang.textContent = lang;
        selectedFlag.src = flag;

        dropdown.classList.add('hidden');
        arrowIcon.classList.remove('rotate-180'); // Reset arrow after selection
    });
});

