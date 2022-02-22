import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";

function _draw() {
  let template = ''
  ProxyState.houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}


export class HousesController {
  constructor() {
    // console.log('housecontroller connected');
    ProxyState.on('houses', _draw)
  }

  showHouses() {
    _draw()
    document.getElementById('modal-body-slot').innerHTML = getHouseForm()
  }

  addHouse(event) {
    event.preventDefault()
    let form = event.target
    // console.log(form);
    let submittedHouse = {
      location: form.location.value,
      sqFootage: form.sqFootage.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      acreage: form.acreage.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value
    }
    // console.log(newHouse);
    housesService.addHouse(submittedHouse)
    let modal = document.getElementById('new-listing')
    form.reset()
    bootstrap.Modal.getOrCreateInstance(modal).hide()


  }

  deleteHouse(houseId) {
    // console.log(houseId);
    housesService.deleteHouse(houseId)
  }


}