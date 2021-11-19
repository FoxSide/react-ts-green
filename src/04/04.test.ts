import {CityType} from "../02/02_02";
import {demolishHousesOnStreet, getBuildingsWithStaffCountGreatThen} from "./04";

let city: CityType;

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        id: 1,
        duildedAt: 2012,
        repaired: false,
        adress: {
          number: 100,
          street: {
            title: 'White street'
          }
        }
      },
      {
        id: 2,
        duildedAt: 2008,
        repaired: false,
        adress: {
          number: 100,
          street: {
            title: 'Happy street'
          }
        }
      },
      {
        id: 3,
        duildedAt: 2020,
        repaired: false,
        adress: {
          number: 101,
          street: {
            title: 'Happy street'
          }
        }
      }],
    governmentBuildings: [
      {
        type: 'Hospital',
        budget: 200000,
        staffCount: 200,
        adress: {
          street: {
            title: 'Central STR'
          }
        }
      },
      {
        type: 'Fire-Station',
        budget: 500000,
        staffCount: 1000,
        adress: {
          street: {
            title: 'South STR'
          }
        }
      }
    ],
    citizensNumber: 1000000
  }
})

test('Houses should be destroyed', () => {
  demolishHousesOnStreet(city, 'Happy street');

  expect(city.houses.length).toBe(1)
  expect(city.houses[0].id).toBe(1)
})
test('buildings with correct staff count', () => {
  let buildings = getBuildingsWithStaffCountGreatThen(city.governmentBuildings, 500)

  expect(buildings.length).toBe(1)
  expect(buildings[0].type).toBe('Fire-Station')
})