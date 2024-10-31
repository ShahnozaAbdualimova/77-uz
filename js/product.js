const productEl = [
  {
    image: "/images/images/products/image-1.jpg",
    location: "г. Ташкент",
    title: "Кепки Corneliani Diamond for him edition.",
    price: "2 599 000",
    currency: "UZS",
  },
  {
    image: "/images/images/products/image-2.jpg",
    location: "г. Самарканд",
    title: "Chevrolet Onix 1.2 Turbo в наличии",
    price: "204 000 000",
    currency: "UZS",
  },
  {
    image: "/images/images/products/image-3.jpg",
    location: "г. Ташкент",
    title: "7Saber Trucker Cap",
    price: "280 000",
    currency: "UZS",
  },
  {
    image: "/images/images/products/image-4.jpg",
    location: "г. Ташкент",
    title: "Оригинальные кроссовки Nike Air Max Plus",
    price: "4 820 000",
    currency: "UZS",
  },
  {
    image: "/images/images/products/image-5.jpg",
    location: "г. Ташкент",
    title: "Оригинальные кроссовки Nike Air Max 97",
    price: "4 820 000",
    currency: "UZS",
  },
  {
    image: "/images/images/products/image-6.jpg",
    location: "г. Ташкент",
    title: "Apple Watch Series 8 - USA Non active",
    price: "4 500 000",
    currency: "UZS",
  },
  {
    image: "/images/images/products/image-7.jpg",
    location: "г. Самарканд",
    title: "Лучший кроссовер Geely Monjaro Limited Edition",
    price: "320 000 000",
    currency: "UZS",
  },
  {
    image: "/images/images/products/image-8.jpg",
    location: "г. Ташкент",
    title: "Стайлер для волос Dyson airwrap complete long",
    price: "500",
    currency: "USD",
  },
  {
    image: "/images/images/products/image-3.jpg",
    location: "г. Ташкент",
    title: "7Saber Trucker Cap",
    price: "280 000",
    currency: "UZS",
  },
  {
    image: "/images/images/products/image-4.jpg",
    location: "г. Ташкент",
    title: "Оригинальные кроссовки Nike Air Max Plus",
    price: "4 820 000",
    currency: "UZS",
  },
  {
    image: "/images/images/products/image-2.jpg",
    location: "г. Самарканд",
    title: "Chevrolet Onix 1.2 Turbo в наличии",
    price: "204 000 000",
    currency: "UZS",
  },
  {
    image: "/images/images/products/image-1.jpg",
    location: "г. Ташкент",
    title: "Кепки Corneliani Diamond for him edition.",
    price: "2 599 000",
    currency: "UZS",
  },
];

