import { useState } from 'react'

const Header = (props) => {
    return (
      <div>
        <h1>
          {props.text}
        </h1>
      </div>
    )
}

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>
      {props.text}
    </button>
  )

}

const StatisticLine = ({text, value}) => {
  if (text != "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }
}

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad != 0) {
    const all = good + neutral + bad
    const average = (good*1 + bad*-1)/(good + neutral + bad)
    const positive = (good)/(good + neutral + bad) * 100
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value = {good}/>
          <StatisticLine text="neutral" value = {neutral}/>            
          <StatisticLine text="bad" value = {bad}/>
          <StatisticLine text="all" value = {all}/>
          <StatisticLine text="average" value = {average}/>
          <StatisticLine text="positive" value = {positive}/>
        </tbody>
      </table>
    )
  } else {
    return (
      <div>
        No feedback given
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text = "give feedback" />
      <Button onClick = {() => setGood(good + 1)} text = "good"/>
      <Button onClick = {() => setNeutral(neutral + 1)} text = "neutral"/>
      <Button onClick = {() => setBad(bad + 1)} text = "bad"/>
      <Header text = "statistics"/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App
