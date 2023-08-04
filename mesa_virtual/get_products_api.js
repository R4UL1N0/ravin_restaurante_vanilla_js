 function addProducts() {
    let beers;

    fetch('./produtos.json')
        .then((data) => {
            return data.json()
        })
        .then((json) => {
            createComponents(json)
    })


    const mesaSelectedProductsContent = document.getElementById("mesa-selected-products-content")

    

    function createComponents(items) {
            
        for (item of items) {
            const component = `
            <div class="beer-container">
                <div class="beer-image"><img src=${item.imagem}></div>
                <div class="beer-description"><p>${item.nome}</p></div>
            </div>
        `


            if (item.categoria === 'Ale') {
                alesContent.innerHTML += component
            } else if (item.categoria === 'Lager'){
                lagersContent.innerHTML += component
            }
            
        }
    }
}

addProducts()