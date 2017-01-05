import React, { Component } from 'react'
import AltContainer from 'alt-container'

import StreamStore from '../stores/StreamStore'
import Stream from '../components/Stream'

import PoemStore from '../stores/PoemStore'

class StreamContainer extends Component {
  render() {
    return (
      <AltContainer
        stores={{
          StreamStore,
          PoemStore,
        }}
      >
        <Stream />
      </AltContainer>
    )
  }
}

export default StreamContainer
