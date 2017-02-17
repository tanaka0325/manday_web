import React from 'react'

import Task from './Task'

const TaskList = (props) => {
  return (
    <article className={`message ${props.cls}`}>
      <h3 className="message-header">{props.label}</h3>
      <div className="message-body">
        <table className="table">
          <tbody>
            {props.tasks.map((task, i) => {
              return (
                <Task
                  key={i}
                  task={task}
                  actions={props.actions}
                />
              )
            })}
        </tbody>
        </table>
      </div>
    </article>
  )
}

export default TaskList
