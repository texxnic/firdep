import React, { Component } from 'react';
import './header.css';
import './hamburgers.min.css';
import logo from './logo.svg';





class Header extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
      active: false,
      param: 25.5,
    };
  }

  render() {
    return (
    <div className="header">
    <div className="header__wrapper">
      <a href="">
        <img src={logo} className="header__logo" alt=""/>
      </a>
      <button 
      className={this.state.active ? 'hamburger hamburger--arrowalt is-active': 'hamburger hamburger--arrowalt'}  type="button"
      onClick={() => this.setState({active: !this.state.active})} 
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
      <div className={this.state.active ?  'menu' : 'menu menu__closed'}>
      <div className="menu__column menu_column__1">
      <h3 className="menu__h3">Фирбо капитал</h3>
        <a className="menu__link" href="">Наши услуги и продукты</a>
        <a className="menu__link" href="">Информация о компании</a>
        <a className="menu__link" href="">Благотворительность</a>
        <a className="menu__link" href="">Отзывы</a>
        <a className="menu__link" href="">Наши клиенты</a>
        <a className="menu__link" href="">Партнеры и друзья</a>
        <a className="menu__link" href="">Наши награды</a>
        <a className="menu__link" href="">Стать партнером</a>
        <a className="menu__link" href="">Техподдержка</a>
        <a className="menu__link" href="">Связаться с пресс-службой</a>
      </div>
            <div className="menu__column menu_column__1">
      <h3 className="menu__h3">Фирбо капитал</h3>
        <a className="menu__link" href="">Наши услуги и продукты</a>
        <a className="menu__link" href="">Информация о компании</a>
        <a className="menu__link" href="">Благотворительность</a>
        <a className="menu__link" href="">Отзывы</a>
        <a className="menu__link" href="">Наши клиенты</a>
        <a className="menu__link" href="">Партнеры и друзья</a>
        <a className="menu__link" href="">Наши награды</a>
        <a className="menu__link" href="">Стать партнером</a>
        <a className="menu__link" href="">Техподдержка</a>
        <a className="menu__link" href="">Связаться с пресс-службой</a>
      </div>
            <div className="menu__column menu_column__1">
      <h3 className="menu__h3">Фирбо капитал</h3>
        <a className="menu__link" href="">Наши услуги и продукты</a>
        <a className="menu__link" href="">Информация о компании</a>
        <a className="menu__link" href="">Благотворительность</a>
        <a className="menu__link" href="">Отзывы</a>
        <a className="menu__link" href="">Наши клиенты</a>
        <a className="menu__link" href="">Партнеры и друзья</a>
        <a className="menu__link" href="">Наши награды</a>
        <a className="menu__link" href="">Стать партнером</a>
        <a className="menu__link" href="">Техподдержка</a>
        <a className="menu__link" href="">Связаться с пресс-службой</a>
      </div>


      </div>

      
    </div>

    );
  }
}

export default Header;
