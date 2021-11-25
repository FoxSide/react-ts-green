export const userObj = {
  '0': 'Ed',
  '1': 'Viktoria',
  '2': 'Ned',
  '3': 'Varova'
}

type UsersType = {
  [key: string]: {id: number, name: string}
}

export const users: UsersType = {
  '101': {id: 101, name: 'Ed'},
  '123': {id: 123, name: 'Viktoria'},
  '453': {id: 453, name: 'Ned'},
  '1': {id: 12313, name: 'Varova'}
}
// users[1] - поиск
let user = {id: 1234123, name: 'Blabla'}
users[user.id] = user /*- добавление нового юзера*/
delete users[user.id] /*- уделение пользователя*/
// O(1) - О от одного (происходит всё быстро, независимо от размера объекта)

export const usersArray = [
  {id: 101, name: 'Ed'},
  {id: 123, name: 'Viktoria'},
  {id: 453, name: 'Ned'},
  {id: 1, name: 'Varova'}
]

usersArray.find(u => u.id === 1) /*- поиск*/
usersArray.push(user)/* - добавление нового юзера*/
usersArray.filter(u => u.id !== user.id) /*- уделение пользователя*/
// O(n) - О от N, скорость зависит от развмера массива