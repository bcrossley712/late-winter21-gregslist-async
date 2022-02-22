import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
import { api } from "./AxiosService.js"


class HousesService {
  async editHouse(submittedHouse, id) {
    const res = await api.put('houses/' + id, submittedHouse)
    console.log('[HousesService]:editHouse', res.data);
    const edittedHouseIndex = ProxyState.houses.findIndex(h => h.id == id)
    ProxyState.houses.splice(edittedHouseIndex, 1, new House(res.data))
    ProxyState.houses = ProxyState.houses
  }
  async getAllHouses() {
    const res = await api('houses')
    console.log('[HousesService]:getAllHouses', res.data);
    ProxyState.houses = res.data.map(pojo => new House(pojo))
  }
  async addHouse(submittedHouse) {
    const res = await api.post('houses', submittedHouse)
    console.log('[HousesService]: addHouse', res.data);
    let newHouse = new House(res.data)
    ProxyState.houses = [newHouse, ...ProxyState.houses]
  }

  async deleteHouse(houseId) {
    const res = await api.delete('houses/' + houseId)
    console.log('[HousesService]:deleteHouse', res.data);
    ProxyState.houses = ProxyState.houses.filter(h => h.id != houseId)
  }
}

export const housesService = new HousesService