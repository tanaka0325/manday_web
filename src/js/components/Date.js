import React from 'react'

const Date = (props) => {
  const styles = {
    section: {
      padding: '20px 0',
    },
  }

  return (
    <section style={styles.section}>
      <div className="container content is-large">
        <div className="columns">
          <div className="column is-4 has-text-right">
            <button onClick={() => { props.actions.prevDate() }}>◀</button>
          </div>
          <div className="column is-4 has-text-centered">
            {props.store.date}
            <button onClick={() => { props.actions.gotoToday() }}>today</button>
          </div>
          <div className="column is-4 has-text-left">
            <button onClick={() => { props.actions.nextDate() }}>▶</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Date
