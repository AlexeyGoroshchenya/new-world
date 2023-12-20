const news = [
    {   
        id: 1,
        name: 'Хорошая новость',

        images: [
            'https://kor.ill.in.ua/m/610x385/2722809.jpg',
            'https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg',

        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',


    },
    {
        id: 2,
        name: 'Еще лучше новость',

        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yzN7gxAGTDkjd7Xjblt7bAppZnbrarMK7-SfGkzd6ESx-EdTpE8hHWAZavt6cZJlBQY&usqp=CAU'
        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',
    },
    {
        id: 3,
        name: 'Самая лучшая новость',

        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yzN7gxAGTDkjd7Xjblt7bAppZnbrarMK7-SfGkzd6ESx-EdTpE8hHWAZavt6cZJlBQY&usqp=CAU'
        ],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia repellendus rerum consequatur nesciunt animi, quidem, sequi officiis ab illum consequuntur maiores esse, alias placeat amet voluptate suscipit doloribus ex.',
    },

]

export const renderNews = () => {

    if (!document.querySelector('.news')) return

        document.querySelector('.news__body').innerHTML = ''

        news.forEach((item, index) => {

            const newsItem = document.createElement('div');
            newsItem.classList.add('news__item')
            newsItem.innerHTML = `
            
            <div class="news__image"><img src=${item.images[0]} alt=""></div>
            <div class="news__title medium-title">${item.name}</div>
            <div class="news__text text">${item.description.slice(0, 100) + '...'}</div>
            <div data-id='${item.id}' class="news__button hover">Читати новину</div>
            `

            document.querySelector('.news__body').append(newsItem)
        })
   



    
}