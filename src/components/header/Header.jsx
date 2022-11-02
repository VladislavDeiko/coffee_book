import React from 'react';
import iconBeans from '../../assets/icons/coffee-beans.png'

import './header.scss'

function Header() {
  return (
    <header className="header">
        <div className="header__title">
          <img src={iconBeans} alt="icon_beans" className="header__icon"/>
          <span>Coffee</span>Book
        </div>
        
        <div className="header__hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
  )
}

export default Header