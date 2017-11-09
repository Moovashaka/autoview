import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Nav  from './layout/Nav.js';
import  Main from './layout/Main.js';
import  Footer  from './layout/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
