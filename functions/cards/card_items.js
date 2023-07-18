function createCard(obj) {

    const cardEl = `
        <div class="card">
            <img src=${obj.img}></img>
            <div class="card-body">
                <div class="card-title">${obj.title}</div>
                <p class="card-text">${obj.text}</p>
            </div>
        </div>
    `
    

}