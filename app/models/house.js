let id = 1

export default class House {
  constructor(data) {
    this.id = id
    this.rooms = data.rooms
    this.title = data.title
    this.price = data.price
    this.img = data.img
    id++
  }




  getTemplate() {
    return `
        <div class="card col-3">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.rooms} -- ${this.price}</p>
                <button onclick="app.controllers.carController.deleteCar(${this.id})">Remove</button>
            </div>
        </div>`
  }
}