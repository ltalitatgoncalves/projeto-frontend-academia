import React from "react";
import UsuarioService from "../app/service/usuarioService";
import { Button } from "primereact/button";
import { AuthContext } from "../main/ProvedorDeAutentificacao";
import "./home.css";
import { Carousel } from "react-bootstrap";

import Lobato from "../assets/lobato.png";
import fundoUm from "../assets/fundoUm.jpeg";
import fundoDois from "../assets/fundoDois.jpeg";
import fundoTres from "../assets/fundoTres.jpeg";

import fundoQuatro from "../assets/fundoQuatro.jpeg";

import Calendar from "react-calendar"; // Importe o componente Calendar

class Home extends React.Component {
  constructor() {
    super();
    this.apiService = new UsuarioService();
  }

  state = {
    user: "",
    saldo: 0,
    saldoClass: "",
    faixa: "",
  };

  componentDidMount() {
    const user = this.context.usuarioAutenticado;

    if (user && user.faixa && user.faixa.nome) {
      console.log("BBBBBBBBBBB", user.faixa.nome);
      this.setState({ user: user.nome, faixa: user.faixa });
    } else {
      console.log("Usuário ou faixa não definidos corretamente");
      // Se desejar, você pode definir valores padrão para user e faixa aqui
      this.setState({
        user: "Usuário Indefinido",
        faixa: { nome: "Faixa Indefinida" },
      });
    }
  }

  cadastrarLancamentos = () => {
    this.props.history.push("/treinos");
  };

  primeiroNome = () => {
    const primeiroNome = this.state.user.split(" ").shift();
    return primeiroNome.toUpperCase().charAt(0).concat(primeiroNome.slice(1));
  };

  toggleCalendar = () => {
    // Função para mostrar/ocultar o calendário
    this.setState((prevState) => ({
      showCalendar: !prevState.showCalendar,
    }));
  };

  render() {
    const { user, faixa } = this.state;

    return (
      <>
        <div
          style={{
            paddingTop: "55px",
            paddingBottom: "50px",
            backgroundColor: "#fff",
          }}
        ></div>
        <div style={{ paddingTop: "10px", backgroundColor: "#000" }}>
          <section>
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100 d-none d-md-block" // Mostrar em telas médias e maiores
                  style={{ maxHeight: "300px", width: "100%" }} // Altura máxima para celulares
                  src={fundoTres}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 d-none d-md-block" // Mostrar em telas médias e maiores
                  style={{ maxHeight: "300px", width: "100%" }} // Altura máxima para celulares
                  src={fundoUm}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 d-none d-md-block" // Mostrar em telas médias e maiores
                  style={{ maxHeight: "300px", width: "100%" }} // Altura máxima para celulares
                  src={fundoDois}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </section>
        </div>
        <div
          className="home-container"
          style={{ width: "100%", paddingTop: "30px", backgroundColor: "#fff" }}
        >
          <div className="container" id="dark-1">
            <h1 className="display-3">Bem Vindo(a) {this.primeiroNome()}!</h1>
            <h2 className="display-3">{faixa.nome}</h2>

            <Button
                label="Meus Treinos"
                icon="pi pi-plus"
                className="mr p-button-success"
                onClick={this.cadastrarLancamentos}
                style={{
                  backgroundColor: "black",
                  color: "#fcfc01", // Amarelo
                  border: "none",
                }}
              />
            <img
              className="d-block w-100 d-none d-md-block" // Mostrar em telas médias e maiores
              style={{ width: "100%" }} // Altura máxima para celulares
              src={fundoQuatro}
              alt="Third slide"
            />

            <hr className="lead" />
            <p className="lead">
        
              {/* 
              <Button
                label="Ver Horários"
                icon="pi pi-caret-right"
                className="mr p-button-secondary"
                onClick={this.toggleCalendar}
              /> */}
            </p>
          </div>

          {this.state.showCalendar && (
            <div className="calendar-container">
              <Calendar />
            </div>
          )}

          <div className="text-center text-white">
            <div className="p-4 container" style={{ backgroundColor: "#fff" }}>
              <section>
                <div className="d-flex justify-content-center">
                  <div
                    className="embed-responsive embed-responsive-16by9"
                    style={{ maxHeight: "400px" }}
                  >
                    <iframe
                      className="embed-responsive-item shadow-1-strong rounded"
                      src="https://www.youtube.com/embed/qwFlGL2GhC8"
                      title="YouTube video"
                      allowFullScreen
                      data-gtm-yt-inspected-2340190_699="true"
                    ></iframe>
                  </div>
                </div>
              </section>
            </div>

            <div
              className="text-center text-white"
              style={{ backgroundColor: "#000", padding: "0" }}
            >
              <a
                href="#/"
                className="navbar-brand"
                style={{ color: "#fcfc01" }}
              >
                <img
                  src={Lobato}
                  alt="Lobato"
                  style={{ marginTop: "5px", width: "120px" }}
                />
              </a>
              <br />
              Endereço: Travessa SN 03, 516-546 - Cidade Nova Ananindeua - Pará
              67130-640 Brasil
              <br />
              Contato: (91) 98765-4321
              <div
                className="p-3 d-flex justify-content-center"
                style={{ backgroundColor: "#000" }}
              >
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a
                  className="text-white"
                  href="https://lobatotopteam.negocio.site/"
                >
                  Lobato TOP TEAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Home.contextType = AuthContext;

export default Home;
