import {studentType} from "../02/02";
import {addSkill, doesStudentLivein, makeStudentActive} from "./03";

let student: studentType;
beforeEach(() => {
  student = {
    id: 1,
    name: 'Ed',
    age: 25,
    isActive: true,
    adress: {
      stretTitle: 'Akademicheskiy 1',
      city: {
        title: 'Kyiev',
        countryTitle: 'Ukraine'
      }
    },
    techologies: [
      {
        id: 1,
        title: 'HTML'
      },
      {
        id: 2,
        title: 'CSS'
      }
    ]
  }
})
test('new tech skill should be added to student', () => {
  expect(student.techologies.length).toBe(2)
  addSkill(student, 'JS')
  expect(student.techologies.length).toBe(3)
  expect(student.techologies[2].title).toBe('JS')
  expect(student.techologies[2].id).toBeDefined()
})

test('student should is active', () => {
  expect(student.isActive).toBe(true)
  makeStudentActive(student)
  expect(student.isActive).toBe(false)
})

test('student lives in sity?', () => {
  let result1 = doesStudentLivein(student,'Moscow')
  let result2 = doesStudentLivein(student,'Kyiev')
  expect(result1).toBe(false)
  expect(result2).toBe(true)
})