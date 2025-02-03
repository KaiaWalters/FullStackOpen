import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

const App = () => {
  const course = 'Half Stack application development'

  const courses = [
    { part: 1, header: "Fundamentals of React", exercises: 10},
    { part: 2, header: "Using props to pass data", exercises: 7},
    { part: 3, header: "State of a component", exercises: 14} 
  ]
  
  return (
    <div>
      <Header title={course}/>
      <Content courses={courses}/>
      <Total courses={courses}/> 
    </div>
  )
}

export default App