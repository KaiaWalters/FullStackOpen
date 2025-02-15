import {PartComponent} from './Part'
import {Header} from './Header'

const Course = ({course}) => {

    return (
        <div key={course.key}>
            <Header title={course.name}/>
            {course.parts.map((part, index) => {
                <PartComponent key={index} part={part}/>
            })}
        </div>
    )
}

export default Course 