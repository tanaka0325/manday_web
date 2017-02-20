import React from 'react'
import MarkdownIt from 'markdown-it'

const Poem = (props) => {
  const md = new MarkdownIt()
  const poemHtml = md.render(props.poem.body)

  return (
    <article className="message poem">
      <div className="message-body">
        <p dangerouslySetInnerHTML={{ __html: poemHtml }} />
        <button onClick={() => { props.actions.delete(props.poem) }}>delete</button>
      </div>
    </article>
  )
}

export default Poem
