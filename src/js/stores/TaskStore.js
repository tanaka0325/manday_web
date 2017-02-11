import alt from '../alt'
import TaskActions from '../actions/TaskActions'

class TaskStore {
  constructor() {
    this.bindActions(TaskActions)
    this.tasks = []
    this.loading = false
  }

  onFetched(tasks) {
    this.loading = false
    this.tasks = tasks
  }

  onAdded(task) {
    this.tasks.push(task)
  }

  onDelete(taskToDestroy) {
    this.tasks = this.tasks.filter((task) => {
      return task !== taskToDestroy
    })
  }
}

export default alt.createStore(TaskStore, 'TaskStore')
