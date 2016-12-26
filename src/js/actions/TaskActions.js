import alt from '../alt'
import TaskSource from '../sources/TaskSource'

class TaskActions {
  constructor() {
    this.generateActions(
      'sync',
      'fetchedTasks',
      'addedTask',
    )
  }

  addTask(task) {
    TaskSource.add(task)
  }

  deleteTask(id) {
    TaskSource.delete(id)
  }
}

export default alt.createActions(TaskActions)
