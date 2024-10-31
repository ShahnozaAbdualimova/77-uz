const regions = [
  {
    name: "г.Ташкент",
    cities: [
      "Алмазарский район",
      "Бектемирский район",
      "Мирабадский район",
      "Мирзо-Улугбекский район",
      "Сергелийский район",
      "Учтепинский район",
      "Чиланзарский район",
      "Шайхантахурский район",
      "Юнусабадский район",
      "Яккасарайский район",
      "Янгихаётский район",
      "Яшнабадский район",
    ],
  },
  {
    name: "Республика Каракалпакстан",
    cities: [
      "Нукус",
      "Амударьинский",
      "Берунийский",
      "Бозатауский",
      "Канлыкульский",
      "Караузякский",
      "Кегейлийский",
      "Кунградский",
      "Муйнакский",
      "Нукусский",
      "Тахиаташский",
      "Тахтакупырский",
      "Турткульский",
      "Ходжейлийский",
      "Чимбайский",
      "Шуманайский",
      "Элликкалинский",
    ],
  },
  {
    name: "Андижанская область",
    cities: [
      "Андижан",
      "Ханабад",
      "Алтынкульский район",
      "Андижанский район",
      "Асакинский район",
      "Балыкчинский район",
      "Бустанский район",
      "Булакбашинский район",
      "Джалакудукский район",
      "Избасканский район",
      "Кургантепинский район",
      "Мархаматский район",
      "Пахтаабадский район",
      "Улугнорский район",
      "Ходжаабадский район",
      "Шахриханский район",
    ],
  },
  {
    name: "Бухарская область",
    cities: ["Алатский район", "Каган", "Гиждуван"],
  },
  {
    name: "Джизакская область",
    cities: [],
  },
  { name: "Кашкадарьинская область", cities: ["Карши", "Шахрисабз", "Китоб"] },
  { name: "Навоийская область", cities:[]  },
];

const regionName = document.getElementById("region-name");
const regionBtn = document.getElementById("region-btn");
const regionsContent = document.getElementById("region-content");

const cityName = document.getElementById("city-name");
const cityBtn = document.getElementById("city-btn");
const citiesContent = document.getElementById("city-content");

cityBtn.disabled = true;

regions.forEach((region) => {
  const li = document.createElement("li");
  li.textContent = region.name;
  li.classList.add(
    "flex",
    "p-3",
    "cursor-pointer",
    "hover:text-blue-500",
    "border-b",
    "text-sm",
    "font-medium"
  );

  li.addEventListener("click", () => {
    regionName.textContent = `${region.name}`;
    regionsContent.classList.add("hidden");

    updateCities(region.cities);
    cityBtn.disabled = false; 
  });

  regionsContent.appendChild(li);
});

function updateCities(cities) {
  citiesContent.innerHTML = "";

  cities.forEach((city) => {
    const cityLi = document.createElement("li");
    cityLi.textContent = city;
    cityLi.classList.add(
      "flex",
      "p-3",
      "cursor-pointer",
      "hover:text-blue-500",
      "border-b",
      "text-sm",
      "font-medium"
    );

    cityLi.addEventListener("click", () => {
      cityName.textContent = `${city}`;
      citiesContent.classList.add("hidden");
    });

    citiesContent.appendChild(cityLi);
  });
}

regionBtn.addEventListener("click", () => {
  regionsContent.classList.toggle("hidden");
});

cityBtn.addEventListener("click", () => {
  if (!cityBtn.disabled) {
    citiesContent.classList.toggle("hidden");
  }
});
