export const increaseAge = (u: UserType) => {
  u.age++
}
type UserType = {
  name: string
  age: number
  adress: {title: string}
}

test('big test', () => {
  const user: UserType = {
    name: 'Ed',
    age: 24,
    adress: {
      title: 'Kyiev'
    }
  }
  increaseAge(user)

  expect(user.age).toBe(25)
})

test('reference type test', () => {
  const adress = {title: 'Kyiev'}

  const user: UserType = {
    name: 'Ed',
    age: 24,
    adress: adress
  }

  const user2: UserType = {
    name: 'Viktoria',
    age: 24,
    adress: adress
  }

  const users = [user, user2, {name: 'Ned', age: 27, adress: adress}]
  const admins = [user, user2]
  admins[0].name = 'Eduard'

  expect(user.adress).toBe(user2.adress)
  expect(user.name).toBe('Eduard')
  expect(users[0].name).toBe('Eduard')
})

