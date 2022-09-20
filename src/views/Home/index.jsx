import React from "react";
import "../../global/styles/Home/home.css";

import WellcomeImage from "../../assets/images/wellcome-image.png";

export default function Home() {
  return (
    <main>
      <header id="header">
        <nav id="menu">
          <h2>Portifólio</h2>
          <div id="menu-options">
            <a href="#">
              <p>Home</p>
            </a>
            <a href="#section-who-i-am">
              <p>Who I am?</p>
            </a>
            <a href="#">
              <p>Projects</p>
            </a>
            <a href="#">
              <p>Acquirements</p>
            </a>
          </div>
        </nav>
      </header>
      <section id="firt-section">
        <div id="container-wellcome">
          <div id="container-apresentation">
            <p>Hello, Wellcome! My name is</p>
            <span id="span-my-name">Matheus Nunes</span>
            <p>
              I'm a <span id="span-my-type">Full Stack Developer</span>
            </p>
          </div>
          <img src={WellcomeImage} alt="" />
        </div>
      </section>
      <section id="section-who-i-am">
        <div id="container-who-i-am">
          <img
            src="https://avatars.githubusercontent.com/u/80282447?v=4"
            alt=""
          />
          <div id="container-desc">
            <h2>Who i am?</h2>
            <p>
              My name is Matheus Nunes Miguel. I have a degree in informatics
              from Ecit Nicéa Claudino in the city of Cajazeiras-PB and I am
              studying the superior course of Systems Analysis and Development
              at the IFPB campus Cajazeiras. I am currently a consultant for the
              junior company Loopis - Soluções Tecnológicas and I work in the
              project and commercial area of the same. I really like the IT
              area, I have always shown curiosity to understand how applications
              and applications work, I am constantly learning, always looking to
              improve my knowledge and skills.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
