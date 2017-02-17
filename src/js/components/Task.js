import React from 'react'

const Task = (props) => {
  return (
    <tr>
      <td>{props.task.body}</td>
      <td><button onClick={() => { props.actions.unplay(props.task) }}>unplay</button></td>
      <td><button onClick={() => { props.actions.play(props.task) }}>play</button></td>
      <td><button onClick={() => { props.actions.done(props.task) }}>done</button></td>
      <td><button onClick={() => { props.actions.delete(props.task) }}>delete</button></td>
    </tr>
  )
}

export default Task
