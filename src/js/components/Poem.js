import React from 'react'
import MarkdownIt from 'markdown-it'
import moment from 'moment'

const Poem = (props) => {
  const md = new MarkdownIt()
  const poemHtml = md.render(props.poem.body)

  return (
    <article className="message poem">
      <div className="message-body content">
        <p dangerouslySetInnerHTML={{ __html: poemHtml }} />
        {/* <small>{moment(props.poem.created_at).format('HH:mm:ss')}</small> */}
        <small className="time">{moment(props.poem.created_at).fromNow()}</small>
        <br />
        <button onClick={() => { props.actions.delete(props.poem) }}>delete</button>
        <button onClick={() => { props.actions.openModal(props.poem) }}>edit</button>
      </div>
    </article>
  )
}

export default Poem
