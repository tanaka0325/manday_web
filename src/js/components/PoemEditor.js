import React from 'react'
import SimpleMDE from 'react-simplemde-editor'

const PoemEditor = (props) => {
  return(
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
    />
  )
}

export default PoemEditor
