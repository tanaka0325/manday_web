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
          props.actions.addPoem(input.value)
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
