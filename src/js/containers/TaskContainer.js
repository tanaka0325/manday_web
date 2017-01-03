import React, { Component } from 'react'
import AltContainer from 'alt-container'

import TaskStore from '../stores/TaskStore'
import TaskActions from '../actions/TaskActions'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

class Task extends Component {
  componentDidMount() {
    TaskActions.sync(this.props.store.date)
  }

  componentWillReceiveProps(nextProps) {
    TaskActions.sync(nextProps.store.date)
  }

  render() {
    return (
      <AltContainer
        stores={{ store: TaskStore }}
        actions={{ actions: TaskActions }}
      >
        <TaskForm date={this.props.store.date} />
        <TaskList />
      </AltContainer>
    )
  }
}

export default Task
