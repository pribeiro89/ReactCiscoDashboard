import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './Background.js';
import Graphics from './Graphics.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cisco Dashboard</h1>
        </header>

        <Background />
        <Graphics />
      </div>
    );
  }
}

export default App;
