import { generateId } from "../Utils/generateId.js"


export class Job {
  constructor(data) {
    this.id = data.id || ''
    this.company = data.company || ''
    this.jobTitle = data.jobTitle || ''
    this.hours = data.hours || 40
    this.rate = data.rate || 1500
    this.description = data.description || ''
  }

  get Template() {
    return `
      <div class="col-md-4">
        <div class="bg-white rounded shadow p-2">
          <div class="p-3">
            <p>Hiring Company: ${this.company}</p>
            <p>Title: ${this.jobTitle}</p>
            <p>Hours per week: ${this.hours}</p>
            <p>$${this.rate} annually</p>
            <p>${this.description}</p>
          </div>
          <button class="btn btn-outline-danger m-1" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
        </div>
      </div>
    `
  }
}