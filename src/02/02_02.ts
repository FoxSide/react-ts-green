export type StreetType = {
  title: string
};

export type AdressType = {
  number: number
  street: StreetType
}

export type HouseType = {
  id?: number
  duildedAt: number
  repaired: boolean
  adress: AdressType
};
export type CityType = {
  title: string
  houses: Array<HouseType>
  governmentBuildings: Array<GovernmentBuildingsType>
  citizensNumber: number
};

export type GovernmentBuildingsStreetType = {
  title: string
}

export type GovernmentBuildingsAdressType = {
  street: GovernmentBuildingsStreetType
}
export type GovernmentBuildingsType = {
  type: string
  budget: number
  staffCount: number
  adress: GovernmentBuildingsAdressType
}

