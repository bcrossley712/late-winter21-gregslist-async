import { generateId } from "../Utils/generateId.js";


export class House {
  constructor({ sqFootage, location, bedrooms, bathrooms, acreage, description, imgUrl }) {
    this.id = generateId()
    this.sqFootage = sqFootage
    this.location = location
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.acreage = acreage
    this.description = description
    this.imgUrl = imgUrl
  }

  get Template() {
    return `
      <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <img src="${this.imgUrl}" alt="house image" class="img-fluid rounded-top">
          <div class="p-3">
            <p>${this.sqFootage} Square Feet</p>
            <p>${this.location}</p>
            <p>${this.bedrooms} bedrooms</p>
            <p>${this.bathrooms} bathrooms</p>
            <p>On ${this.acreage} acres</p>
            <p>${this.description}</p>
          </div>
          <button class="btn btn-outline-danger m-1" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
        </div>
      </div>
    `
  }
}