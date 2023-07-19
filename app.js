import { addCarouselItems } from './functions/carousel/carousel_items.js'
import { createCategorias } from './functions/categorias/categoria_items.js'



function initApp() {
    console.log('INIT')
    addCarouselItems()
    createCategorias()
}

initApp()