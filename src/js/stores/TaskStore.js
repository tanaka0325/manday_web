import alt from '../alt'
import TaskActions from '../actions/TaskActions'
import TaskSource from '../sources/TaskSource'

class TaskStore {
  constructor() {
    this.bindActions(TaskActions)
    this.tasks = []
    this.loading = false
  }

  onSync() {
    this.loading = true
    TaskSource.fetch()
  }

  onFetchedTasks(tasks) {
    this.loading = false
    this.tasks = tasks
  }

  onAddedTask(task) {
    this.tasks.push(task)
  }
}

export default alt.createStore(TaskStore, 'TaskStore')
