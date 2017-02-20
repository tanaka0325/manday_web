import React from 'react'
import MarkdownIt from 'markdown-it'
import moment from 'moment'

const Poem = (props) => {
  const md = new MarkdownIt()
  const poemHtml = md.render(props.poem.body)
  console.log(moment(props.poem.created_at).format('HH:mm:ss'))

  return (
    <article className="message poem">
      <div className="message-body">
        <p dangerouslySetInnerHTML={{ __html: poemHtml }} />
        {/* <small>{moment(props.poem.created_at).format('HH:mm:ss')}</small> */}
        <small className="time">{moment(props.poem.created_at).fromNow()}</small>
        <br/>
        <button onClick={() => { props.actions.delete(props.poem) }}>delete</button>
      </div>
    </article>
  )
}

export default Poem
