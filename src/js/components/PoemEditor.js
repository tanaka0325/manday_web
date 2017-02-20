import React from 'react'
import SimpleMDE from 'react-simplemde-editor'
import {} from 'codemirror/mode/markdown/markdown'
// import {} from 'codemirror/mode/gfm/gfm'
import {} from 'codemirror/addon/edit/continuelist'

const PoemEditor = (props) => {
  const extraKeys = {
    'Ctrl-Enter': () => { props.handleEditorSubmit() },
    'Cmd-Enter': () => { props.handleEditorSubmit() },
    Esc: () => { document.activeElement.blur() },
    Enter: 'newlineAndIndentContinueMarkdownList',
  }

  return (
    <div className="poem-form">
      <SimpleMDE
        // mode="gfm"
        onChange={props.handleEditorChange}
        value={props.value}
        options={{
          autofocus: false,
          spellChecker: false,
          indentWithTabs: false,
          status: false,
          toolbar: false,
        }}
        extraKeys={extraKeys}
      />
      <div className="post-button">
        <a onClick={props.handleEditorSubmit} className="button is-dark">post</a>
      </div>
    </div>
  )
}

export default PoemEditor
