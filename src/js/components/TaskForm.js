import React from 'react'

const TaskForm = (props) => {
  let input

  return (
    <div>
      <h2>Task form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          props.actions.addTask({
            user_id: 1,
            date: '2016-12-25',
            status: 'not_yet',
            body: input.value,
            priority: 'normal',
          })
          input.value = ''
        }}
      >
        <input
          ref={(node) => {
            input = node
          }}
        />
        <button type="submit">post</button>
      </form>
    </div>
  )
}

export default TaskForm
