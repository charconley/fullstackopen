import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>
      {props.text}
    </button>
  )
}
const Header = ({text}) => {
  return (
    <div>
      <h1>
        {text}
      </h1>
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const aVotes = new Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(aVotes)
  const randGen = (max) => {
    let ret =  Math.floor(Math.random() * max)
    return ret
  }

  const updateVote = (index) => {
    const addPoint = [...vote]
    addPoint[index] += 1
    return addPoint
    
  }
  const mostVotes = () => {
    let max = vote[0]
    let maxIndex = 0
    for (var i = 0; i < vote.length; i++) {
      if (vote[i] > max) {
        max = vote[i]
        maxIndex = i
      }
    }
    return maxIndex
  }

  return (
    <div>
      <Header text = "Anecdote of the day"/>  
      {anecdotes[selected]} 
      <br></br>
      has {vote[selected]} votes
      <br></br>
      <Button onClick = {() => setVote(updateVote(selected))} text = "vote"/>
      <Button onClick = {() => setSelected(randGen(anecdotes.length))} text = "next anecdote" />
      <Header text = "Anecdote with most votes"/>
      {anecdotes[mostVotes()]}
      <br></br>
      has {vote[mostVotes()]} votes

  </div>
  )
}

export default App