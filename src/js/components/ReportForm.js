import React from 'react'

const ReportForm = (props) => {
  let inputTitle
  let inputBody

  return (
    <div>
      <h2>Report form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!inputTitle.value.trim()) {
            return
          }
          props.actions.addReport({
            user_id: 1,
            date: props.date,
            status: 'published',
            body: inputBody.value,
            title: inputTitle.value,
          })
          inputTitle.value = ''
          inputBody.value = ''
        }}
      >
        <input
          ref={(node) => {
            inputTitle = node
          }}
        />
        <textarea
          ref={(node) => {
            inputBody = node
          }}
        />
        <button type="submit">post</button>
      </form>
    </div>
  )
}

export default ReportForm
