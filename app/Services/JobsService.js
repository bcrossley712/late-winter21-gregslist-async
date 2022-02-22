import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js"



class JobsService {
  addJob(submittedJob) {
    let newJob = new Job(submittedJob)
    // console.log(newJob);
    ProxyState.jobs = [newJob, ...ProxyState.jobs]
  }

  deleteJob(jobId) {
    let jobIndex = ProxyState.jobs.findIndex(j => jobId == j.id)
    ProxyState.jobs.splice(jobIndex, 1)
    ProxyState.jobs = ProxyState.jobs
  }
}

export const jobsService = new JobsService