// products
const productsF = document.getElementById("products");
productEl.forEach((product) => {
  productsF.innerHTML += `
                <div class="col-span-1 cursor-pointer flex flex-col items-center gap-5 max-md:gap-0 rounded-xl border border-white bg-white shadow-product group second transition-all duration-300 hover:shadow-lg">
                <div class="relative overflow-hidden w-full">
                <img class="rounded-tl-xl rounded-tr-xl w-full" src=${product.image} alt="">
                <svg class="absolute top-2 left-2 max-md:w-5 max-md:h-5" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M33.2036 23.3306C33.596 22.942 33.5991 22.3088 33.2104 21.9164C32.8218 21.524 32.1886 21.521 31.7962 21.9096L33.2036 23.3306ZM19.9999 35.0001L19.2962 35.7106C19.686 36.0966 20.3139 36.0966 20.7036 35.7106L19.9999 35.0001ZM8.20361 21.9096C7.81121 21.521 7.17805 21.524 6.78941 21.9164C6.40078 22.3088 6.40383 22.942 6.79624 23.3306L8.20361 21.9096ZM6.80252 23.3368C7.19834 23.722 7.83144 23.7133 8.2166 23.3175C8.60177 22.9217 8.59314 22.2886 8.19732 21.9034L6.80252 23.3368ZM19.9999 11.6768L19.1973 12.2733C19.3854 12.5264 19.6818 12.6759 19.9971 12.6768C20.3124 12.6777 20.6097 12.5298 20.7992 12.2778L19.9999 11.6768ZM31.7992 21.9167C31.4052 22.3037 31.3995 22.9368 31.7865 23.3309C32.1735 23.7249 32.8066 23.7305 33.2007 23.3435L31.7992 21.9167ZM31.7962 21.9096L19.2962 34.2896L20.7036 35.7106L33.2036 23.3306L31.7962 21.9096ZM20.7036 34.2896L8.20361 21.9096L6.79624 23.3306L19.2962 35.7106L20.7036 34.2896ZM8.19732 21.9034C6.21923 19.9786 5.48946 17.106 6.30896 14.4704L4.39915 13.8766C3.35615 17.231 4.28495 20.887 6.80252 23.3368L8.19732 21.9034ZM6.30896 14.4704C7.12846 11.8348 9.35842 9.88256 12.0792 9.41873L11.7431 7.44717C8.28028 8.0375 5.44215 10.5222 4.39915 13.8766L6.30896 14.4704ZM12.0792 9.41873C14.8001 8.9549 17.5509 10.0581 19.1973 12.2733L20.8025 11.0803C18.7071 8.26087 15.206 6.85685 11.7431 7.44717L12.0792 9.41873ZM20.7992 12.2778C22.4525 10.0789 25.1975 8.9904 27.9084 9.45856L28.2488 7.48773C24.7985 6.89189 21.3049 8.27728 19.2007 11.0758L20.7992 12.2778ZM27.9084 9.45856C30.6194 9.92672 32.8403 11.8728 33.6604 14.4988L35.5694 13.9026C34.5257 10.5604 31.6991 8.08358 28.2488 7.48773L27.9084 9.45856ZM33.6604 14.4988C34.4805 17.1248 33.7619 19.9889 31.7992 21.9167L33.2007 23.3435C35.6986 20.89 36.6132 17.2448 35.5694 13.9026L33.6604 14.4988Z" fill="white"/>
                </svg>
                </div>
                <div class="mt-5 p-5 w-full max-md:mt-2 max-md:p-2">
                <p class="inline-flex text-left py-1 px-2 items-start gap-2.5 rounded-md bg-[#EAEDF0] text-sm max-md:text-[10px]">${product.location}</p>
                <h3 class="overflow-hidden  text-black-100 text-ellipsis text-lg font-semibold max-md:text-sm mt-4 max-md:mt-2 group-hover:text-[#388FF3] transition-all duration-300">${product.title}</h3>
                <time class="text-[#8E9297] text-sm mt-2">Вчера, 19:20</time>
                <br>

                <a href="tel:+998712007007" class="overflow-hidden text-[#8E9297] text-ellipsis text-base font-semibold">+998 71 200 70 07</a>
                <h3 class="text-black-100 text-2xl text-bold mt-2 max-md:text-base">${product.price}
                    <span class="text-[#388FF3] text-base font-medium max-md:text-xs">${product.currency}</span>
                </h3>
                </div>
            </div>
            
        `;
});

const productsEl = document.getElementById("products");

