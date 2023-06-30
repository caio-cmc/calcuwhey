import React, { useContext } from "react";
import WheyContext from "../Context/WheyContext";
import Icon from "../Images/icon.png"
import "../Styles/Components/Header.scss"

function Header() {
  const { isScrolled } = useContext(WheyContext);

  return (
    <header className={ isScrolled ? "header-main-collapsed" : "header-main-fullsize" }>
      <a href="#main">
        <img className="header-logo" src={ Icon } alt="Wheyculator logo" />
      </a>
      <nav className="header-nav">
        <a className="header-nav-links" href="#howto">
          Como usar
        </a>
        <a className="header-nav-links" href="#calculator">
          Calculadora
        </a>
      </nav>
    </header>
  )
}

export default Header;