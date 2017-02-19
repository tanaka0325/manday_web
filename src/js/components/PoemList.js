import React from 'react'

import Poem from './Poem'

const PoemList = (props) => {
  return (
    <div>
      {props.poems.map((poem, i) => {
        return (
          <Poem key={i} poem={poem} actions={props.actions} />
        )
      })}
    </div>
  )
}

export default PoemList
