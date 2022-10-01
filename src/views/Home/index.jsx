import React, { useState, useEffect } from "react";

import WellcomeImage from "../../assets/images/wellcome-image.png";
import registroPessoas from "../../assets/images/registro-de-pessoas.png";
import downloadyt from "../../assets/images/download-yt.png";
import biblioteca from "../../assets/images/biblioteca.png";

import Cards from "../../components/Cards";
import CardsAcquirements from "../../components/CardsAcquirements";
import Modal from "../../components/Modal";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../global/styles/Home/home.css";

export default function Home() {
  useEffect(() => {
    document.title = "Matheus Nunes - Portifólio";
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [valueCards, setValueCards] = useState({});

  const images = {
    reactImg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    jsImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    tsImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    htmlImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    cssImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    pythonImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    javaImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    nodeImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    githubImage: "https://img.icons8.com/ios-glyphs/100/FFFFFF/github.png",
    postgresImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    mongoImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    redisImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    neo4jImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
    firebaseImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    androidStudioImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    figmaImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    dockerImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    linuxImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  };

  return (
    <main>
      <Navbar bg="menu-background" expand="lg">
        <Container>
          <Navbar.Brand href="#">Portifólio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#firt-section">Home</Nav.Link>
              <Nav.Link href="#section-who-i-am">Who i am?</Nav.Link>
              <Nav.Link href="#section-projects">Projects</Nav.Link>
              <Nav.Link href="#section-acquirements">Acquirements</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
      <section id="section-acquirements" className="background-section">
        <h2>Acquirements</h2>
        <div id="container-acquirements">
          <CardsAcquirements
            link={images.reactImg}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.reactImg,
                desc: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.jsImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.jsImage,
                desc: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.tsImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.tsImage,
                desc: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.htmlImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.htmlImage,
                desc: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.cssImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.cssImage,
                desc: "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos. ",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.pythonImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.pythonImage,
                desc: "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.javaImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.javaImage,
                desc: "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.nodeImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.nodeImage,
                desc: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.githubImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.githubImage,
                desc: "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.postgresImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.postgresImage,
                desc: "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.mongoImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.mongoImage,
                desc: "MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.redisImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.redisImage,
                desc: "Redis é um armazenamento de estrutura de dados em memória, usado como um banco de dados em memória distribuído de chave-valor, cache e agente de mensagens, com durabilidade opcional.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.neo4jImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.neo4jImage,
                desc: "O Neo4j é um sistema de gerenciamento de banco de dados gráfico desenvolvido pela Neo4j, Inc. Descrito por seus desenvolvedores como um banco de dados transacional compatível com ACID.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.firebaseImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.firebaseImage,
                desc: "O Firebase é um conjunto de serviços de hospedagem para qualquer tipo de aplicativo. Oferece hospedagem NoSQL e em tempo real de bancos de dados, conteúdo, autenticação social e notificações, ou serviços, como um servidor de comunicação em tempo real.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.androidStudioImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.androidStudioImage,
                desc: "Android Studio é um ambiente de desenvolvimento integrado para desenvolver para a plataforma Android. Foi anunciado em 16 de Maio de 2013 na conferência Google I/O. Android Studio é disponibilizado gratuitamente sob a Licença Apache 2.0.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.figmaImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.figmaImage,
                desc: "Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.dockerImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.dockerImage,
                desc: "Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.",
              };
              setValueCards(objectCards);
            }}
          />
          <CardsAcquirements
            link={images.linuxImage}
            funcao={(event) => {
              setModalVisible(true);
              let objectCards = {
                link: images.linuxImage,
                desc: "Linux é um termo popularmente empregado para se referir a sistemas operativos ou sistemas operacionais que utilizam o Kernel Linux. O núcleo foi desenvolvido pelo programador finlandês Linus Torvalds, inspirado no sistema Minix.",
              };
              setValueCards(objectCards);
            }}
          />
        </div>
      </section>
      <footer>
        <h3>© 2022 Matheus Nunes</h3>
        <div id="container-footer">
          <h3>Communication</h3>
          <div id="container-communications">
            <a href="https://github.com/MatheusNunes133" target="_blank">
              <img
                src="https://img.icons8.com/ios-glyphs/100/FFFFFF/github.png"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-nunes-22b498228/"
              target="_blank"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </footer>
      {modalVisible && (
        <Modal closeModal={setModalVisible} content={valueCards} />
      )}
    </main>
  );
}
