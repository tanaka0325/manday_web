import React, { Component } from 'react'
import AltContainer from 'alt-container'

import ReportStore from '../stores/ReportStore'
import ReportActions from '../actions/ReportActions'
import ReportForm from '../components/ReportForm'
import ReportList from '../components/ReportList'

class Report extends Component {
  componentDidMount() {
    ReportActions.sync()
  }

  render() {
    return (
      <AltContainer
        stores={{ store: ReportStore }}
        actions={{ actions: ReportActions }}
      >
        <ReportForm />
        <ReportList />
      </AltContainer>
    )
  }
}

export default Report
