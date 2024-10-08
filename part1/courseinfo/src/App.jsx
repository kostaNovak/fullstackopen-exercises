import React from 'react';


const Header = (props) => {
  return <h1>{props.title}</h1>
}
const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercises}
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} exercises={props.exercises1}/>
      <Part part= {props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      Number of exercises {props.n1 + props.n2 + props.n3}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
      <Total n1={exercises1} n2={exercises2} n3={exercises3}/>
    </div>
  )
}

export default App