import React, { Component } from 'react'

const PoemList = (props) => {
  return (
    <ul>
      {props.store.poems.map((poem) => {
        return (
          <li key={poem.id}>{poem.text}</li>
        )
      })}
    </ul>
  )
}

export default PoemList
