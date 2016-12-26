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
          props.actions.addPoem({
            user_id: 1,
            date: '2016-12-25',
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
