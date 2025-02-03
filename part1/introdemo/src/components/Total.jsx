const Total = ({parts}) => {

    const getTotal = () => {
        let total = 0 
        parts.forEach(part => {
            total += part.exercises
        })
        return total
    } 
    
    return (
      <div>
        <p>Number of exercises {getTotal(parts)}</p>
      </div>
    )
}
  
export default Total