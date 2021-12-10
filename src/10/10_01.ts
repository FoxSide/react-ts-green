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

export type UserWithBooksType = UserType & {
  books: Array<string>
}

export type WithCmpaniesType = {
  compamies: {id: number, title: string}[]
}

export type CompanyType = {
  id: number
  title: string
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

export const addNewBooksToUser = (u: UserWithLapTopType & UserWithBooksType, newBooks: string[]) => {
  return {...u, books: [...u.books].concat(newBooks)}
}

export const updateJsToTs = (u: UserWithLapTopType & UserWithBooksType, oldBook: string, newBook: string) => {
  return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
}

export const removeJs = (u: UserWithLapTopType & UserWithBooksType, book: string) => {
  return {...u, books: u.books.filter(b => b !== book)}
}

export const updateCompanyTitle = (u: UserWithLapTopType & WithCmpaniesType, id: number, newTitle: string) => {
  return {...u, compamies: u.compamies.map(c => c.id === id ? {...c, title: newTitle} : c)}
}

export const updateCompanyTitle2 = (companies: {[key: string]: CompanyType[]}, userName: string, companyId: number, newTitle: string) => {
  const companiesCopy = {...companies}
  companiesCopy[userName] = companiesCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c )
  return companiesCopy
}