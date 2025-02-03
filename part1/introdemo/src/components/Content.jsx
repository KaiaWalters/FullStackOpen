import Part from "./Part"

const Content = ({courses}) => {
    return (
      <div>
        {courseBuilder(courses)}
      </div>
    )
  }
  
  const courseBuilder = (courses) => {
    console.log(courses)
    return courses.map(course => <Part key={course.part} course={course}/>)  
  }

  export default Content


