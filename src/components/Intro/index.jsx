import React from "react";
import '../css/sass/style.scss'
import IntroImg from '../media/intro--img.jpg'

function index() {
  return (
    <div className="intro--bg">
      <div className="intro--img">
      </div>
      <div className="intro--texto">
        <h1>Matheus Gonçalves Moreira</h1>
        <ul>
          <li>Desenvolvedor Front-End</li>
          <li>Belo Horizonte</li>
          <li>19 anos</li>
        </ul>
      </div>
    </div>
  );
}

export default index;
