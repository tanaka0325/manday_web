import React, { Component } from 'react'
import AltContainer from 'alt-container'

import PoemStore from '../stores/PoemStore'
import PoemActions from '../actions/PoemActions'
import PoemForm from '../components/PoemForm'
import PoemList from '../components/PoemList'

class Poem extends Component {
  componentDidMount() {
    PoemActions.sync(this.props.store.date)
  }

  componentWillReceiveProps(nextProps) {
    PoemActions.sync(nextProps.store.date)
  }

  render() {
    return (
      <AltContainer
        stores={{ store: PoemStore }}
        actions={{ actions: PoemActions }}
      >
        <PoemForm date={this.props.store.date} />
        <PoemList />
      </AltContainer>
    )
  }
}

export default Poem