$(function () {

    //JQUERY
    $(".about__slider").slick({
        infinite: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });


    //JS
    function language() {
        const langArrow = document.querySelector('.header__language-arrow');
        const headerSelect = document.querySelector('.header__select');
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
    language();

});

