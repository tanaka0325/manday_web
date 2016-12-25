import React from 'react'

const PoemList = (props) => {
  return (
    <ul>
      {props.store.poems.map((poem) => {
        return (
          <li key={poem.id}>{poem.body}</li>
        )
      })}
    </ul>
  )
}

export default PoemList
