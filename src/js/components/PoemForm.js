import React from 'react'

const PoemForm = (props) => {
  let input

  return (
    <div>
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
      </form>
    </div>
  )
}

export default PoemForm
