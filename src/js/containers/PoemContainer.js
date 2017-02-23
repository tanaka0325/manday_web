import React, { Component } from 'react'
import connectToStores from 'alt-utils/lib/connectToStores'

import DateStore from '../stores/DateStore'
import PoemStore from '../stores/PoemStore'
import PoemActions from '../actions/PoemActions'
import PoemList from '../components/PoemList'
import PoemEditor from '../components/PoemEditor'

import PoemEditModal from '../components/PoemEditModal'

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
    const modal = (this.props.is_modal) ? <PoemEditModal poem={this.props.edit_poem} actions={PoemActions} handleEditorChange={this.handleChange} handleEditorSubmit={this.handleSubmit} /> : false ;
    return (
      <article className="message">
        <div className="message-header">Poem</div>
        <div className="message-body">
          <PoemEditor
            value={this.state.text}
            handleEditorChange={this.handleChange}
            handleEditorSubmit={this.handleSubmit}
          />
          <PoemList actions={PoemActions} poems={this.props.poems} />
        </div>
        {modal}
      </article>
    )
  }
}

export default connectToStores(PoemContainer)
