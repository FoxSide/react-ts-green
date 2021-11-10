import {CityType} from "./02_02";

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
    governmentBuildings: [],
    citizensNumber: 1000000
  }
})

test("city shouldcontains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].duildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].adress.number).toBe(100);
    expect(city.houses[0].adress.street.title).toBe('White street');

    expect(city.houses[1].duildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].adress.number).toBe(100);
    expect(city.houses[1].adress.street.title).toBe('Happy street');

    expect(city.houses[2].duildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].adress.number).toBe(101);
    expect(city.houses[2].adress.street.title).toBe('Happy street');
  }
)