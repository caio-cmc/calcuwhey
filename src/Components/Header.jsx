import React, { useContext } from "react";
import WheyContext from "../Context/WheyContext";
import CalcuwheyLogo from "../Images/Calcuwhey-logo.png"
import "../Styles/Components/Header.scss"

function Header() {
  const { isScrolled } = useContext(WheyContext);

  return (
    <header className={ isScrolled ? "header-main-collapsed" : "header-main-fullsize" }>
      <a href="#main">
        <img className="header-logo" src={ CalcuwheyLogo } alt="Calcuwhey logo" />
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