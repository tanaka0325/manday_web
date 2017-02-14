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
    <div>
      <AltContainer stores={{ store: DateStore }} >
        <Header />
        <Date actions={DateActions} />
      </AltContainer>
      <section className="section">
        <div className="columns">
          <div className="column">
            <div className="content">
              <TaskContainer />
            </div>
          </div>
          <div className="column">
            <div className="content">
              <PoemContainer />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
