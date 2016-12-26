import alt from '../alt'

class DateActions {
  constructor() {
    this.generateActions(
      'nextDate',
      'prevDate',
    )
  }
}

export default alt.createActions(DateActions)
