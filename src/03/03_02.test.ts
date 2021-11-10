import {CityType} from "../02/02_02";
import {addMoneyToBudget, repairHouse, toFireStaff} from "./03";

let city: CityType;

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
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
        type:'Hospital',
        budget: 200000,
        staffCount: 200,
        adress: {
          street: {
            title: 'Central STR'
          }
        }
      },
      {
        type:'Fire-Station',
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

test ('Budget should be changed for Hospital', () => {
  addMoneyToBudget(city.governmentBuildings[0], 100000);

  expect(city.governmentBuildings[0].budget).toBe(300000)
})

test ('Budget should be changed for Fire-Station', () => {
  addMoneyToBudget(city.governmentBuildings[1], -100000);

  expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House should be repared', () => {
  repairHouse(city.houses[1])

  expect(city.houses[1].repaired).toBeTruthy()
})

test('Staff should beincreased', () => {
  toFireStaff(city.governmentBuildings[0], 20);
  expect(city.governmentBuildings[0].staffCount).toBe(180)
})