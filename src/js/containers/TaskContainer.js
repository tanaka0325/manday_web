import React, { Component } from 'react'
import connectToStores from 'alt-utils/lib/connectToStores'

import TaskStore from '../stores/TaskStore'
import TaskActions from '../actions/TaskActions'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

class TaskContainer extends Component {
  static getStores() {
    return [TaskStore]
  }
  static getPropsFromStores() {
    return TaskStore.getState()
  }

  componentDidMount() {
    TaskActions.sync(this.props.store.date)
  }

  render() {
    const tasksNotYet = this.props.tasks.filter((task) => { return (task.status === 'not_yet') })
    const tasksDoing = this.props.tasks.filter((task) => { return (task.status === 'doing') })
    const tasksDone = this.props.tasks.filter((task) => { return (task.status === 'done') })
    return (
      <div className="content">
        <TaskForm actions={TaskActions} date={this.props.store.date} />
        <h3>todo</h3>
        <TaskList actions={TaskActions} tasks={tasksNotYet} />
        <h3>doing</h3>
        <TaskList actions={TaskActions} tasks={tasksDoing} />
        <h3>done</h3>
        <TaskList actions={TaskActions} tasks={tasksDone} />
      </div>
    )
  }
}

export default connectToStores(TaskContainer)
