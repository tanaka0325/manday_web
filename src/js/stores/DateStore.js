import moment from 'moment'

import alt from '../alt'
import DateActions from '../actions/DateActions'

class DateStore {
  constructor() {
    this.bindActions(DateActions)
    this.date = moment().format('YYYY-MM-DD')
  }

  onNextDate() {
    this.date = moment(this.date).add(1, 'days').format('YYYY-MM-DD')
    DateActions.changeAppDate(this.date)
  }

  onPrevDate() {
    this.date = moment(this.date).add(-1, 'days').format('YYYY-MM-DD')
    DateActions.changeAppDate(this.date)
  }

  gotoToday() {
    this.date = moment().format('YYYY-MM-DD')
    DateActions.changeAppDate(this.date)
  }
}

export default alt.createStore(DateStore, 'DateStore')
