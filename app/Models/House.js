import { generateId } from "../Utils/generateId.js";


export class House {
  constructor(data) {
    this.id = data.id || ''
    this.bedrooms = data.bedrooms || 1
    this.bathrooms = data.bathrooms || 1
    this.levels = data.levels || 1
    this.year = data.year || 2000
    this.price = data.price || 50000
    this.imgUrl = data.imgUrl || ''
    this.description = data.description || ''
  }

  get Template() {
    return `
      <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <img src="${this.imgUrl}" alt="house image" class="img-fluid rounded-top">
          <div class="p-3">
          <p>${this.bedrooms} bedrooms</p>
          <p>${this.bathrooms} bathrooms</p>
          <p>${this.levels == 1 ? 'Single' : `${this.levels}`} Level${this.levels > 1 ? 's' : ''}</p>
          <p>Built in the year ${this.year}</p>
          <p>$${this.price}</p>
          <p>${this.description}</p>
          </div>
            <button class="btn btn-outline-warning" onclick="app.housesController.editHouse('${this.id}')"> Edit </button>
          <button class="btn btn-outline-danger m-1" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
        </div>
      </div>
    `
  }
}