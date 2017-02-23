import React from 'react'
import PoemEditor from './PoemEditor'

import PoemEditor2 from '../components/PoemEditor2'

const PoemEditModal = (props) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={props.actions.closeModal}></div>
      <div className="modal-content">
        <div className="box">
          <PoemEditor2 actions={props.actions} poem={props.poem} />
          {/* <div className="content">
            <h2>modal test</h2>
            <p>dummy text.dummy text.dummy text.dummy text.dummy text.dummy text.dummy text.dummy text.dummy text.</p>
          </div> */}
        </div>
      </div>
      <button className="modal-close" onClick={props.actions.closeModal}></button>
    </div>
  )
}

export default PoemEditModal
