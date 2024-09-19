import Content from './Content'
import Header from './Header'

const Course = ({name, parts}) => {
    return (
        <div>
            <Header name = {name}/>
            <Content parts = {parts}/>
        </div>
    )
}

export default Course
