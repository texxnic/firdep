import React, { Component } from 'react';
import './App.css';
import Header from './header/header';


class App extends Component {
  render() {
    return (
      <div className="appWrap">
        <Header />
        <div className="innerText">
          <h2 className="innetText__h"></h2>
          <p className="innetText__p"></p>
        </div>
      </div>
    );
  }
}

export default App;
