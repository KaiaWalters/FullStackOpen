import PartComponent from './Part'
import Header from './Header'

const Course = ({course}) => {
    console.log(course.parts[0].name)
    return (
        <div>
          <Header title={course.name}/>
          {
            course.parts.map(part => (
              <PartComponent key={part.id} part={part}/>
            ))
          }
        </div>
    )
}

export default Course 


// <Header title={course}/>
// {course.parts.map((part) => {
// })}