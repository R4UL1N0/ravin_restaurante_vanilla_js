function addCarouselItem(i, obj) {

    const carouselInner = document.getElementById('inner-sel')

    // carouselInner.innerHTML = ''

    const carouselItemObj = `
        <div class="carousel-item w-100 ${i == 0 ? 'active' : ''} ">
            <img src="${obj.img}" class="d-block carousel-image">
            <div class="carousel-caption d-none d-md-block">
                <h1>${obj.title}</h1>
                <p>${obj.description}</p>
            </div>
        </div>
    `

    carouselInner.innerHTML += carouselItemObj

}

export function addCarouselItems() {
    // const carouselInner = document.getElementById('inner-sel')


    for (var i = 0; i < carouselItems.length; i++) {
        console.log('loop')
        addCarouselItem(i, carouselItems[i])
    }
}

const carouselItems = [
    {
        "title": "You can find us downtown!",
        "description": "We are located in the best spots when talking about food",
        "img": '../../assets/restaurant.jpg'
    },
    {
        "title": "Great food you can find it here",
        "description": "Of course we have some of the best chefs in our kitchen",
        "img": '../../assets/food.jpg'
    },
    {
        "title": "Our drinks will change your concept of being drunk",
        "description": "Imagine a drink you want. We have it. Otherwise we make it",
        "img": '../../assets/drinks.jpg'
    }
]