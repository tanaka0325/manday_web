import React from 'react'

import StreamNode from './StreamNode'

const StreamRow = (props) => {
  let i = 0
  const nodes = props.list.map((node) => {
    i += 1
    return <StreamNode key={i} node={node} />
  })

  const timeHeader = `${props.hour}:00`

  return (
    <div>
      <hr className="hr-text" data-content={timeHeader} />
      {nodes}
    </div>
  )
}

export default StreamRow
