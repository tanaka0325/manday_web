import alt from '../alt'

class DateActions {
  constructor() {
    this.generateActions(
      'nextDate',
      'prevDate',
      'gotoToday',
    )
  }
}

export default alt.createActions(DateActions)
