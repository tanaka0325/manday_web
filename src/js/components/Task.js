import React from 'react'

const Task = (props) => {
  return (
    <li>
      {props.task.body}
      <button onClick={() => { props.actions.unplay(props.task) }}>
        unplay
      </button>
      <button onClick={() => { props.actions.play(props.task) }}>
        play
      </button>
      <button onClick={() => { props.actions.done(props.task) }}>
        done
      </button>
      <button onClick={() => { props.actions.delete(props.task) }}>
        delete
      </button>
    </li>
  )
}

export default Task
