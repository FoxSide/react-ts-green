type LessonType = {
  title: string
}
type StreetType = {
  title: string
}
type AdressType = {
  street: StreetType
}
type ManType = {
  name: string
  age: number
  lessons: Array<LessonType>
  adress: AdressType
}

let props: ManType;
beforeEach(() => {
  props = {
    name: 'Ed',
    age: 24,
    lessons: [{title: '1'}, {title: '2'}],
    adress: {
      street: {
        title: 'Akademicheskiy'
      }
    }
}})
test ('' , () => {
  // const age = props.age
  // const lessons = props.lessons
  const {age, lessons} = props
  const {title} = props.adress.street

  expect(age).toBe(24)
  expect(lessons.length).toBe(2)
  expect(title).toBe('Akademicheskiy')
})

test('', () => {
  const l1 = props.lessons[0]
  const l2 = props.lessons[1]

  const [ls1, ls2] = props.lessons
  expect(l1.title).toBe('1')
  expect(l2.title).toBe('2')
  expect(ls1.title).toBe('1')
  expect(ls2.title).toBe('2')
})
