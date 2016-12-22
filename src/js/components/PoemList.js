import React, { Component } from 'react'

class PoemList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        {this.props.store.poems.map((poem) => {
          return (
            <li key={poem.id}>{poem.text}</li>
          )
        })}
      </ul>
    )
  }

}

export default PoemList
