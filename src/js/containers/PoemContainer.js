import React, { Component } from 'react'
import AltContainer from 'alt-container'
import connectToStores from 'alt-utils/lib/connectToStores'

import DateStore from '../stores/DateStore'
import PoemStore from '../stores/PoemStore'
import PoemActions from '../actions/PoemActions'
import PoemForm from '../components/PoemForm'
import PoemList from '../components/PoemList'

class PoemContainer extends Component {
  static getStores() {
    return [DateStore, PoemStore]
  }

  static getPropsFromStores() {
    return {
      ...DateStore.getState(),
      ...PoemStore.getState(),
    }
  }

  componentDidMount() {
    PoemActions.sync(this.props.date)
  }

  render() {
    return (
      <AltContainer
        stores={{ store: PoemStore }}
        actions={{ actions: PoemActions }}
      >
        <PoemForm date={this.props.date} />
        <PoemList />
      </AltContainer>
    )
  }
}

export default connectToStores(PoemContainer)
