import React from "react";
type ManType = {
  name: string
  age: number
  lessons: Array<{ tittle: string }>
  adress: {
    street: {
      title: string
    }
  }
}

type PropsType = {
  title: string
  man: ManType
  food: Array<string>
  car: {
    model: string
  }
}

function useEdState(m: string) {
  return [m, function (){}]
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
  const [message, setMessage] = useEdState('hello')
  return <div>
  <h1>{title}</h1>
    <hr/>
    <div>
      {props.car.model}
    </div>
    <div>
      {man.name}
    </div>
  </div>
}