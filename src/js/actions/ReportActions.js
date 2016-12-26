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

  deleteReport(report) {
    ReportSource.delete(report.id)
    return report
  }
}

export default alt.createActions(ReportActions)
