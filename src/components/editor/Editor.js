import React, { Component } from 'react'
import AceEditor from 'react-ace'

import '../editor/modes/mode-solidity'
import 'brace/theme/tomorrow_night'

export default class Editor extends Component {

  _onChange(event) {
    console.log(`CALLED ON CHANGE`)
  }

  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="tomorrow_night"
        tabSize={2}
        name="editor"
        onChange={(event) => { this._onChange(event) }}
        editorProps={{$blockScrolling: true}} />
    )
  }

}
