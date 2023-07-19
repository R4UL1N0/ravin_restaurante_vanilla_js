export function createCategorias() {

    const categoriasDiv = document.getElementById('categorias') 

    for (const item of itemsCategoria) {
        const itemEl = `
            <div class="categoria-item">
                <img src=${item.icon} class="categoria-image">
                <h3>${item.name}</h3>   
            </div>
        `

        categoriasDiv.innerHTML += itemEl
    }
}

const itemsCategoria = [
    {
        "name": "Pratos",
        "icon": "../../assets/icons/pratos.png"
    },
    {
        "name": "Bebidas",
        "icon": "../../assets/icons/drink.png"
    },
    {
        "name": "Saladas",
        "icon": "../../assets/icons/carnes.png"
    },
]