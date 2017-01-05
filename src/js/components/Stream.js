import React, { Component } from 'react'

import StreamRow from './StreamRow'

class Stream extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const streamRows = Object.keys(this.props.StreamStore.times).map((hour) => {
      return <StreamRow key={hour} hour={hour} list={this.props.StreamStore.times[hour]} />
    })

    const styles = {
      section: {
        padding: '0 50px',
      },
    }

    return (
      <section className="" style={styles.section}>
        <div className="container">
          { streamRows }
        </div>
      </section>
    )
  }
}

export default Stream
