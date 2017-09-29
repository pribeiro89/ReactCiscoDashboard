import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './Background.js';
// import Graphics from './Graphics.js';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cisco Dashboard</h1>
        </header>

        <Background />
      </div>
    );
  }
}

export default App;
