import {CityType} from "../02/02_02";
import {createGreetingMessage, getStreetTitlesOfGovermentBuildings, getStreetTitlesOfHouses} from "./05";

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

test('list of street titles of goverment buildings', () => {
  let streetNames = getStreetTitlesOfGovermentBuildings (city.governmentBuildings);
  expect(streetNames.length).toBe(2)
  expect(streetNames[0]).toBe('Central STR')
  expect(streetNames[1]).toBe('South STR')
})

test('list of street titles', () => {
  let streetNames = getStreetTitlesOfHouses(city.houses);
  expect(streetNames.length).toBe(3)
  expect(streetNames[0]).toBe('White street')
  expect(streetNames[1]).toBe('Happy street')
  expect(streetNames[2]).toBe('Happy street')
})

test('create greeting message for street', () => {
  let message = createGreetingMessage(city.houses);
  expect(message.length).toBe(3)
  expect(message[0]).toBe('Hello people with live on White street')
  expect(message[1]).toBe('Hello people with live on Happy street')
  expect(message[2]).toBe('Hello people with live on Happy street')
})