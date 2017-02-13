import React from 'react'

import Task from './Task'

const TaskList = (props) => {
  return (
    <div>
      <h3>{props.label}</h3>
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
    </div>
  )
}

export default TaskList
