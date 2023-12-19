
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';



export const swiper = new Swiper('.swiper', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    rewind: true,
    parallax: true,


    modules: [Autoplay, Navigation, Pagination],
    autoplay: {
        delay: 60000,
        disableOnInteraction: true,
        stopOnLastSlide: false,
    },

    pagination: {
        el: '.slider-pagination',
      },
    

    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },

    breakpoints: {
        1023.98: {
            slidesPerView: 4,
        },
        991.98: {
            slidesPerView: 3,
        },
        767.98: {
            slidesPerView: 2,
        },
    }

})




