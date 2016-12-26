import alt from '../alt'
import ReportSource from '../sources/ReportSource'

class ReportActions {
  constructor() {
    this.generateActions(
      'sync',
      'fetchedReports',
      'addedReport',
    )
  }

  addReport(report) {
    ReportSource.add(report)
  }

  deleteReport(id) {
    ReportSource.delete(id)
  }
}

export default alt.createActions(ReportActions)
