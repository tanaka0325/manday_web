import React, { Component } from 'react'
import connectToStores from 'alt-utils/lib/connectToStores'

import DateStore from '../stores/DateStore'
import PoemStore from '../stores/PoemStore'
import PoemActions from '../actions/PoemActions'
import PoemList from '../components/PoemList'
import PoemEditor from '../components/PoemEditor'

import PanelActions from '../actions/PanelActions'

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
    const modal = (this.props.is_modal) ? <PoemEditModal poem={this.props.edit_poem} actions={PoemActions} handleEditorChange={this.handleChange} handleEditorSubmit={this.handleSubmit} /> : false 
    const expandCls = (this.props.is_expand) ? 'fa fa-angle-up' : 'fa fa-angle-down'
    const expandBodyCls = (this.props.is_expand) ? 'message-body open' : 'message-body close'
    return (
      <article className="message">
        <div className="message-header">
          <p>Poem</p>
          <i className={expandCls} onClick={PanelActions.toggleExpand} />
        </div>
        <div className={expandBodyCls}>
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
