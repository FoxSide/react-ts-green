export type UserType = {
  name: string
  hair: number
  adress: { city: string, house?: number }
}

export type LapTopType = {
  title: string
}

export type UserWithLapTopType = UserType & {
  laptop: LapTopType
}

export const makeHairstyle = (u: UserType, power: number) => {
  // copyUser.hair = u.hair / 2
  return {...u, hair: u.hair / power}
}

export const moveUser = (u: UserWithLapTopType, city: string) => {
  // copy.adress = {...copy.adress, city: city}
  return {...u, adress: {...u.adress, city: city}}
}


export const upgradeUserLapTop = (u: UserWithLapTopType, title: string) => {
  return {...u, laptop: {...u.laptop, title: title}}
}