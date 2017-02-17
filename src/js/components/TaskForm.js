import React from 'react'

const TaskForm = (props) => {
  let input

  return (
    <div className="task-form">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.value.trim()) { return }
          props.actions.add({
            user_id: 1,
            date: props.date,
            status: 'not_yet',
            body: input.value,
            priority: 'normal',
          })
          input.value = ''
        }}
      >
        <div className="control is-grouped">
          <p className="control is-expanded">
            <input ref={(node) => { input = node }} className="input" />
          </p>
          <p className="control">
            <button type="submit" className="button is-dark">Add</button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default TaskForm
