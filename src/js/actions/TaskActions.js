import alt from '../alt'
import MandaySource from '../sources/MandaySource'

class TaskActions {
  constructor() {
    this.generateActions(
      'fetched',
      'added',
    )
    this.endpoint = 'tasks'
  }

  sync(date) {
    MandaySource.fetchAt(this.endpoint, date, this.fetched)
  }

  add(task) {
    MandaySource.add(this.endpoint, task, this.added)
  }

  delete(task) {
    MandaySource.delete(this.endpoint, task.id)
    return task
  }
}

export default alt.createActions(TaskActions)
