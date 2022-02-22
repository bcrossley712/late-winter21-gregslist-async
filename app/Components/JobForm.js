export function getJobForm() {
  return `
    <form class="row bg-white m-2 py-2" onsubmit="app.jobsController.addJob(event)">
      <h3 class="col-12">Submit a Job</h3>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Hiring Company</label>
        <input type="text" class="form-control" name="hiringCompany" id="hiringCompany" aria-describedby="helpId"
          placeholder="Company Name" value="">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Location</label>
        <input type="text" class="form-control" name="location" id="location" aria-describedby="helpId"
          placeholder="City, State">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Title</label>
        <input type="text" class="form-control" name="title" id="title" aria-describedby="helpId"
          placeholder="Title">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Description</label>
        <input type="text" class="form-control" name="description" id="description" aria-describedby="helpId"
          placeholder="What will they do?">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Annual salary</label>
        <input type="number" class="form-control" name="salary" id="salary" aria-describedby="helpId"
          placeholder="" value="50000">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Logo URL</label>
        <input type="text" class="form-control" name="logoUrl" id="logoUrl" aria-describedby="helpId"
          placeholder="https://thiscatdoesnotexist.com">
      </div>
      <button class="col-4 btn btn-success offset-7">Submit</button>
    </form>

  `
}