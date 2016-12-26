import React from 'react'
import AltContainer from 'alt-container'

import Header from './components/Header'
import Poem from './containers/Poem'
import Task from './containers/Task'
import Report from './containers/Report'

import DateStore from './stores/DateStore'
import DateActions from './actions/DateActions'

const App = () => {
  return (
    <AltContainer
      stores={{ store: DateStore }}
    >
      <Header actions={DateActions} />
      <Poem />
      <Task />
      <Report />
    </AltContainer>
  )
}

export default App
