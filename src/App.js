import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParentCounterContainer from './containers/ParentCounterContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <br/>
          <ParentCounterContainer/>
      </div>
    );
  }
}

export default App;
