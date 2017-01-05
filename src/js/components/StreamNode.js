import React from 'react'

const StreamNode = (props) => {
  return (
    <article className="message is-primary">
      <div className="message-body">{props.node}</div>
    </article>
  )
}

export default StreamNode
