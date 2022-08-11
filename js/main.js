// ======================SWIPER====================
const swiper = new Swiper('.swiper-container', {
    
    loop: true,

    slidesPerView: 1,

    spaceBetween: 50,
    
    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    speed: 1000,

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

});

