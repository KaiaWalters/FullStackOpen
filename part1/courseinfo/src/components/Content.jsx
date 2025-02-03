import PartComponent from "./Part"

const Content = ({parts}) => {
    return (
      <div>
        {Part(parts)}
      </div>
    )
  }
  
  const Part = (parts) => {
    return parts.map(part => <PartComponent key={part.name} part={part}/>)  
  }

  export default Content


