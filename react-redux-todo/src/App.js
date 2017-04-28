import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ADD_TODO, REMOVE_TODO, addTodo } from './actions/actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo App</h2>
        </div>
        <p className="App-intro">
          What do you want to do today?
        </p>
      </div>
    );
  }
}

export default App;
