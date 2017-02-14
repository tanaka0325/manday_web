import React, { Component } from 'react'
import connectToStores from 'alt-utils/lib/connectToStores'

import DateStore from '../stores/DateStore'
import TaskStore from '../stores/TaskStore'
import TaskActions from '../actions/TaskActions'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

class TaskContainer extends Component {
  static getStores() {
    return [DateStore, TaskStore]
  }

  static getPropsFromStores() {
    return {
      ...DateStore.getState(),
      ...TaskStore.getState(),
    }
  }

  componentDidMount() {
    TaskActions.sync(this.props.date)
  }

  render() {
    const tasksNotYet = this.props.tasks.filter((task) => { return (task.status === 'not_yet') })
    const tasksDoing = this.props.tasks.filter((task) => { return (task.status === 'doing') })
    const tasksDone = this.props.tasks.filter((task) => { return (task.status === 'done') })
    return (
      <div>
        <TaskForm actions={TaskActions} date={this.props.date} />
        <TaskList actions={TaskActions} tasks={tasksNotYet} label="TODO" />
        <TaskList actions={TaskActions} tasks={tasksDoing} label="DOING" />
        <TaskList actions={TaskActions} tasks={tasksDone} label="DONE" />
      </div>
    )
  }
}

export default connectToStores(TaskContainer)
