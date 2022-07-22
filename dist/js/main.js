$(function () {

    //JQUERY
    $(".about__slider").slick({
        infinite: false,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 3000
    });

    $(".header__btn").on("click", (function () { 
        $(this).toggleClass("header__btn-active"); 
        $(".header__menu-list").toggleClass("header__menu-active");
        $(".header__search").toggleClass("header__search-active");
    }))

    //JS
    const headerSelect = document.querySelector('.header__select');
    if(headerSelect) {
        language();
    }

    function language() {
        const langArrow = document.querySelector('.header__language-arrow');
        langArrow.onclick = () => {
            langArrow.classList.toggle('language-arrow-active');
            headerSelect.size = headerSelect.length;
            headerSelect.focus();
        };

        headerSelect.onchange = headerSelect.onclick = headerSelect.onblur = () => {
            headerSelect.size = 1;
            langArrow.classList.remove('language-arrow-active');
        };
    }

});

