import { generateId } from "../Utils/generateId.js"


export class Job {
  constructor({ logoUrl, hiringCompany, location, title, description, salary }) {
    this.id = generateId()
    this.logoUrl = logoUrl
    this.hiringCompany = hiringCompany
    this.location = location
    this.title = title
    this.description = description
    this.salary = salary
  }

  get Template() {
    return `
      <div class="col-md-4">
        <div class="bg-white rounded shadow p-2">
          <img src="${this.logoUrl}" alt="job logo" class="img-fluid rounded-circle">
          <div class="p-3">
            <p>Hiring Company: ${this.hiringCompany}</p>
            <p>Location: ${this.location}</p>
            <p>Title: ${this.title}</p>
            <p>${this.description}</p>
            <p>$${this.salary} annually</p>
          </div>
          <button class="btn btn-outline-danger m-1" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
        </div>
      </div>
    `
  }
}