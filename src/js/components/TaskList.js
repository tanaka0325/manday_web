import React from 'react'

import Task from './Task'

const TaskList = (props) => {
  return (
    <ul>
      {props.tasks.map((task, i) => {
        return (
          <Task
            key={i}
            task={task}
            actions={props.actions}
          />
        )
      })}
    </ul>
  )
}

export default TaskList
