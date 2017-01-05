import React from 'react'
import AltContainer from 'alt-container'

import Header from './components/Header'
import Date from './components/Date'
import PoemContainer from './containers/PoemContainer'
import TaskContainer from './containers/TaskContainer'
import ReportContainer from './containers/ReportContainer'
import StreamContainer from './containers/StreamContainer'

import DateStore from './stores/DateStore'
import DateActions from './actions/DateActions'

const App = () => {
  return (
    <AltContainer
      stores={{ store: DateStore }}
    >
      <Header actions={DateActions} />
      <Date actions={DateActions} />
      <PoemContainer />
      <TaskContainer />
      <ReportContainer />
      <StreamContainer />
    </AltContainer>
  )
}

export default App
