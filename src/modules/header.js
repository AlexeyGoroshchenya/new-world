export const header = () => {

    document.querySelector('.header').innerHTML = `
    <div class="header__container">
				<div class="header__logo">
					<img src="./dist/img/logo.png" alt="new world">
					<div class="header__logo-text logo-text">
						<div class="logo-text-title">Новий свiт</div>
						<div class="logo-text-subtitle">newworld.kr.dp.ua</div>
					</div>
					
				</div>

				<nav class="header__menu menu-header">
					<ul class="menu-header__list">

						<li class="menu-header__link"><a href="#">Головна</a></li>
						<li class="menu-header__link"><a href="#">Про нас</a></li>
						<li class="menu-header__link"><a href="#">Взяти друга</a></li>
						<li class="menu-header__link"><a href="#">Потреби фонду</a></li>
						<li class="menu-header__link"><a href="#">Документи</a></li>
					</ul>
					<div class="header__donate hover">Донатити </div>
				</nav>
				<div class="header__button"><span></span><span></span><span></span> </div>
				
			</div>
    
    `

   



}