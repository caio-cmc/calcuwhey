import React, { useContext } from "react";
import WheyContext from "../Context/WheyContext";
import CalcuwheyLogo from "../Images/Calcuwhey-logo.png"
import "../Styles/Components/Header.scss"

function Header() {
  const { isScrolled } = useContext(WheyContext);

  return (
    <header data-testid="header-test" className={ isScrolled ? "header-main-collapsed" : "header-main-fullsize" }>
      <a href="#main">
        <img data-testid="logo-header-test" className="header-logo" src={ CalcuwheyLogo } alt="Calcuwhey logo" />
      </a>
      <nav className="header-nav">
        <a data-testid="howto-bt-header-test" className="header-nav-links" href="#howto">
          Como usar
        </a>
        <a data-testid="calc-bt-header-test" className="header-nav-links" href="#calculator">
          Calculadora
        </a>
      </nav>
    </header>
  )
}

export default Header;