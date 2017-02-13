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
            delete={props.actions.delete}
            // play={props.actions.play}
            // done={props.actions.done}
            // move={props.actions.move}
          />
        )
      })}
    </ul>
  )
}

export default TaskList
