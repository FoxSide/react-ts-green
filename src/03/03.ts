import {studentType} from "../02/02";
import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
  return a + b
}

export const addSkill = (student: studentType, skill:string) => {
  student.techologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export const makeStudentActive = (student: studentType) => {
  student.isActive = false
}

export const doesStudentLivein = (student: studentType, cityName: string) => {
 return student.adress.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
  building.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
  houseType.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, number: number) => {
  building.staffCount -= number
}