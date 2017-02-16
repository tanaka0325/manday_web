import alt from '../alt'
import TaskActions from './TaskActions'
import PoemActions from './PoemActions'

class DateActions {
  constructor() {
    this.generateActions(
      'nextDate',
      'prevDate',
      'gotoToday',
    )
  }

  changeAppDate(date) {
    TaskActions.sync(date)
    PoemActions.sync(date)
  }
}

export default alt.createActions(DateActions)
