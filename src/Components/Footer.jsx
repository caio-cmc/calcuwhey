import React from "react";
import "../Styles/Components/Footer.scss"

function Footer() {
  return (
    <footer className="footer-main">
      <p>
        Feito por
          <a className="footer-caio" href="https://github.com/caio-cmc" target="_blank" rel="noreferrer">
            <b> Caio César</b>
          </a> em 2023
      </p>
      <p className="footer-disclaimer"><b>Atenção: </b>A WheyCulator não está aqui para dizer qual a melhor marca de whey do mercado, apenas para comparar as quantidades de proteína em suas composições. Procure sempre a opinião de um profissional qualificado.</p>
    </footer>
  )
}

export default Footer;