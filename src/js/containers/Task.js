import React, { Component } from 'react'
import AltContainer from 'alt-container'

import TaskStore from '../stores/TaskStore'
import TaskActions from '../actions/TaskActions'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

class Task extends Component {
  componentDidMount() {
    TaskActions.sync()
  }

  render() {
    return (
      <div>
        <AltContainer stores={{ store: TaskStore }} actions={{ actions: TaskActions }}>
          <TaskForm />
          <TaskList />
        </AltContainer>
      </div>
    )
  }
}

export default Task
