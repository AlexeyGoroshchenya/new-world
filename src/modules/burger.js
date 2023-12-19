import { isMobile } from './helpers';

export const burger = () => {

    const menu = document.querySelector('.header__menu')
    const donateBtn = document.querySelector('.header__donate')
    const toggleMenuBtn = document.querySelector('.header__button')

    // let coordX = null;

    const moveMenu = () => {
        menu.classList.toggle('active')
    }

    if (isMobile.any() || window.innerWidth < 768) {

        

        let copyHeaderDonateButton = donateBtn.cloneNode(true);

        menu.append(copyHeaderDonateButton);

        donateBtn.remove()




    }


    document.body.addEventListener('click', (e) => {

    

        if (document.querySelector('.header__menu.active')) {

            if (e.target.closest('.menu-header__link') || e.target.closest('.header__donate') || !e.target.closest('.header__menu') ) {
                e.preventDefault()
                moveMenu()
            }


        } else  {
            if (e.target.closest('.header__button')) {
    
                        moveMenu()
                    }
        }


    })





}