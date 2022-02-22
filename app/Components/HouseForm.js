import { House } from "../Models/House.js"

export function getHouseForm(house = {}) {
  const houseData = new House(house)
  return `
    <form class="row bg-white m-2 py-2" onsubmit="app.housesController.handleSubmit('${houseData.id}')">
      <h3 class="col-12">Submit a House</h3>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Bedrooms</label>
        <input type="number" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="helpId"
          placeholder="" value="${houseData.bedrooms}">
          </div>
          <div class="mb-3 p-2 col-4">
            <label for="" class="form-label">Bathrooms</label>
            <input type="number" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="helpId"
              placeholder="" value="${houseData.bathrooms}">
          </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Levels</label>
        <input type="number" class="form-control" name="levels" id="levels" aria-describedby="helpId"
          placeholder="" value="${houseData.levels}">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Year built</label>
        <input type="number" class="form-control" name="year" id="year" aria-describedby="helpId"
          placeholder="" value="${houseData.year}">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Price</label>
        <input type="number" class="form-control" name="price" id="price aria-describedby=" helpId"
          placeholder="" value="${houseData.price}">
      </div>
      <div class="mb-3 p-2 col-4">
        <label for="" class="form-label">Image URL</label>
        <input type="text" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId"
          placeholder="https://thiscatdoesnotexist.com" value="${houseData.imgUrl}">
      </div>
      <div class="mb-3 p-2 col-12">
        <label for="" class="form-label">Description</label>
        <input type="text" class="form-control" name="description" id="description" aria-describedby="helpId"
          placeholder="Is there a view? A basement? Single level? Style?" value="${houseData.description}">
      </div>
      <button class="col-4 btn btn-success offset-7">${house.id ? 'Edit' : 'Create'}</button>
    </form>
  `
}