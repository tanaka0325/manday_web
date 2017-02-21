import moment from 'moment'

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

  unplay(task) {
    const params = { status: 'not_yet' }
    MandaySource.update(this.endpoint, task.id, params)
    return task
  }

  done(task) {
    const params = { status: 'done' }
    MandaySource.update(this.endpoint, task.id, params)
    return task
  }

  exportToday(task) {
    const today = moment().format('YYYY-MM-DD')
    const params = { date: today }
    MandaySource.update(this.endpoint, task.id, params)
    return task
  }

  star(task) {
    const params = { priority: 'high' }
    MandaySource.update(this.endpoint, task.id, params)
    return task
  }

  unStar(task) {
    const params = { priority: 'normal' }
    MandaySource.update(this.endpoint, task.id, params)
    return task
  }


  delete(task) {
    MandaySource.delete(this.endpoint, task.id)
    return task
  }
}

export default alt.createActions(TaskActions)
