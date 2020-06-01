import React from 'react';
import logo from './logo.svg';

const Header = () => {
  return (
  <section className="header">
    <img className="shrine-logo" src={logo} alt="logo" />
    <h1>SHRINE</h1>
  </section>
  )
}

export default Header