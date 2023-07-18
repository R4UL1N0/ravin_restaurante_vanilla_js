function addCarouselItem(obj) {
    const carouselInner = document.getElementById('inner-sel')

    const carouselItem = document.createElement('div')
    carouselItem.classList.add('carousel-item')
    carouselItem.classList.add('w-100')

    const carouselImg = document.createElement('img')
    carouselImg.classList.add("d-block")
    carouselImg.classList.add("w-100")
    carouselImg.src = obj.image
    carouselItem.appendChild(carouselImg)

    const carouselCaption = document.createElement('div')
    carouselCaption.classList.add('carousel-caption')
    carouselCaption.classList.add('d-none')
    carouselCaption.classList.add('d-md-block')
    const carouselTitle = document.createElement('h5')
    carouselTitle.innerHTML = obj.title
    carouselCaption.appendChild(carouselTitle)
    const carouselDescription = document.createElement('p')
    carouselDescription.innerHTML = obj.description
    carouselCaption.appendChild(carouselDescription)

    carouselItem.appendChild(carouselCaption)

    carouselInner.appendChild(carouselItem)

}

export function addCarouselItems() {

    for (var i = 0; i < carouselItems.length; i++) {
        console.log('loop')
        addCarouselItem(carouselItems[i])
    }
}

const carouselItems = [
    {
        "title": "You can find us downtown!",
        "description": "We are located in the best spots when talking about food",
        "image": '../../assets/restaurant.jpg'
    },
    {
        "title": "Great food you can find it here",
        "description": "Of course we have some of the best chefs in our kitchen",
        "image": '../../assets/food.jpg'
    },
    {
        "title": "Our drinks will change your concept of being drunk",
        "description": "Imagine a drink you want. We have it. Otherwise we make it",
        "image": '../../assets/drinks.jpg'
    }
]