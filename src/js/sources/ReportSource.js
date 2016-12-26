import Api from '../utils/apiUtils'
import ReportAction from '../actions/ReportActions'

const API_URL = 'http://localhost:9999/reports'

const ReportSource = {
  fetchAt: (date) => {
    Api.ajaxGet(`${API_URL}/date/${date}`)
      .then(ReportAction.fetchedReports)
  },

  add: (report) => {
    Api.ajaxPost(API_URL, report)
      .then(ReportAction.addedReport)
  },

  delete: (id) => {
    Api.ajaxDelete(`${API_URL}/${id}`)
      .then(ReportAction.sync)
  },
}

export default ReportSource
