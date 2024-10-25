const footerTemplate = `
<footer class="h-[203px] mt-[72px]">
        <div class="container mx-auto">
            <div>
                <img class="cursor-pointer ml-[50%] translate-x-[-50%] translate-y-[-50%]"
                    src="images/images/footer/logo.svg" alt="">
            </div>

            <p
                class="text-black text-center text-base max-md:text-sm max-md:w-5/12 max-md:line-clamp-4  w-2/3 mx-auto -translate-y-20">
                77.uz marketplace - это виртуальная платформа в Узбекистане, которая облегчает покупки и продажи,
                связывая продавцов с потенциальными клиентами.
            </p>
            <div class="flex justify-center gap-x-20">
                <div class="flex gap-1">
                    <img src="images/images/footer/symbol.svg" alt="">
                    <p>Доска объявлений</p>
                </div>
                <div class="flex gap-1">
                    <img src="images/images/footer/symbol.svg" alt="">
                    <p>Условия пользования</p>
                </div>
                <div class="flex gap-1">
                    <img src="images/images/footer/symbol.svg" alt="">
                    <p>+998 88 500 50 00</p>
                </div>
            </div>

            <div class="bg-white border-t border-stone-300 w-full mt-12 flex justify-between items-center py-4">
                <div class="flex">
                    <span>© 77.uz</span>
                    <span> 2023. Все права защищены</span>
                </div>
                <img src="images/images/footer/UIC.svg" alt="">
            </div>
        </div>
    </footer>

`;
const mainElement = document.querySelector('main');

mainElement.insertAdjacentHTML('afterend', footerTemplate);
