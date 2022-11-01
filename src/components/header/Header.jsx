import React from 'react';

import './header.scss'

function Header() {
  return (
    <header className="header">
        <div className="header__title"><span>Coffe</span>Book</div>
        <div className="header__hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
  )
}

export default Header