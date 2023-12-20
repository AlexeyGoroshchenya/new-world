export const footer = () => {

    document.querySelector('.footer').innerHTML = `
    
    <div class="footer__image"></div>
			<div class="footer__body">
				<div class="footer__container">
				<div class="footer__content">
					<div class="footer__column footer__contacts contacts-footer">
						<div class="footer__close-btn">+</div>
						
						<div class="footer__title">Контакти</div>
						<div class="contacts-footer__row">
							<div class="contacts-footer__logo"><img src="./dist/img/footer/phone.svg" alt=""></div>
							<div class="contacts-footer__info">
								<p><a href="#">+380 63 623 00 00</a></p>
								<p><a href="#">+380 63 623 00 00</a></p>
							</div>
						</div>
						<div class="contacts-footer__row">
							<div class="contacts-footer__logo"><img src="./dist/img/footer/mail.svg" alt=""></div>
							<div class="contacts-footer__info">
								<p><a href="#">info@novysvit.com</a></p>
								<p><a href="#">support@novysvit.com</a></p>
							</div>
						</div>
						<div class="contacts-footer__row">
							<div class="contacts-footer__logo"><a href="#"><img src="./dist/img/footer/location.svg" alt=""></a></div>
							<div class="contacts-footer__info">
								<p>вул. Олександра Усика 1, </p>
								<p>Кривий Ріг,  Україна</p>
							</div>
						</div>

					</div>

					<div class="footer__column footer__buttonss">
						<div class="footer__logo"><img src="./dist/img/footer/logo.svg" alt=""></div>

						<div class="footer__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias libero
							cupiditate ullam labore maiores reiciendis accusamus adipisci! Doloribus, asperiores
							aspernatur! Earum, dolorem! Amet ea quae quas inventore magni delectus exercitationem!</div>

						<div class="footer__donate">Задонатити</div>

						<div class="footer__socials">
							<a class="footer__social-link" href="#"><img src="./dist/img/footer/telegram.svg" alt=""></a>
							<a class="footer__social-link" href="#"><img src="./dist/img/footer/instagram.svg" alt=""></a>
							<a class="footer__social-link" href="#"><img src="./dist/img/footer/tiktok.svg" alt=""></a>
						</div>
    				</div>

					<div class="footer__column footer__nav">
						<div class="footer__title">Сторiнки</div>
						<ul class="footer__nav-list">
							<li class="footer__link"><a href="./index.html">Головна</a></li>
							<li class="footer__link"><a href="./pet.html">Новини</a></li>
							<li class="footer__link"><a href="./get-friend.html">Обрати друга</a></li>
							<li class="footer__link"><a href="./test.html">Контакти</a></li>
						</ul>
					</div>
				</div>
			</div>
			</div>
			
			<div class="footer__disigned">Зроблено в Lemurs.agency з любовю <span>♥</span></div>
    `

    const hideContacts = () => {

        if (window.innerWidth < 992) {
            document.querySelector('.footer__contacts').classList.add('hidden')
        } else {
            document.querySelector('.footer__contacts').classList.remove('hidden')
        }
    }
    hideContacts()

    window.addEventListener("orientationchange", function () {

        setTimeout(hideContacts, 2)
        
    }, false);


    document.querySelector('.footer').addEventListener('click', (e) => {

        if (e.target.closest('.footer__close-btn')) {
            document.querySelectorAll('.footer__contacts .contacts-footer__row').forEach(el => {
                document.querySelector('.footer__contacts').classList.toggle('hidden')
                document.querySelector('.footer__close-btn').classList.toggle('active')
            })
        }



    })



}