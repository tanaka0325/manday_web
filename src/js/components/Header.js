import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p onClick={() => { props.actions.prevDate() }}>prev</p>
      <h2>
        {props.store.date}
      </h2>
      <p onClick={() => { props.actions.nextDate() }}>next</p>
    </div>
  )
}

export default Header
