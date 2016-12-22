import React from 'react'
import AltContainer from 'alt-container'

import PoemStore from '../stores/PoemStore'
import PoemActions from '../actions/PoemActions'
import PoemForm from '../components/PoemForm'
import PoemList from '../components/PoemList'

const PoemView = () => (
  <div>
    <AltContainer stores={{ store: PoemStore }} actions={{ actions: PoemActions }}>
      <PoemForm />
      <PoemList />
    </AltContainer>
  </div>
)

export default PoemView
