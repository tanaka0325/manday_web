import React from 'react'

const Task = (props) => {
  return (
    <li>
      {props.task.body}
      <button onClick={() => { props.delete(props.task) }}>
        delete
      </button>
    </li>
  )
}

export default Task
