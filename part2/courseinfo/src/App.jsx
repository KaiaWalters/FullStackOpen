import { useEffect, useState } from "react"
import Course from "./components/Course"

const App = () => {

  let [total, setTotal] = useState(0)

  const courseStore = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  useEffect(() => {
    const totalExercises = (course) => {
      let sum = 0 
      course.parts.forEach(part => {
        sum += part.exercises
      }) 
      setTotal(sum)
    } 

    totalExercises(courseStore)
  }, [courseStore])

  return <>
      <Course course={courseStore} />
      <span>total of {total} exercises</span>
  </>

}

export default App