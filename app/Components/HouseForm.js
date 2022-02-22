export function getHouseForm() {
  return `
    <form class="row bg-white m-2 py-2" onsubmit="app.housesController.addHouse(event)">
      <h3 class="col-12">Submit a House</h3>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Location</label>
        <input type="text" class="form-control" name="location" id="location" aria-describedby="helpId"
          placeholder="123 Anywhere Dr, City, State">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Square Footage</label>
        <input type="number" class="form-control" name="sqFootage" id="sqFootage" aria-describedby="helpId"
          placeholder="" value="2000">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Bedrooms</label>
        <input type="number" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="helpId"
          placeholder="" value="5">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Bathrooms</label>
        <input type="number" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="helpId"
          placeholder="" value="5">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Acreage</label>
        <input type="number" class="form-control" name="acreage" id="acreage aria-describedby=" helpId"
          placeholder="" value="5" step="0.01">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Image URL</label>
        <input type="text" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId"
          placeholder="https://thiscatdoesnotexist.com">
      </div>
      <div class="mb-3 p-2 col-12">
        <label for="" class="form-label">Description</label>
        <input type="text" class="form-control" name="description" id="description" aria-describedby="helpId"
          placeholder="Is there a view? A basement? Single level? Style?">
      </div>
      <button class="col-4 btn btn-success offset-7">Submit</button>
    </form>
  `
}