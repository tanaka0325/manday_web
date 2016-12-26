import alt from '../alt'
import ReportActions from '../actions/ReportActions'
import ReportSource from '../sources/ReportSource'

class ReportStore {
  constructor() {
    this.bindActions(ReportActions)
    this.reports = []
    this.loading = false
  }

  onSync() {
    this.loading = true
    ReportSource.fetch()
  }

  onFetchedReports(reports) {
    this.loading = false
    this.reports = reports
  }

  onAddedReport(report) {
    this.reports.push(report)
  }
}

export default alt.createStore(ReportStore, 'ReportStore')
