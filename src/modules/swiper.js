
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';



export const swiper = ()=>{




    const slider = new Swiper('.slider__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    rewind: true,
    parallax: true,


    modules: [Autoplay, Navigation, Pagination],
    autoplay: {
        delay: 20000,
        disableOnInteraction: true,
        stopOnLastSlide: false,
    },
    

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 2,
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
}







