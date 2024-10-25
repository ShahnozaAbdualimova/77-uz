const headerTemplate = `
<!-- Header -->
<header class="border-b border-grey_4 bg-white/[0.92] backdrop-blur-lg w-full px-[30px] h-20 flex z-30">
    <div class="container mx-auto inline-flex justify-between items-center relative">
        <nav>
            <ul class="inline-flex gap-x-6 items-center justify-between">
                <li>
                    <div class="relative inline-block text-left">
                        <!-- Button -->
                        <button id="languageBtn"
                            class="inline-flex items-center justify-center px-4  bg-white text-gray-700 w-[170px] max-sm:w-auto max-[500px]:float-left">
                            <img id="selectedFlag" src="./images/icons/header/uz.svg" alt="Flag"
                                class="w-5 h-5 mr-2 inline-block">
                            <span id="selectedLang" class="max-md:hidden block">O'zbekcha</span>
                            <span id="selectedLang" class="max-md:block hidden">O'z</span>
                            <img id="arrowIcon" src="images/icons/header/lang.svg" alt="">
                        </button>

                        <!-- Dropdown Menu -->
                        <div id="dropdown"
                            class="hidden absolute ml-7 pl-4 flex-col justify-center items-end rounded-lg bg-white border border-7xl max-md:pl-4">
                            <div>
                                <a href="#" data-lang="Русский" data-flag="./images/icons/header/ru.svg"
                                    class="inline-flex items-center gap-2 text-gray-700 max-md:pr-[10px] pr-[45px] py-[11px]">
                                    <img src="./images/icons/header/ru.svg" alt="Russian Flag" class="w-5 h-5">
                                    <span class="max-md:hidden block">Русский</span>
                                    <span class="max-md:block hidden">Ру</span>
                                </a>
                                <div class="w-[103px] h-[1px] bg-[#F0F3F7] rounded absolute right-0"></div>
                                <a href="#" data-lang="O'zbekcha" data-flag="./images/icons/header/uz.svg"
                                    class="inline-flex items-center gap-2 text-gray-700 max-md:pr-[10px] pr-[45px] py-[11px]">
                                    <img src="./images/icons/header/uz.svg" alt="Uzbek Flag" class="w-5 h-5">
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
                        <img src="images/icons/header/phone.svg" alt="">
                        +998 71 200 70 07
                    </a>
                </li>
            </ul>
        </nav>
        <a href="index.html"
            class="flex w-[170px] h-[100px] p-[14px_16px]  justify-center items-center rounded-b-[20px] border-x border-b border-grey_4 bg-white shadow-3xl absolute left-[50%] translate-x-[-50%]">
            <img src="images/images/logo.svg" alt="">
        </a>
        <nav>
            <ul class="inline-flex items-center">
                <li>
                    <a href="" class="flex items-center gap-2  text-sm font-semibold text-mainBlack">
                        <img src="./images/icons/header/heart.svg" alt="">
                        <span class="max-md:hidden duration-300 hover:text-blue-500">Избранные</span>
                    </a>
                </li>
                <div class="h-8 w-[1px] bg-[#F0F3F7] mx-4"></div>
                <li>
                    <button
                        class="flex items-center justify-center py-2.5 px-6 gap-2 rounded-lg bg-[#F0F3F7] duration-300 hover:bg-slate-300"
                        id="loginBtn">
                        <span class="max-md:hidden">Войти</span>
                        <img src="./images/icons/header/login.svg" alt="">
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</header>
`

document.body.innerHTML = headerTemplate + document.body.innerHTML