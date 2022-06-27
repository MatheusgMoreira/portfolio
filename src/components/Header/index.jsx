import React from "react";
import '../css/style.css';

function Header() {
  return (
    <div className="header--bg">
      <nav>
        <ul>
          <li>Início</li>
          <li>Sobre</li>
          <li>Informações</li>
          <li>Portfólio</li>
          <li>Contato</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
