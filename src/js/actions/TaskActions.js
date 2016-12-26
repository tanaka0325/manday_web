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

  deleteTask(task) {
    TaskSource.delete(task.id)
    return task
  }
}

export default alt.createActions(TaskActions)
