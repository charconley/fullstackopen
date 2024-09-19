import Part from './Part'
import Sum from './Sum'
const Content = ({parts}) => {
    const getExercises = () => {
        function myFunc(acc, cur) {
            return acc + cur
        }

        let exArr = parts.map(part => part.exercises)
        const total = exArr.reduce(myFunc);
        return total
    }
    return (
        <div>
            {parts.map(part => <Part key = {part.id} name = {part.name} exercises = {part.exercises}/> )}
            <Sum exercises = {getExercises()}/>
        </div>      
    )
  }

  export default Content
