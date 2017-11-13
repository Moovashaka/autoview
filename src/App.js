import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Nav  from './layout/Nav.js';
import  Main from './layout/Main.js';
import  Footer  from './layout/Footer.js';
import  Gallery  from './layout/Gallery.js';
import  Comments  from './layout/Comments.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Gallery />
        <Comments />
        <Footer />
      </div>
    );
  }
}

export default App;
