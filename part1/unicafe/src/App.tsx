import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import StatisticLine from './StatisticLine'
import Button from './Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getAverage()
    getTotal()
  console.log(positive)

    getPositive()
  }),[good, neutral, bad]

  enum feedback {
    good = 'good',
    neutral = 'neutral',
    bad = 'bad'
  }
  
  const addValue = (feedback) => {
    if(feedback === 'good') {
      setGood(good + 1)
    }else if(feedback === 'bad') {
      setBad(bad + 1)
    }else if(feedback === 'neutral') {
      setNeutral(neutral+1)
    }else {
      console.log('error')
    }
  }

  const getAverage = () => {
    let total = good + neutral + bad
    let average = total / 3

    setAverage(average)
  } 

  const getTotal = () => {
    let total = good + neutral + bad
    setTotal(total)
  }

  const getPositive = () => {
    let total = good + neutral + bad
    let positive = good / total * 100

    if(isNaN(positive)) {
      positive = 0
    }
    setPositive(positive)
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <Button title={"good"} onClickAction={() => addValue(feedback.good)}/>
      <Button title={"neutral"} onClickAction={() => addValue(feedback.neutral)}/>
      <Button title={"bad"} onClickAction={() => addValue(feedback.bad)}/>


      <h1>Statistics</h1>
      { total === 0 ? <span>No feedback given</span> :
        <div>
            <span>good: {good}</span><br/>
            <span>neutral: {neutral}</span><br/>
            <span>bad: {bad}</span><br/>
            <StatisticLine title={"all"} value={total}/>
            <StatisticLine title={"average"} value={average}/>
            <StatisticLine title={"positive"} value={positive}/>
        </div>
      }
    </div>
  )
}

export default App