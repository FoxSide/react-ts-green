import {makeHairstyle, moveUser, upgradeUserLapTop, UserType, UserWithLapTopType} from "./10_01";


test('reference type test', () => {
  let user: UserType = {
    name: 'Ed',
    hair: 32,
    adress: {
      city: 'Ukraine',
    }
  }
  const awesomeUser = makeHairstyle(user, 2)

  expect(user.hair).toBe(32)
  expect(awesomeUser.hair).toBe(16)
})


test('change adress', () => {

  let user: UserWithLapTopType = {
    name: 'Ed',
    hair: 32,
    adress: {
      city: 'Ukraine',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    }
  }
  const movedUser = moveUser(user, 'Minsk')

  expect(user).not.toBe(movedUser)
  expect(user.adress).not.toBe(movedUser.adress)
  expect(movedUser.adress.city).toBe('Minsk')
  expect(user.laptop).toBe(movedUser.laptop)
})

test('upgrade laptop to makbook', () => {

  let user: UserWithLapTopType = {
    name: 'Ed',
    hair: 32,
    adress: {
      city: 'Ukraine',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    }
  }
  const movedUser = upgradeUserLapTop(user, 'Makbook')

  expect(user).not.toBe(movedUser)
  expect(user.adress).toBe(movedUser.adress)
  expect(movedUser.laptop.title).toBe('Makbook')
  expect(user.laptop).not.toBe(movedUser.laptop)
})