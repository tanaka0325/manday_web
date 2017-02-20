import React from 'react'
import moment from 'moment'

const Date = (props) => {
  const today = moment().format('YYYY-MM-DD')
  const displayDate = () => {
    if (props.store.date !== today) {
      return <p><a onClick={() => { props.actions.gotoToday() }}>{props.store.date}</a></p>
    } else {
      return <p>{props.store.date}</p>
    }
  }

  return (
    <section className="date">
      <div className="container content is-large">
        <div className="columns">
          <div className="column is-4 has-text-right">
            <button onClick={() => { props.actions.prevDate() }}>◀</button>
          </div>
          <div className="column is-4 has-text-centered">
            {displayDate()}
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
