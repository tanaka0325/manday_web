import React from 'react'

const PoemList = (props) => {
  return (
    <div>
      {props.store.poems.map((poem, i) => {
        return (
          <p key={i}>{poem.body}
            <button onClick={() => { props.actions.delete(poem) }}>
              delete
            </button>
          </p>
        )
      })}
    </div>
  )
}

export default PoemList
