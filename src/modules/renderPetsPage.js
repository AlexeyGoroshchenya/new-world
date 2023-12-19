const pets = [
    {
        name: 'Stepan',
        age: '5',
        location: 'Kiew',
        breed: 'mimimi',
        desise: 'none',
        sex: 'male',
        type: 'КОТИК',
        images: [
            'https://kor.ill.in.ua/m/610x385/2722809.jpg',
            'https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg',

        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',


    },
    {

        name: 'Patron',
        age: '4',
        location: 'Kiew',
        breed: 'elf',
        desise: 'none',
        sex: 'male',
        type: 'ПЕСИК',

        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yzN7gxAGTDkjd7Xjblt7bAppZnbrarMK7-SfGkzd6ESx-EdTpE8hHWAZavt6cZJlBQY&usqp=CAU'
        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',
    },
    {
        name: 'Stepan',
        age: '5',
        location: 'Kiew',
        breed: 'mimimi',
        desise: 'none',
        sex: 'male',
        type: 'КОТИК',
        images: [
            'https://kor.ill.in.ua/m/610x385/2722809.jpg',
            'https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg',

        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',


    },
    {

        name: 'Patron',
        age: '4',
        location: 'Kiew',
        breed: 'elf',
        desise: 'none',
        sex: 'male',
        type: 'ПЕСИК',

        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yzN7gxAGTDkjd7Xjblt7bAppZnbrarMK7-SfGkzd6ESx-EdTpE8hHWAZavt6cZJlBQY&usqp=CAU'
        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',
    },
    {
        name: 'Stepan',
        age: '5',
        location: 'Kiew',
        breed: 'mimimi',
        desise: 'none',
        sex: 'male',
        type: 'КОТИК',
        images: [
            'https://kor.ill.in.ua/m/610x385/2722809.jpg',
            'https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg',

        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',


    },
    {

        name: 'Patron',
        age: '4',
        location: 'Kiew',
        breed: 'elf',
        desise: 'none',
        sex: 'male',
        type: 'ПЕСИК',

        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yzN7gxAGTDkjd7Xjblt7bAppZnbrarMK7-SfGkzd6ESx-EdTpE8hHWAZavt6cZJlBQY&usqp=CAU'
        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',
    },
    {
        name: 'Stepan',
        age: '5',
        location: 'Kiew',
        breed: 'mimimi',
        desise: 'none',
        sex: 'male',
        type: 'КОТИК',
        images: [
            'https://kor.ill.in.ua/m/610x385/2722809.jpg',
            'https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg',

        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',


    },
    {

        name: 'Patron',
        age: '4',
        location: 'Kiew',
        breed: 'elf',
        desise: 'none',
        sex: 'male',
        type: 'ПЕСИК',

        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yzN7gxAGTDkjd7Xjblt7bAppZnbrarMK7-SfGkzd6ESx-EdTpE8hHWAZavt6cZJlBQY&usqp=CAU'
        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',
    },
]

export const renderPetsPage = () => {

    if (!document.querySelector('.pet')) return

    const renderPetInformation = (i)=>{
        const pet = pets[0]

        document.querySelector('.pet__text-box').innerHTML = `
                            <div id="name" class="pet__title title">${pet.type} на ім’я <span>${pet.name}</span></div>
                            <div class="pet__tab">

                                <div class="pet__tab-row">
                                    <div class="pet__tab-name">Тип:</div>
                                    <div id="type" class="pet__tab-text">${pet.type}</div>
                                </div>
                                <div class="pet__tab-row">
                                    <div class="pet__tab-name">Порода:</div>
                                    <div id="breed" class="pet__tab-text">${pet.breed}</div>
                                </div>
                                <div class="pet__tab-row">
                                    <div class="pet__tab-name">Вік:</div>
                                    <div id="age" class="pet__tab-text">${pet.age}</div>
                                </div>
                                <div class="pet__tab-row">
                                    <div class="pet__tab-name">Стать:</div>
                                    <div id="sex" class="pet__tab-text">${pet.sex}</div>
                                </div>
                                <div class="pet__tab-row">
                                    <div class="pet__tab-name">Перебування:</div>
                                    <div id="location" class="pet__tab-text">${pet.location}</div>
                                </div>
                                <div class="pet__tab-row">
                                    <div class="pet__tab-name">Хвороби:</div>
                                    <div id="desises" class="pet__tab-text">${pet.desise}</div>
                                </div>
                            </div>
                            <div class="pet__button hover">ЗАБРАТИ ПЕСИКА!</div>
        `
        document.querySelector('.pet__wrapper').innerHTML = ''

        document.querySelector('.pet__pagination').innerHTML = ''

        pet.images.forEach((item, index) => {

            const galeryCard = document.createElement('div');

            galeryCard.classList.add('pet__image')
            if (index == + 0) galeryCard.classList.add('active')
            galeryCard.innerHTML = `
            
                                
                                    <div class="pet__image-second-bg"></div>
                                    <div class="pet__image-inner" ></div>
                                
            
            `
            galeryCard.querySelector('.pet__image-inner').style.backgroundImage = `url(${item})`

            document.querySelector('.pet__wrapper').append(galeryCard)

            const galeryPagination = document.createElement('div');
            galeryPagination.classList.add('pet__pag-buttons')
            if (index == + 0) galeryPagination.classList.add('active')

            document.querySelector('.pet__pagination').append(galeryPagination)
        })

        document.querySelector('.pet__description').innerHTML=`
        <div class="pet__title title">Про ${pet.type}a</div>
					<div class="pet__text text">
						<p>${pet.description}</p>
					</div>
        
        `
    }

    const renderSlider = ()=>{
        document.querySelector('.slider__wrapper').innerHTML = ''

        pets.forEach((item, index) => {

                const slide = document.createElement('div');
                slide.classList.add('swiper-slide', 'slider__slide')
                slide.innerHTML=`<div class="slider__card card-slider">
                    <div class="card-slider__image">

                        <div class="card-slider__image-inner"></div>
                    </div>
                    <div class="card-slider__title">${item.name}</div>
                    <div class="card-slider__text">${item.description.slice(0, 100) + '...'}</div>
                    </div>`

                    slide.querySelector('.card-slider__image-inner').style.backgroundImage = `url(${item.images[0]})`
                    
                    document.querySelector('.slider__wrapper').append(slide)
        })
    }
    
    renderPetInformation(0)
    renderSlider()
}