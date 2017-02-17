import React from 'react'
import SimpleMDE from 'react-simplemde-editor'

const PoemEditor = (props) => {
  const extraKeys = {
    // 'Ctrl-Enter': () => { props.handleEditorSubmit() },
    'Cmd-Enter': () => { props.handleEditorSubmit() },
    'Esc': () => {
      document.activeElement.blur()
    }
  }

  return (
    <div className="poem-form">
      <SimpleMDE
        onChange={props.handleEditorChange}
        value={props.value}
        options={{
          autofocus: false,
          spellChecker: false,
          indentWithTabs: false,
          status: false,
          toolbar: false,
        }}
        addKeyMaps={extraKeys}
      />
      <div className="post-button">
        <a onClick={props.handleEditorSubmit} className="button is-dark">post</a>
      </div>
    </div>
  )
}

export default PoemEditor
