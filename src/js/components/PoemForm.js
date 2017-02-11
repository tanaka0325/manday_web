import React from 'react'

const PoemForm = (props) => {
  let input

  return (
    <div>
      <h2>poem form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          props.actions.add({
            user_id: 1,
            date: props.date,
            status: 'published',
            body: input.value,
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

export default PoemForm
