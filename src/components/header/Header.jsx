import React from 'react';
import { useState } from 'react';
import iconBeans from '../../assets/icons/coffee-beans.png'

import './header.scss'

function Header() {

  const [activeHambureger, setActiveHamburger] = useState(false)


  return (
    <header className="header">
        <div className="header__title">
          <img src={iconBeans} alt="icon_beans" className="header__icon"/>
          <span>Coffee</span>Book
        </div>
        
        <div onClick={() => setActiveHamburger(!activeHambureger)} 
             className={`header__hamburger ${activeHambureger ? 'active' : null}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
  )
}

export default Header