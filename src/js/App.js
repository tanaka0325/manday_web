import React from 'react'
import AltContainer from 'alt-container'

import Header from './components/Header'
import Date from './components/Date'
import PoemContainer from './containers/PoemContainer'
import TaskContainer from './containers/TaskContainer'

import DateStore from './stores/DateStore'
import DateActions from './actions/DateActions'

const App = () => {
  return (
    <AltContainer
      stores={{ store: DateStore }}
    >
      <Header />
      <Date actions={DateActions} />
      <TaskContainer />
      <PoemContainer />
    </AltContainer>
  )
}

export default App
