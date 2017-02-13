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

  play(task) {
    const params = { status: 'doing' }
    MandaySource.update(this.endpoint, task.id, params)
    return task
  }

  done(task) {
    const params = { status: 'done' }
    MandaySource.update(this.endpoint, task.id, params)
    return task
  }

  delete(task) {
    MandaySource.delete(this.endpoint, task.id)
    return task
  }
}

export default alt.createActions(TaskActions)
