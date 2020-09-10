import React from 'react';
import '../assets/styles/components/Header.scss';

import Logo from '../assets/static/Logo.png';
import userIcon from '../assets/static/userIcon.png';

const Header = () => (
  <header className="header">
    <img className="header__img" src={Logo}alt="imagen logo Spkinspanish" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="User" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
