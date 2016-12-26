import React from 'react'

const ReportList = (props) => {
  return (
    <ul>
      {props.store.reports.map((report) => {
        return (
          <li key={report.id}>{report.title} : {report.body}
            <button onClick={() => { props.actions.deleteReport(report.id) }}>
              delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default ReportList
