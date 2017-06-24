import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import ViewContainer from './components/ViewContainer'
import Editor from './components/editor/Editor'

import './styles/App.css';

class App extends Component {

  render() {
    return (
      <ViewContainer>
        <h1>Hello, World!!</h1>
        <Editor />
      </ViewContainer>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
