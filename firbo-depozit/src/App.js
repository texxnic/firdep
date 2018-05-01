import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import Calculator from './calc/calc';
import Swipeable from 'react-swipeable';
window.onscroll = (e) => console.log('zazazaz');

class App extends Component {
      constructor(props) {
    super(props);
    this.deltaDet = this.deltaDet.bind(this);
    this.scrollCD = this.scrollCD.bind(this);
    this.state = {
    secondScreenActive: false,
    allowChange: true,
    };
  }
  scrollCD () {
        this.setState({allowChange: true});
  }
  
  // управляем преключением страниц по скролу с таймаутом на функцию scrollCD

  deltaDet(e) {
    if(this.state.allowChange){
      
      if(e.deltaY > 0){
        
        this.setState({
          secondScreenActive: true,
          allowChange: false,
        });
        setTimeout(this.scrollCD, 1200);
      } else {
        
        this.setState({
          secondScreenActive: false,
          allowChange: false,
        });
        setTimeout(this.scrollCD, 1200);
      }
    }
  }

  render() {
    return (
      <div className="appWrap" > 

        <Header />
        <div onWheel = {this.deltaDet} className={this.state.secondScreenActive ? 'jumbo jumbo_disabled' : 'jumbo'}>
          <div className="jumbotext">
          <h1 className="jumbotext__h">
          Проектный депозит</h1>
          <p className="jumbotext__p">
          Это прибыльный продукт с уникальным названием, который подразумевает под собой, что инвестор или вкладчик заключает с компанией договор и получает высокий стабильный доход
          </p>
          <button class="jumbo__moreButton" onClick={() => this.setState({secondScreenActive: !this.state.secondScreenActive})}>Узнать больше</button>
          <button class="jumbo__contactButton">Заказать звонок</button>
          </div>
          
        </div>
        <div  onWheel = {this.deltaDet} className={this.state.secondScreenActive ? 'secondScreen secondScreenActive' : 'secondScreen'}>
        <Calculator/>
        </div>
      </div>
    );
  }
}

export default App;
