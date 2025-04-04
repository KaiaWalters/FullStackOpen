import PartComponent from './Part'
import Header from './Header'

const Course = ({course}) => {
  
  let totalExercises = course.parts.reduce((s, p) => {
    console.log('Accumulating:', s, p.exercises);
    return s + p.exercises;
  }, 0)

  console.log(course)
    return (
        <div>
          <Header title={course.name}/>
        
          {
            course.parts.map(part => 
              <PartComponent key={part.id} part={part}/>)
          }
          <span>total of {totalExercises} exercises</span>
        </div>
    )
}

export default Course 