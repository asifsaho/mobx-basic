import React, { Component } from 'react';
import Header from './Header';
import logo from './logo.svg';
import './App.css';
import store from './Store'
import Footer from './Footer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header store={store} logo={logo}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer store={store}/>
      </div>
    );
  }
}

export default App;
