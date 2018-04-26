import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import Calculator from './calc/calc';

window.onscroll = (e) => console.log('zazazaz');

class App extends Component {
      constructor(props) {
    super(props);
    
    this.state = {
    secondScreenActive: false,
    };
  }
  
  render() {
    return (
      <div className="appWrap" onWheel = {(e) => console.log(e)}>
        <Header />
        <div className={this.state.secondScreenActive ? 'jumbo jumbo_disabled' : 'jumbo'}>
          <div className="jumbotext">
          <h1 className="jumbotext__h">
          Проектный депозит</h1>
          <p className="jumbotext__p">
          Это прибыльныйsd продукт с уникальным названием, который подразумевает под собой, что инвестор или вкладчик заключает с компанией договор и получает высокий стабильный доход
          </p>
          <button onClick={() => this.setState({secondScreenActive: !this.state.secondScreenActive})}>Узнать больше</button>
          <button>Заказать звонок</button>
          </div>
          
        </div>
        <div className={this.state.secondScreenActive ? 'secondScreen secondScreenActive' : 'secondScreen'}>
        <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
