import {
  addNewBooksToUser,
  makeHairstyle,
  moveUser, removeJs, updateCompanyTitle, updateCompanyTitle2, updateJsToTs,
  upgradeUserLapTop,
  UserType,
  UserWithBooksType,
  UserWithLapTopType, WithCmpaniesType
} from "./10_01";


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
  expect(user.laptop.title).toBe('Zenbook')
})

test('add new books to user', () => {

  let user: UserWithLapTopType & UserWithBooksType = {
    name: 'Ed',
    hair: 32,
    adress: {
      city: 'Ukraine',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['css', 'js', 'html']
  }
  const copyUser = addNewBooksToUser(user, ['ts', 'rest api'])

  expect(user).not.toBe(copyUser)
  expect(user.laptop).toBe(copyUser.laptop)
  expect(user.adress).toBe(copyUser.adress)
  expect(user.books).not.toBe(copyUser.books)
  expect(copyUser.books[3]).toBe('ts')
  expect(copyUser.books[4]).toBe('rest api')
})

test('update js to ts', () => {

  let user: UserWithLapTopType & UserWithBooksType = {
    name: 'Ed',
    hair: 32,
    adress: {
      city: 'Ukraine',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['css', 'js', 'html']
  }
  const copyUser = updateJsToTs(user, 'js', 'ts')

  expect(user).not.toBe(copyUser)
  expect(user.laptop).toBe(copyUser.laptop)
  expect(user.adress).toBe(copyUser.adress)
  expect(user.books).not.toBe(copyUser.books)
  expect(copyUser.books[1]).toBe('ts')
})

test('remove book js', () => {

  let user: UserWithLapTopType & UserWithBooksType = {
    name: 'Ed',
    hair: 32,
    adress: {
      city: 'Ukraine',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['css', 'js', 'html']
  }
  const copyUser = removeJs(user, 'js')

  expect(user).not.toBe(copyUser)
  expect(user.laptop).toBe(copyUser.laptop)
  expect(user.adress).toBe(copyUser.adress)
  expect(user.books).not.toBe(copyUser.books)
  expect(copyUser.books.length).toBe(2)
  expect(copyUser.books[0]).toBe('css')
  expect(copyUser.books[1]).toBe('html')
})

test('update company title', () => {

  let user: UserWithLapTopType & WithCmpaniesType = {
    name: 'Ed',
    hair: 32,
    adress: {
      city: 'Ukraine',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    compamies: [
      {id: 1, title: 'Епам'},
      {id: 2, title: 'Incubator'}
    ]
  }
  const copyUser = updateCompanyTitle(user,1, 'EPAM')

  expect(user).not.toBe(copyUser)
  expect(user.adress).toBe(copyUser.adress)
  expect(user.laptop).toBe(copyUser.laptop)
  expect(user.compamies).not.toBe(copyUser.compamies)
  expect(copyUser.compamies[0].title).toBe('EPAM')
})

test('update company', () => {

  const companies =  {
    'Ed' : [{id: 1, title: 'Епам'}, {id: 2, title: 'Incubator'}],
    'Viktoria' : [{id: 1, title: 'Tallium'}]
  }

  const copy = updateCompanyTitle2(companies, 'Ed', 1, 'EPAM')

  expect(copy['Ed']).not.toBe(companies['Ed'])
  expect(copy['Viktoria']).toBe(companies['Viktoria'])
  expect(copy['Ed'][0].title).toBe('EPAM')
})