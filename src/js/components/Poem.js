import React from 'react'

const Poem = (props) => {
  return (
    <article className="message is-primary">
      <div className="message-body">
        {props.poem.body}
        <button onClick={() => { props.actions.delete(props.poem) }}>delete</button>
      </div>
    </article>
  )
}

export default Poem
