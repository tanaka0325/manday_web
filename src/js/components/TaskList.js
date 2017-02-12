import React from 'react'

import Task from './Task'

const TaskList = (props) => {
  return (
    <ul>
      {props.store.tasks.map((task, i) => {
        return (
          <Task key={i} task={task} delete={props.actions.delete} />
        )
      })}
    </ul>
  )
}

export default TaskList
