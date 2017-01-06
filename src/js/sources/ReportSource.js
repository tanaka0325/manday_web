import Api from '../utils/apiUtils'
import ReportAction from '../actions/ReportActions'

class ReportSource {
  static API_URL = 'http://localhost:9999/reports'

  static fetchAt(date) {
    Api.ajaxGet(`${this.API_URL}/date/${date}`)
      .then(ReportAction.fetchedReports)
  }

  static add(report) {
    Api.ajaxPost(this.API_URL, report)
      .then(ReportAction.addedReport)
  }

  static delete(id) {
    Api.ajaxDelete(`${this.API_URL}/${id}`)
  }
}

export default ReportSource
