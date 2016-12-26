import React from 'react'

const TaskList = (props) => {
  return (
    <ul>
      {props.store.tasks.map((task) => {
        return (
          <li key={task.id}>{task.body}
            <button onClick={() => { props.actions.deleteTask(task.id) }}>
              delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
