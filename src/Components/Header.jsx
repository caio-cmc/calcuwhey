import React from "react";
import Icon from "../Images/icon.png"

function Header() {
  return (
    <header>
      <a href="#main">
        <img src={ Icon } alt="Wheyculator logo" />
      </a>
      <nav>
        <a href="#howto">
          Como usar
        </a>
        <a href="#calculator">
          Calculadora
        </a>
      </nav>
    </header>
  )
}

export default Header;