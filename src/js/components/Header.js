import React from 'react'

const Header = (props) => {
  return (
    <div>
      <button onClick={() => { props.actions.prevDate() }}>prev</button>
      <h2>
        {props.store.date}
        <button onClick={() => { props.actions.gotoToday() }}>today</button>
      </h2>
      <button onClick={() => { props.actions.nextDate() }}>next</button>
    </div>
  )
}

export default Header
