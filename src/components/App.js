import React, { Component } from 'react';
import Main from './Main'
import logo from '../logo.svg';

import '../App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <h1 className="text-center">React Photo Gallery</h1>
        <Main/>
      </div>
    );
  }
}

export default App;
