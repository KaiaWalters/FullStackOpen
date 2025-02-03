const Total = ({courses}) => {

    const getTotal = (courses) => {
        let total = 0 
        courses.forEach(course => {
            total += course.exercises
        })
        return total
    } 
    
    return (
      <div>
        <p>Number of exercises {getTotal(courses)}</p>
      </div>
    )
}
  
export default Total