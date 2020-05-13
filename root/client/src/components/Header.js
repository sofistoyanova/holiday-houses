import React from 'react';
import Nav from './Nav.js'
import MainFilter from './MainFilter.js'


function Header() {
  return (
    <div className="Header">
      <Nav></Nav>
      <MainFilter></MainFilter>
    </div>
  );
}

export default Header;