import {CityType, GovernmentBuildingsType} from "../02/02_02";

export function demolishHousesOnStreet(city: CityType, street: string) {
  city.houses = city.houses.filter(h => h.adress.street.title !== street)
}

export const getBuildingsWithStaffCountGreatThen = (governmentBuildings: Array<GovernmentBuildingsType>, number: number) => {
  return governmentBuildings.filter(b => b.staffCount > number)
}