import React from 'react';
import Vector from '../images/Vector.svg';
export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Vector} alt="логотип Место Россия" />
    </header>
  )
}