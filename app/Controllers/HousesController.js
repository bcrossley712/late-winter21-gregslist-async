import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";


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
  async showHouses() {
    try {
      await housesService.getAllHouses()
      document.getElementById('create-button').classList.remove('visually-hidden')
      document.getElementById('modal-body-slot').innerHTML = getHouseForm()
    } catch (error) {
      console.log(error.message);
      Pop.toast(error.message, 'error')
    }
  }

  async handleSubmit(id) {
    window.event.preventDefault()
    let form = window.event.target
    try {
      // console.log(form);
      let submittedHouse = {
        // @ts-ignore
        bedrooms: form.bedrooms.value,
        // @ts-ignore
        bathrooms: form.bathrooms.value,
        // @ts-ignore
        levels: form.levels.value,
        // @ts-ignore
        year: form.year.value,
        // @ts-ignore
        price: form.price.value,
        // @ts-ignore
        imgUrl: form.imgUrl.value,
        // @ts-ignore
        description: form.description.value
      }
      if (!id) {
        housesService.addHouse(submittedHouse)
      } else {
        housesService.editHouse(submittedHouse, id)
      }

    } catch (error) {
      console.log(error.message,);
      Pop.toast(error.message, 'error')
    }
    let modal = document.getElementById('new-listing')
    // @ts-ignore
    form.reset()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(modal).hide()


  }

  async deleteHouse(houseId) {
    try {
      if (await Pop.confirm()) {
        housesService.deleteHouse(houseId)
      }
    } catch (error) {
      console.log(error.message);
      Pop.toast(error.message, 'error')
    }
  }

  editHouse(id) {
    let house = ProxyState.houses.find(h => h.id == id)
    document.getElementById('modal-body-slot').innerHTML = getHouseForm(house)
    let modal = document.getElementById('new-listing')
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(modal).toggle()
  }

}