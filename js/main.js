import { categorries } from "../data/categories.js";

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


// category
const categories = document.getElementById("categories");
categorries.forEach((category) => {
    categories.innerHTML += `
            <div class="rounded-xl bg-white flex items-center p-3 card group">
    <div class="rounded-xl bg-white w-16 h-16 flex justify-center items-center relative -left-9 card-img">
        <i class="${category.icon} text-3xl icon group-hover:text-white transition-all duration-300"></i>
    </div>
    <div class="w-6/12 text-left -ml-2.5 card-text">
        <h3 class="overflow-hidden text-primaryText text-ellipsis text-base font-semibold display-webkit-box line-clamp-2">
            ${category.name}
        </h3>
        <p class="overflow-hidden text-secondaryText text-ellipsis text-sm font-normal leading-[130%]">
            ${category.itemsCount} объявлений
        </p>
    </div>
    <svg class="cursor-pointer ml-auto mr-3 arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8 6L12 10L8 14" stroke="#B8BBBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</div>

    `;
});
