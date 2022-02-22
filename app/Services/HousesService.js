import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"


class HousesService {
  addHouse(submittedHouse) {
    // console.log(submittedHouse);
    let newHouse = new House(submittedHouse)
    // console.log(newHouse);
    ProxyState.houses = [newHouse, ...ProxyState.houses]
  }

  deleteHouse(houseId) {
    let houseIndex = ProxyState.houses.findIndex(h => houseId == h.id)
    ProxyState.houses.splice(houseIndex, 1)
    ProxyState.houses = ProxyState.houses
  }
}

export const housesService = new HousesService