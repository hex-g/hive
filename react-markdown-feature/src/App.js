import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { read } from 'fs';
//import SimpleMDE from 'simplemde'
import SimpleMDE from "react-simplemde-editor";
import './simplemde.min.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  componentDidMount() {
    /*var simplemde = new SimpleMDE({})
    simplemde.codemirror.on('change', () => {
      this.setState({
        value: simplemde.value()
      })
    })*/
  }

  render() {
    return (
      <SimpleMDE
        id="your-custom-id"
        label="Your label"
        onChange={this.handleChange}
        value={this.state.textValue}
        options={{
          autofocus: true,
          spellChecker: false
          // etc.
        }}
      />
    )
  }
}

export default App