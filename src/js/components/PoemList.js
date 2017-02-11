import React from 'react'

const PoemList = (props) => {
  return (
    <ul>
      {props.store.poems.map((poem, i) => {
        return (
          <li key={i}>{poem.body}
            <button onClick={() => { props.actions.delete(poem) }}>
              delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default PoemList
