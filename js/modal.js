const search = document.getElementById("search");
const modal = document.getElementById("modal");

// dynamic data
const modalItems = [
  { name: "Холодильники" },
  { name: "Телевизоры" },
  { name: "Наушники и аксессуары" },
  { name: "Кухонная мебель" },
  { name: "Телефоны" },
  { name: "Бытовая техника" },
  { name: "Микроволновки" },
  { name: "Аккумуляторы" },
];

function createModalContent(searchText = "") {
  let modalContent = `
        <div class="top-0 left-0 w-full h-full absolute bg-black/50 z-10" id="back">
            <div class="w-[580px] h-80 pt-4 bg-white relative top-[6.2%] left-[50%] -translate-x-[50%] rounded-xl overflow-y-scroll">
                <p class="text-left text-sm text-[#8E9297] font-medium pl-3 pb-2">История поиска</p>
    `;

  modalItems.forEach((item) => {
    let highlightedName = item.name;
    if (searchText) {
      const regex = new RegExp(searchText, "gi");
      highlightedName = item.name.replace(
        regex,
        (match) =>
          `<span style="background-color: rgb(255, 174, 0);">${match}</span>`
      );
    }

    modalContent += `
            <div onclick="event.stopPropagation()" class="flex items-center justify-between  h-[52px] py-4 px-3 hover:bg-[#F0F3F7] transition-all duration-300 hover:cursor-pointer last:rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.579 2.26159C9.75114 1.9128 10.2485 1.9128 10.4206 2.26159L12.649 6.77669C12.7173 6.9152 12.8495 7.0112 13.0023 7.03341L17.985 7.75744C18.3699 7.81337 18.5236 8.28639 18.2451 8.55788L14.6396 12.0724C14.529 12.1802 14.4785 12.3355 14.5046 12.4878L15.3558 17.4504C15.4215 17.8337 15.0191 18.126 14.6749 17.9451L10.2182 15.602C10.0815 15.5302 9.91815 15.5302 9.78144 15.602L5.32477 17.9451C4.98049 18.126 4.57812 17.8337 4.64387 17.4504L5.49502 12.4878C5.52113 12.3355 5.47066 12.1802 5.36006 12.0724L1.75453 8.55788C1.47601 8.28639 1.6297 7.81337 2.01461 7.75744L6.99733 7.03341C7.15017 7.0112 7.28231 6.9152 7.35066 6.77669L9.579 2.26159Z" stroke="#FAAC36" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
                <p class="text-[#16191D] text-base font-medium text-left pl-2.5 w-full">${highlightedName}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.5999 7.19995L14.3999 12L9.5999 16.8" stroke="#B8BBBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <hr class="last:hidden">
        `;
  });

  modalContent += `
            </div>
        </div>
    `;

  return modalContent;
}

search.addEventListener("click", () => {
  modal.innerHTML = createModalContent();
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  let back = document.getElementById("back");
  back.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.innerHTML = "";
    document.body.style.overflow = "auto";
  });
});

search.addEventListener("input", () => {
  const searchText = search.value.trim();
  if (modal.classList.contains("hidden")) {
    modal.innerHTML = createModalContent(searchText);
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    modal.innerHTML = createModalContent(searchText);
  }
});

search.addEventListener("click", () => {
  modal.innerHTML = createModalContent();
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  let back = document.getElementById("back");
  back.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.innerHTML = "";
    document.body.style.overflow = "auto";
  });
});
