import React, { Component } from 'react'
import AltContainer from 'alt-container'
import connectToStores from 'alt-utils/lib/connectToStores'

import DateStore from '../stores/DateStore'
import PoemStore from '../stores/PoemStore'
import PoemActions from '../actions/PoemActions'
import PoemForm from '../components/PoemForm'
import PoemList from '../components/PoemList'
import PoemEditor from '../components/PoemEditor'

class PoemContainer extends Component {
  constructor() {
    super()
    this.state = {
      textValue: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

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

  handleChange(value) {
    this.setState({
      textValue: value,
    })
  }

  render() {
    return (
      <AltContainer
        stores={{ store: PoemStore }}
        actions={{ actions: PoemActions }}
      >
        {/* <PoemForm date={this.props.date} /> */}
        <PoemEditor
          value={this.state.textValue}
          handleEditorChange={this.handleChange}
        />
        <PoemList />
      </AltContainer>
    )
  }
}

export default connectToStores(PoemContainer)
