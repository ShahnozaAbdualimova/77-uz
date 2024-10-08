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

const categorries = [
    {
        name: "Для женщин",
        itemsCount: "4 147",
        icon: "icon-icon-1",
    },
    {
        name: "Красота",
        itemsCount: "574",
        icon: "icon-icon-2",
    },
    {
        name: "Бытовая техника",
        itemsCount: "547",
        icon: "icon-icon-3",
    },
    {
        name: "Для мужчин",
        itemsCount: "547",
        icon: "icon-icon-4",
    },
    {
        name: "Здоровье",
        itemsCount: "684",
        icon: "icon-icon-5",
    },
    {
        name: "Электроника",
        itemsCount: "4 147",
        icon: "icon-icon-6",
    },
    {
        name: "Детские товары",
        itemsCount: "635",
        icon: "icon-icon-7",
    },
    {
        name: "Украшения и бижутерия",
        itemsCount: "4 147",
        icon: "icon-icon-8",
    },
    {
        name: "Домашняя утварь",
        itemsCount: "4 147",
        icon: "icon-icon-9",
    },
    {
        name: "Обувь",
        itemsCount: "684",
        icon: "icon-icon-10",
    },
    {
        name: "Канцелярия",
        itemsCount: "101",
        icon: "icon-icon-11",
    },
    {
        name: "Спорт и отдых",
        itemsCount: "741",
        icon: "icon-icon-12",
    },
    {
        name: "Автотовары",
        itemsCount: "63",
        icon: "icon-icon-13",
    },
    {
        name: "Новые легковые автомобили",
        itemsCount: "847",
        icon: "icon-icon-14",
    },
    {
        name: "Мототранспорт",
        itemsCount: "4 147",
        icon: "icon-icon-15",
    },
    {
        name: "Дача, сады и огороды",
        itemsCount: "847",
        icon: "icon-icon-16",
    },
    {
        name: "Личная гигиена",
        itemsCount: "741",
        icon: "icon-icon-17",
    },
    {
        name: "Аксессуарлар",
        itemsCount: "574",
        icon: "icon-icon-18",
    },
    {
        name: "Бытовая химия и личная гигиена",
        itemsCount: "101",
        icon: "icon-icon-19",
    },
    {
        name: "Строительство и ремонт",
        itemsCount: "4 147",
        icon: "icon-icon-20",
    },
    {
        name: "Сумки и чемоданы",
        itemsCount: "4 147",
        icon: "icon-icon-21",
    },
];

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
