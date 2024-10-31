const headerTemplate = `
<!-- Header -->
<header class="border-b border-grey_4 bg-white/[0.92] backdrop-blur-lg w-full px-[30px] max-md:px-2 h-20 flex z-30">
    <div class="container mx-auto inline-flex justify-between items-center relative max-md:w-full">
        <nav>
            <ul class="inline-flex gap-x-6 items-center justify-between max-md:gap-x-2">
                <li>
                    <div class="relative inline-block text-left">
                        <!-- Button -->
                        <button id="languageBtn"
                            class="inline-flex items-center justify-center px-4  bg-white text-gray-700 w-[170px] max-sm:w-auto max-[500px]:float-left">
                            <img id="selectedFlag" src="/images/icons/header/uz.svg" alt="Flag"
                                class="w-5 h-5 mr-2 inline-block">
                            <span id="selectedLang" class="max-md:hidden block">O'zbekcha</span>
                            <span id="selectedLang" class="max-md:block hidden">O'z</span>
                            <img id="arrowIcon" src="/images/icons/header/lang.svg" alt="">
                        </button>

                        <!-- Dropdown Menu -->
                        <div id="dropdown"
                            class="hidden absolute ml-7 pl-4 flex-col justify-center items-end rounded-lg bg-white border border-7xl max-md:pl-4">
                            <div>
                                <a href="#" data-lang="Русский" data-flag="/images/icons/header/ru.svg"
                                    class="inline-flex items-center gap-2 text-gray-700 max-md:pr-[10px] pr-[45px] py-[11px]">
                                    <img src="/images/icons/header/ru.svg" alt="Russian Flag" class="w-5 h-5">
                                    <span class="max-md:hidden block">Русский</span>
                                    <span class="max-md:block hidden">Ру</span>
                                </a>
                                <div class="w-[103px] h-[1px] bg-[#F0F3F7] rounded absolute right-0"></div>
                                <a href="#" data-lang="O'zbekcha" data-flag="/images/icons/header/uz.svg"
                                    class="inline-flex items-center gap-2 text-gray-700 max-md:pr-[10px] pr-[45px] py-[11px]">
                                    <img src="/images/icons/header/uz.svg" alt="Uzbek Flag" class="w-5 h-5">
                                    <span class="max-md:hidden block">O'zbekcha</span>
                                    <span class="max-md:block hidden">O'z</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </li>
                <li>
                    <a href="tel:+998712007007"
                        class="text-[#16191D] duration-300 hover:text-blue-500 text-sm font-medium inline-flex gap-1 max-lg:hidden">
                        <img src="/images/icons/header/phone.svg" alt="">
                        +998 71 200 70 07
                    </a>
                </li>
            </ul>
        </nav>
        <a href="/index.html"
            class="flex w-[170px] h-[100px] p-[14px_16px]  justify-center items-center rounded-b-[20px] border-x border-b border-grey_4 bg-white shadow-3xl absolute left-[50%] translate-x-[-50%]">
            <img src="/images/images/logo.svg" alt="">
        </a>
        <nav>
            <ul class="inline-flex items-center">
                <li>
                    <a href="" class="flex items-center gap-2  text-sm font-semibold text-black-100">
                        <img src="/images/icons/header/heart.svg" alt="">
                        <span class="max-md:hidden duration-300 hover:text-blue-500">Избранные</span>
                    </a>
                </li>
                <div class="h-8 w-[1px] bg-[#F0F3F7] mx-4 max-sm:mx-2"></div>
                <li>
                    <button
                        class="flex items-center justify-center py-2.5 px-6 max-sm:px-3 gap-2 rounded-lg bg-[#F0F3F7] duration-300 hover:bg-slate-300"
                        id="loginBtn">
                        <span class="max-md:hidden">Войти</span>
                        <img src="/images/icons/header/login.svg" alt="">
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</header>

   <!-- Modals -->
    <!-- Login Modal -->
    <div id="loginModal" class="modal hidden">
        <div class="top-0 left-0 w-full h-screen bg-black-50 z-40">
            <div
                class="bg-white rounded-2xl p-5 w-[400px] relative top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-30">
                <div class="flex justify-between">
                    <h2 class="text-black-100 text-2xl font-semibold leading-8">Добро пожаловать!</h2>
                    <svg id="closeLoginModal" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <p class="text-grey-400 text-sm font-medium leading-5 mt-2">Войти в систему чтобы торговать
                    в системе</p>
                <form id="loginForm" class="mt-7" name="frm">
                    <label for="login" class="text-grey-100 text-sm font-medium leading-5">Логин</label>
                    <input
                        class="w-full rounded-lg bg-[#F0F3F7] mt-2 mb-4 p-3 focus:outline-blue-100 required:outline-red-700"
                        type="text" id="login" name="login" placeholder="Введите логин" required>

                    <label for="password" class="text-grey-100 text-sm font-medium leading-5">Пароль</label>
                    <input type="password" name="login"
                        class="w-full my-2 rounded-lg bg-[#F0F3F7] p-3 focus:outline-blue-100 required:outline-red-700"
                        id="password" placeholder="Введите пароль" required>
                    <a href="#" class="text-blue-100 text-xs leading-4 font-normal" id="forgetPassword">Забыли
                        пароль?</a>
                    <button type="submit" onclick="return IsEmpty();"
                        class="mt-16 bg-blue-100 text-white py-3 w-full rounded-lg">Войти</button>

                    <div class="flex justify-between items-center mt-3">
                        <span class="h-[1px] w-3/12 bg-grey-400"></span>
                        <span class="text-grey-400 text-xs leading-4 ">Хотите стать продавцом?</span>
                        <span class="h-[1px] w-3/12 bg-grey-400"></span>
                    </div>
                </form>
                <button id="openSignup" class="mt-3 border border-blue-100 text-blue-100 py-3 w-full rounded-lg">Подать
                    заявку</button>
            </div>
        </div>
    </div>

    <!-- Forget Password Modal -->
    <div id="PasswordModal" class="modal hidden">
        <div class="top-0 left-0 w-full h-screen bg-black-50 z-40">
            <div
                class="bg-white rounded-2xl p-5 w-[400px] relative top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-30">
                <div class="float-right">
                    <svg id="closePassModal" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="flex mt-12 h-16 w-16px ml-36">
                    <span
                        class="animate-ping absolute inline-flex h-16 w-16 rounded-full border-2 border-yellow-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-16 w-16 bg-yellow-500 justify-center items-center">
                        <img src="/images/images/information-circle.svg" alt="">
                    </span>
                </div>
                <p class="text-grey-400 text-center text-sm leading mt-6">Забыли пароль? Для восстановления
                    пароля обратитесь администратору</p>
                <a href="tel:+998974504500"
                    class="flex justify-center items-center rounded-lg px-7 py-3 mx-auto bg-blue-100 mt-5 text-white">
                    <img src="/images/icons/header/phone.svg" alt="" class="stroke-white">
                    +998 97 450 45 00
                </a>
            </div>
        </div>
    </div>
    <!-- Signup Modal -->

    <div id="signupModal" class="modal hidden">
        <div class="top-0 left-0 w-full h-screen bg-black-50 z-40">
            <div
                class="bg-white p-5 w-[400px] h-auto rounded-2xl  relative top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-30">
                <div class="flex justify-between">
                    <h2 class="text-black-100 text-2xl font-semibold leading-8">Подать заявку</h2>
                    <svg id="closeSignupModal" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <p class="text-grey-400 text-sm font-medium leading-5 mt-2">Войти в систему чтобы
                    торговать
                    в системе</p>

                <form id="signupForm" class="mt-4">
                    <label for="fullName" class="text-grey-100 text-sm font-medium leading-5">Ф.И.О.</label>
                    <input
                        class="w-full rounded-lg bg-[#F0F3F7] mt-1.5 mb-2.5 p-3 focus:outline-blue-100 required:outline-red-700"
                        type="text" id="fullName" placeholder="Введите вашу Ф.И.О.">

                    <label for="productName" class="text-grey-100 text-sm font-medium leading-5">Название
                        продукта</label>
                    <input type="text"
                        class="w-full rounded-lg bg-[#F0F3F7] mt-1.5 mb-2.5 p-3 focus:outline-blue-100 required:outline-red-700"
                        id="productName" placeholder="Введите название продукта">

                    <label class="text-grey-100 text-sm font-medium leading-5" for="category">Категория</label>
                    <select id="category"
                        class="w-full rounded-lg bg-[#F0F3F7] mt-1.5 mb-2.5 p-3 focus:outline-blue-100 required:outline-red-700">
                        <option value="">Выберите категорию</option>
                        <!-- Categories go here -->
                    </select>

                    <label for="phone" class="text-grey-100 text-sm font-medium leading-5">Телефон
                        номер</label>
                    <input type="tel" id="phone" value="+998" placeholder="+998 (___) ___ __ __"
                        class="w-full rounded-lg bg-[#F0F3F7] mt-1.5 mb-2.5 p-3 focus:outline-blue-100 required:outline-red-700">
                    <label class="text-grey-100 text-sm font-medium leading-5" for="category">Категория</label>
                    <select id="category"
                        class="w-full rounded-lg bg-[#F0F3F7] mt-1.5 mb-2.5 p-3 focus:outline-blue-100 required:outline-red-700">
                        <option value="">Выберите свой адрес</option>
                        <!-- Categories go here -->
                    </select>
                    <button class="bg-blue-100 text-white py-3 w-full rounded-lg" type="button"
                        id="openLocModal">Продолжить</button>

                    <div class="flex justify-between items-center mt-2.5">
                        <span class="h-[1px] w-[15%] bg-grey-400"></span>
                        <span class="text-grey-400 text-xs leading-4 ">Если вы продавец, войдите на
                            платформу</span>
                        <span class="h-[1px] w-[15%] bg-grey-400"></span>
                    </div>
                    <button class="mt-2.5 border border-blue-100 text-blue-100 py-3 w-full rounded-lg"
                        id="openLogin">Войти</button>
                </form>
            </div>
        </div>
    </div>

    <!-- choose map location -->
    <div id="ChooseLocation" class="modal hidden">
        <div class="top-0 left-0 w-full h-screen bg-black-50 z-40">
            <div
                class="bg-white rounded-2xl p-5 w-[400px] relative top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-30">
                <div class="flex justify-between items-center">
                    <span class="flex items-center justify-between gap-2">
                        <img class="cursor-pointer" id="backSignModal" src="/images/images/back-arrow.svg" alt="">
                        <h3 class="text-black-100 text-2xl font-bold leading-8">Введите адресс</h3>
                    </span>
                    <svg id="closeLocModal" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <p class="text-grey-400 text-sm font-medium mt-2 leading-4">Войти в систему чтобы торговать
                    в системе</p>
                <p class="text-sm font-medium leading-5 text-grey-100 mt-6">Адресс</p>
                <form>
                    <input
                        class="w-full rounded-lg bg-[#F0F3F7] mt-1.5 mb-2.5 p-3 focus:outline-blue-100 required:outline-red-700"
                        type="text" placeholder="Введите свой адрес">
                </form>
                <iframe class="w-full h-80 rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6359512387976!2d69.33195507514921!3d41.338528999025684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef48a8ed4d0e9%3A0x3772abeffc72e7b8!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQmNC90YXQsA!5e0!3m2!1sru!2s!4v1729577484686!5m2!1sru!2s"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                <button id="openLastSign"
                    class="w-full h-11 mt-8 py-3 px-7 bg-blue-100 rounded-lg text-white text-base leading-5 font-semibold">Подать
                    заявку</button>
            </div>
        </div>
    </div>

    <!-- Last  Sign -->

    <div id="lastSignModal" class="modal hidden">
        <div class="top-0 left-0 w-full h-screen bg-black-50 z-40">
            <div
                class="bg-white rounded-2xl p-5 w-[400px] relative top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-30">
                <div class="float-right">
                    <svg id="closelastSign" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <img class="mt-4 mx-auto" src="/images/images/lastSignModal.svg" alt="">
                <h3 class="text-center text-lg leading-6 font-semibold mt-5">Ваша заявка принята!</h3>
                <p class="mt-2 text-grey-400 text-center text-sm leading-5 mx-auto w-9/12">Наши сотрудники
                    свяжутся с вами в ближайшее время</p>
                <button class="w-full h-11 mt-12 py-3 px-7 bg-blue-100 rounded-lg flex items-center justify-center"
                    type="submit"><a class="text-white text-base leading-5 font-semibold" href="index.html">Спасибо</a>
                </button>
            </div>
        </div>
    </div>
`;

document.body.innerHTML = headerTemplate + document.body.innerHTML