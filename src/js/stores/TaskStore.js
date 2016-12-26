import alt from '../alt'
import TaskActions from '../actions/TaskActions'
import TaskSource from '../sources/TaskSource'

class TaskStore {
  constructor() {
    this.bindActions(TaskActions)
    this.tasks = []
    this.loading = false
  }

  onSync(date) {
    this.loading = true
    TaskSource.fetchAt(date)
  }

  onFetchedTasks(tasks) {
    this.loading = false
    this.tasks = tasks
  }

  onAddedTask(task) {
    this.tasks.push(task)
  }

  onDeleteTask(taskToDestroy) {
    this.tasks = this.tasks.filter((task) => {
      return task !== taskToDestroy
    })
  }
}

export default alt.createStore(TaskStore, 'TaskStore')
