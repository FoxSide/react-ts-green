import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetTitlesOfGovermentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
  return buildings.map(b => b.adress.street.title)
}

export const getStreetTitlesOfHouses = (houses: Array<HouseType>) => {
  return houses.map(h => h.adress.street.title)
}

export const createGreetingMessage = (houses: Array<HouseType>) => {
  return houses.map(h => `Hello people with live on ${h.adress.street.title}`)
}