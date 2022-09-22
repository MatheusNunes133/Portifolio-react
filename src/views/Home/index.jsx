import React from "react";
import "../../global/styles/Home/home.css";

import WellcomeImage from "../../assets/images/wellcome-image.png";
import registroPessoas from "../../assets/images/registro-de-pessoas.png";
import downloadyt from "../../assets/images/download-yt.png";
import biblioteca from "../../assets/images/biblioteca.png";

import Cards from "../../components/Cards";

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
            <a href="#section-projects">
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
      <section id="section-who-i-am" className="background-section">
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
      <section id="section-projects" className="background-section">
        <h2>Projects</h2>
        <div id="container-cards">
          <Cards
            image={registroPessoas}
            title="People Registration System"
            desc="This one was built using nodejs for the backend. It has data persistence in three different databases, namely: MongoDb, Postgres with Postgis and Neo4J."
            link="https://github.com/MatheusNunes133/BancoDeDados2-ProjetoFinal"
          />
          <Cards
            image={downloadyt}
            title="System to Download Videos and Audio"
            desc="This system was built using python, it aims to receive the url of a youtube video and give the user options to download the video and audio."
            link="https://github.com/MatheusNunes133/Download-Youtube"
          />
          <Cards
            image={biblioteca}
            title="Sistema de Controle de Biblioteca"
            desc="This system was built using the Django framework for web development, it allows a library employee to control the flow of loans, returns and the arrival of new books."
            link="https://github.com/ifpb-cz-ads/pw1-2021-2-ac-s14-miniprojeto-bibliotecadjango"
          />
        </div>
      </section>
    </main>
  );
}
