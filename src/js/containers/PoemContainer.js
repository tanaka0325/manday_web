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
  static getStores() {
    return [DateStore, PoemStore]
  }

  static getPropsFromStores() {
    return {
      ...DateStore.getState(),
      ...PoemStore.getState(),
    }
  }

  constructor() {
    super()
    this.state = { text: '' }
  }

  componentDidMount() {
    PoemActions.sync(this.props.date)
  }

  handleChange = (value) => {
    this.setState({ text: value })
  }

  handleSubmit = () => {
    if (!this.state.text.trim()) {
      console.log('no text')
      return
    }
    PoemActions.add({
      user_id: 1,
      date: this.props.date,
      status: 'published',
      body: this.state.text,
    })
    this.setState({ text: ' ' })
  }

  render() {
    return (
      <AltContainer
        stores={{ store: PoemStore }}
        actions={{ actions: PoemActions }}
      >
        <PoemEditor
          value={this.state.text}
          handleEditorChange={this.handleChange}
          handleEditorSubmit={this.handleSubmit}
        />
        <PoemList />
      </AltContainer>
    )
  }
}

export default connectToStores(PoemContainer)
