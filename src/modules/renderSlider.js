const pets = [
    {
        id: 1,
        name: 'Stepan',
        age: '5',
        location: 'Kiew',
        breed: 'mimimi',
        desise: 'none',
        sex: 'male',
        type: 'cat',
        typeName: 'КОТИК',
        images: [
            'https://kor.ill.in.ua/m/610x385/2722809.jpg',
            'https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg',

        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',


    },
    {
        id: 2,
        name: 'Patron',
        age: '4',
        location: 'Kiew',
        breed: 'elf',
        desise: 'none',
        sex: 'male',
        type: 'dog',
        typeName: 'ПЕСИК',

        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yzN7gxAGTDkjd7Xjblt7bAppZnbrarMK7-SfGkzd6ESx-EdTpE8hHWAZavt6cZJlBQY&usqp=CAU'
        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',
    },
    {
        id: 3,
        name: 'Stepan',
        age: '5',
        location: 'Kiew',
        breed: 'mimimi',
        desise: 'none',
        sex: 'male',
        type: 'cat',
        typeName: 'КОТИК',
        images: [
            'https://kor.ill.in.ua/m/610x385/2722809.jpg',
            'https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg',

        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',


    },
    {
        id: 4,
        name: 'Patron',
        age: '4',
        location: 'Kiew',
        breed: 'elf',
        desise: 'none',
        sex: 'male',
        type: 'dog',
        typeName: 'ПЕСИК',

        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yzN7gxAGTDkjd7Xjblt7bAppZnbrarMK7-SfGkzd6ESx-EdTpE8hHWAZavt6cZJlBQY&usqp=CAU'
        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',
    },
    {
        id: 5,
        name: 'Stepan',
        age: '5',
        location: 'Kiew',
        breed: 'mimimi',
        desise: 'none',
        sex: 'male',
        type: 'cat',
        typeName: 'КОТИК',
        images: [
            'https://kor.ill.in.ua/m/610x385/2722809.jpg',
            'https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg',

        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',


    },
    {
        id: 6,
        name: 'Patron',
        age: '4',
        location: 'Kiew',
        breed: 'elf',
        desise: 'none',
        sex: 'male',
        type: 'dog',
        typeName: 'ПЕСИК',

        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yzN7gxAGTDkjd7Xjblt7bAppZnbrarMK7-SfGkzd6ESx-EdTpE8hHWAZavt6cZJlBQY&usqp=CAU'
        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',
    },
    {
        id: 7,
        name: 'Stepan',
        age: '5',
        location: 'Kiew',
        breed: 'mimimi',
        desise: 'none',
        sex: 'male',
        type: 'cat',
        typeName: 'КОТИК',
        images: [
            'https://kor.ill.in.ua/m/610x385/2722809.jpg',
            'https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg',

        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',


    },
    {
        id: 8,
        name: 'Patron',
        age: '4',
        location: 'Kiew',
        breed: 'elf',
        desise: 'none',
        sex: 'male',
        type: 'dog',
        typeName: 'ПЕСИК',

        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yzN7gxAGTDkjd7Xjblt7bAppZnbrarMK7-SfGkzd6ESx-EdTpE8hHWAZavt6cZJlBQY&usqp=CAU'
        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',
    },
]

export const renderSlider = () => {

    if (!document.querySelector('.slider')) return

        document.querySelector('.slider__wrapper').innerHTML = ''

        pets.forEach((item, index) => {

            const slide = document.createElement('div');
            slide.classList.add('swiper-slide', 'slider__slide')
            slide.innerHTML = `<div data-id='${item.id}' class="slider__card card-slider">
                    <div class="card-slider__image">

                        <div class="card-slider__image-inner"></div>
                    </div>
                    <div class="card-slider__title title medium-title">${item.name}</div>
                    <div class="card-slider__text">${item.description.slice(0, 100) + '...'}</div>
                    </div>`

            slide.querySelector('.card-slider__image-inner').style.backgroundImage = `url(${item.images[0]})`

            document.querySelector('.slider__wrapper').append(slide)
        })
   



    
}