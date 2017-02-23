import React, { Component } from 'react'
import SimpleMDE from 'react-simplemde-editor'
import {} from 'codemirror/mode/markdown/markdown'
// import {} from 'codemirror/mode/gfm/gfm'
import {} from 'codemirror/addon/edit/continuelist'

class PoemEditor2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: props.poem.body,
    }
  }

  handleChange = (value) => {
    this.setState({ text: value })
  }

  handleSubmit = () => {
    if (!this.state.text.trim()) {
      console.log('no text')
      return
    }
    this.props.actions.edit(this.props.poem.id, this.state.text)
    this.setState({ text: ' ' })
  }

  render() {
    const extraKeys = {
      'Ctrl-Enter': () => { this.handleSubmit() },
      'Cmd-Enter': () => { this.handleSubmit() },
      Esc: () => { document.activeElement.blur() },
      Enter: 'newlineAndIndentContinueMarkdownList',
    }
    return (
      <div className="poem-form">
        <SimpleMDE
          // mode="gfm"
          onChange={this.handleChange}
          value={this.state.text}
          options={{
            autofocus: true,
            spellChecker: false,
            indentWithTabs: false,
            status: false,
            toolbar: false,
          }}
          extraKeys={extraKeys}
        />
        <div className="post-button">
          <a onClick={this.handleSubmit} className="button is-dark">post</a>
        </div>
      </div>
    )
  }


}

export default PoemEditor2

// const PoemEditor2 = (props) => {
//   const extraKeys = {
//     'Ctrl-Enter': () => { props.handleEditorSubmit() },
//     'Cmd-Enter': () => { props.handleEditorSubmit() },
//     Esc: () => { document.activeElement.blur() },
//     Enter: 'newlineAndIndentContinueMarkdownList',
//   }
// 
//   return (
//     <div className="poem-form">
//       <SimpleMDE
//         // mode="gfm"
//         onChange={props.handleEditorChange}
//         value={props.value}
//         options={{
//           autofocus: false,
//           spellChecker: false,
//           indentWithTabs: false,
//           status: false,
//           toolbar: false,
//         }}
//         extraKeys={extraKeys}
//       />
//       <div className="post-button">
//         <a onClick={props.handleEditorSubmit} className="button is-dark">post</a>
//       </div>
//     </div>
//   )
// }
// 
// export default PoemEditor2