productEl.forEach((product) => {
  productsEl.innerHTML += `
    <div class="col-span-3 h-[140px] max-md:h-auto  cursor-pointer gap-2 hidden max-md:hidden items-center rounded-xl border border-white bg-white shadow-product group first transition-all duration-300 hover:shadow-md">
      <div class="relative overflow-hidden w-3/12 max-md:w-full h-full object-fill">
        <img class="rounded-xl w-full h-full object-fill" src="${product.image}" alt="">
        <svg class="absolute top-1.5 left-1.5" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
            <path d="M33.2036 23.3306C33.596 22.942 33.5991 22.3088 33.2104 21.9164C32.8218 21.524 32.1886 21.521 31.7962 21.9096L33.2036 23.3306ZM19.9999 35.0001L19.2962 35.7106C19.686 36.0966 20.3139 36.0966 20.7036 35.7106L19.9999 35.0001ZM8.20361 21.9096C7.81121 21.521 7.17805 21.524 6.78941 21.9164C6.40078 22.3088 6.40383 22.942 6.79624 23.3306L8.20361 21.9096ZM6.80252 23.3368C7.19834 23.722 7.83144 23.7133 8.2166 23.3175C8.60177 22.9217 8.59314 22.2886 8.19732 21.9034L6.80252 23.3368ZM19.9999 11.6768L19.1973 12.2733C19.3854 12.5264 19.6818 12.6759 19.9971 12.6768C20.3124 12.6777 20.6097 12.5298 20.7992 12.2778L19.9999 11.6768ZM31.7992 21.9167C31.4052 22.3037 31.3995 22.9368 31.7865 23.3309C32.1735 23.7249 32.8066 23.7305 33.2007 23.3435L31.7992 21.9167ZM31.7962 21.9096L19.2962 34.2896L20.7036 35.7106L33.2036 23.3306L31.7962 21.9096ZM20.7036 34.2896L8.20361 21.9096L6.79624 23.3306L19.2962 35.7106L20.7036 34.2896ZM8.19732 21.9034C6.21923 19.9786 5.48946 17.106 6.30896 14.4704L4.39915 13.8766C3.35615 17.231 4.28495 20.887 6.80252 23.3368L8.19732 21.9034ZM6.30896 14.4704C7.12846 11.8348 9.35842 9.88256 12.0792 9.41873L11.7431 7.44717C8.28028 8.0375 5.44215 10.5222 4.39915 13.8766L6.30896 14.4704ZM12.0792 9.41873C14.8001 8.9549 17.5509 10.0581 19.1973 12.2733L20.8025 11.0803C18.7071 8.26087 15.206 6.85685 11.7431 7.44717L12.0792 9.41873ZM20.7992 12.2778C22.4525 10.0789 25.1975 8.9904 27.9084 9.45856L28.2488 7.48773C24.7985 6.89189 21.3049 8.27728 19.2007 11.0758L20.7992 12.2778ZM27.9084 9.45856C30.6194 9.92672 32.8403 11.8728 33.6604 14.4988L35.5694 13.9026C34.5257 10.5604 31.6991 8.08358 28.2488 7.48773L27.9084 9.45856ZM33.6604 14.4988C34.4805 17.1248 33.7619 19.9889 31.7992 21.9167L33.2007 23.3435C35.6986 20.89 36.6132 17.2448 35.5694 13.9026L33.6604 14.4988Z" fill="white"/>
        </svg>
      </div>
      <div class="px-5 w-full h-full max-md:p-2">
        <div class="flex justify-between items-center max-md:flex-col-reverse max-md:items-start">
            <h3 class="overflow-hidden text-black-100 text-ellipsis text-lg font-semibold mt-3 group-hover:text-[#388FF3] transition-all duration-300 max-md:text-sm max-md:mt-2">${product.title}</h3>
            <p class="inline-flex text-left h-max py-1 px-2 items-start mt-2 gap-2.5 rounded-md bg-[#EAEDF0] max-md:text-[10px] max-md:mt-2">${product.location}</p>
        </div>
        <div class="flex flex-col max-md:flex-col-reverse mt-8">
            <h3 class="text-black-100 text-2xl text-bold leading-8  max-md:mt-auto max-md:text-base">${product.price}
            <span class="text-[#388FF3] text-base font-medium max-md:text-xs">${product.currency}</span>
        </h3>
        <div class="flex justify-between max-md:flex-col max-md:mt-0">
            <time class="text-[#8E9297] text-sm mt-2 max-md:mt-auto">Вчера, 19:20</time>  
            <a href="tel:+998712007007" class="overflow-hidden text-[#8E9297] text-ellipsis text-base font-semibold max-md:xs">+998 71 200 70 07</a>
        </div>
        </div>
      </div>
    </div>
  `;
});

const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");

const content1 = document.querySelectorAll(".first");
const content2 = document.querySelectorAll(".second");

const cardsPerPage = 8;
let currentPage = 1;

function displayCards(page) {
  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;

  content1.forEach((card, index) => {
    card.style.display = index >= start && index < end ? "flex" : "none";
  });
}

function setupPagination() {
  const totalPages = Math.ceil(content1.length / cardsPerPage);
  const paginationContainer = document.getElementById("pagination");

  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.add("page-button");
    button.addEventListener("click", () => {
      currentPage = i;
      displayCards(currentPage);
    });

    paginationContainer.appendChild(button);
  }
}
displayCards(currentPage);
setupPagination();
btn1.addEventListener("click", () => {
  content1.forEach((card) => (card.style.display = "flex"));
  displayCards(currentPage);
  setupPagination();
  content2.forEach((card) => (card.style.display = "none"));
  paginationContainer.style.display = "block";
});

btn2.addEventListener("click", () => {
  content2.forEach((card) => (card.style.display = "flex"));
  content1.forEach((card) => (card.style.display = "none"));
});
