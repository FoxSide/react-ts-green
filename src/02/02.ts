type localCityType = {
  title: string
  countryTitle:string
}
type adressType = {
  stretTitle: string
  city: localCityType
}
type techType = {
  id: number
  title: string
}
type stydentType = {
  name: string
  age: number
  isActive: boolean
  adress: adressType
  techologies: Array<techType>
}

export const student: stydentType = {
  name: 'Ed',
  age: 25,
  isActive: true,
  adress: {
    stretTitle: 'Akademicheskiy 1',
    city: {
      title: 'Kyiev',
      countryTitle: 'Ukraine'
    }
  },
  techologies: [
    {
      id: 1,
      title: 'HTML'
    },
    {
      id: 2,
      title: 'CSS'
    }
  ]
}