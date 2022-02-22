import { ProxyState } from "../AppState.js";
import { getJobForm } from "../Components/JobForm.js";
import { jobsService } from "../Services/JobsService.js";

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(j => template += j.Template)
  document.getElementById('listings').innerHTML = template
}

export class JobsController {
  constructor() {
    // console.log('jobcontroller connected');
    ProxyState.on('jobs', _draw)
  }

  showJobs() {
    _draw()
    document.getElementById('modal-body-slot').innerHTML = getJobForm()
  }

  addJob(event) {
    event.preventDefault()
    let form = event.target
    let submittedJob = {
      hiringCompany: form.hiringCompany.value,
      location: form.location.value,
      title: form.title.value,
      description: form.description.value,
      salary: form.salary.value,
      logoUrl: form.logoUrl.value
    }
    // console.log(submittedJob);
    jobsService.addJob(submittedJob)
    form.clear()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(modal).hide()
  }

  deleteJob(jobId) {
    jobsService.deleteJob(jobId)
  }


}