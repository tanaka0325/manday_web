import React from 'react'

const TaskList = (props) => {
  return (
    <ul>
      {props.store.tasks.map((task, i) => {
        return (
          <li key={i}>{task.body}
            <button onClick={() => { props.actions.delete(task) }}>
              delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
