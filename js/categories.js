import { categories } from "../data/categories.js";

// category
const hideEl = (el, display = "block") => {
    if (display) {
      el.classList.remove(display);
    }
    el.classList.add("hidden");
  };
  
  const showEl = (el, display = "block") => {
    el.classList.remove("hidden");
    if (display) {
      el.classList.add(display);
    }
  };
  
  const getCateogryTemplate = (category, idx) => {
    return `
      <div
        class="category transition-all duration-200 rounded-xl border border-grey-4 hover:border-blue flex items-center justify-start gap-3 shadow-category py-[22px] pr-3 bg-white cursor-pointer group"
        data-index="${idx}"
        onclick="toggleDropdown(${idx})"
      >
        <div
          class="category__img border border-gray-4  shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] rounded-xl p-4 -ml-8 bg-white transition-all duration-[0.3s] group-hover:bg-blue group-hover:border-white/20"
        >
          <img src="${category.icon}" alt="${category.name}" class="w-8 h-8 icon-blue group-hover:icon-white" />
        </div>
        <div class="flex-grow pl-3 text-start">
          <h3 class="font-semibold text-base font-sans">${category.name}</h3>
          <p class="text-sm font-normal text-[#8E9297]">${category.announcementCount} объявлений</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="category__chevron transition-[transform]  duration-200">
            <path d="M8 6L12 10L8 14" stroke="#B8BBBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>  
    </div>
    `;
  };
  
  const renderCategories = () => {
    const categoriesSection = document.querySelector(".categories");
    let categoriesHTML = ''; 
    categories.forEach((category, idx) => {
      categoriesHTML += getCateogryTemplate(category, idx);
    });
    console.log('1: ', categoriesSection);
    categoriesSection.innerHTML += categoriesHTML;
  };
  
  renderCategories();
  
  const getSubcategoryTemplate = (subcategory) => {
    return `
      <a href="pages/product.html" class="flex items-center justify-between gap-3 p-3">
        <h4>${subcategory.name}</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M8.3335 6L12.3335 10L8.3335 14" stroke="#B8BBBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    `;
  };
  
  let activeIdx = null;
  
  const adjustDropdownPosition = (categoryIdx, dropdownContainer) => {
    const activeRow = Math.floor(categoryIdx / 3) + 2; 
    dropdownContainer.style.gridRow = activeRow;
  };
  
  const toggleDropdownVisibility = (categoryIdx, dropdownContainer) => {
    if (dropdownContainer.classList.contains("hidden")) {
      showEl(dropdownContainer, "grid");
    } else if (activeIdx === categoryIdx) {
      hideEl(dropdownContainer, "grid");
    }
  };
  
  const renderSubcategories = (subcategories, dropdownContainer) => {
    dropdownContainer.innerHTML = subcategories
      ? subcategories.map(getSubcategoryTemplate).join("")
      : "No subcategories available.";
  };
  
  const toggleCategoryActive = (categoryIdx) => {
    const categories = document.querySelectorAll(".categories .category");
    categories.forEach((c) => c.classList.remove("active"));
    if (activeIdx === categoryIdx) {
      categories[categoryIdx].classList.remove("active");
    } else {
      categories[categoryIdx].classList.toggle("active");
    }
  };
  
  window.toggleDropdown = (categoryIdx) => {
      const subcategories = categories[categoryIdx].subcategories;
      const dropdownContainer = document.querySelector(".subcategories-dropdown");
      console.log('hello', dropdownContainer);
  
    adjustDropdownPosition(categoryIdx, dropdownContainer);
    toggleDropdownVisibility(categoryIdx, dropdownContainer);
    toggleCategoryActive(categoryIdx);
    renderSubcategories(subcategories, dropdownContainer);
  
    activeIdx = categoryIdx;
  };
  