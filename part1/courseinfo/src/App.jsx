  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>
          The course is {props.course.name}
        </h1>
      </div>
    )
}
const Content = (props) => {
  return (
    <div>
      <Part1 part1 = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
      <Part2 part2 = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
      <Part3 part3 = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Total number of exercises is {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}
const Part1 = (props) => {
  return (
    <div>
    <p>
      Part 1 is {props.part1}, there are {props.exercises} exercises
    </p>
  </div>
  )
}

const Part2 = (props) => {
  return(
    <div>
    <p>
      Part 2 is {props.part2}, there are {props.exercises} exercises
    </p>
  </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
    <p>
      Part 3 is {props.part3}, there are {props.exercises} exercises
    </p>
  </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course}/>
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App