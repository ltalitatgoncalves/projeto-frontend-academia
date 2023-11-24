import React, { useState } from "react";
import NavbarItem from "./navbaritem";
import { AuthConsumer } from "../main/ProvedorDeAutentificacao";
import { Sidebar } from "primereact/sidebar";
import Lobato from "../assets/lobato.png";

import {  FaHome, FaUser, FaSignOutAlt, FaCog, FaUserShield } from 'react-icons/fa';

import { MdSportsKabaddi } from "react-icons/md";

function Navbar(props) {
  const [visible, setVisible] = useState(false);

  const menuFaixa = () => {
    if (visible) setVisible(false);
    else setVisible(true);

    console.log(visible);
  };

  const sair = () => {
    setVisible(false);
    props.deslogar();
  };

  if (props.isAutenticado) {

    const menuItems = [
      { label: <span>Home</span>, icon: <FaHome />, onClick: menuFaixa, href: "#/home" },
      { label: <span>Treinos</span>, icon: <MdSportsKabaddi />, onClick: menuFaixa, href: "#/treinos" },
      { label: <span>Perfil</span>, icon: <FaUser />, onClick: menuFaixa, href: "#/perfil" },
      { label: <span>Sair</span>, icon: <FaSignOutAlt />, onClick: sair, href: "#/login" },
    ];
    
    return (
      <>
        <Sidebar
          visible={visible}
          position="left"
          baseZIndex={1000000}
          style={{ height: "100vh", textAlign: "center" }}
          onHide={menuFaixa}
        >
          <div className="p-sidebar-full center mb-6">
            <div className="sidebar">
              <ul className="navbar-nav">
                <NavbarItem
                  render={props.isAutenticado}
                  click={menuFaixa}
                  label=<span style={{ color: "#000" }}>
                            <FaHome style={{ marginRight: "10px" }} /> Home
                          </span>
                  href="#/home"
                  
                />
                <NavbarItem
                  render={props.isAutenticado}
                  click={menuFaixa}
                  label=<span style={{ color: "#000" }}>
                            <MdSportsKabaddi style={{ marginRight: "10px" }} /> Treinos
                          </span>
                  href="#/treinos"
                />

                <NavbarItem
                  render={props.isAutenticado}
                  click={menuFaixa}
                  label=<span style={{ color: "#000" }}>
                            <FaUser style={{ marginRight: "10px" }} /> Perfil
                          </span>
                  href="#/perfil"
                />

                <NavbarItem
                  render={props.isAutenticado}
                  click={sair}
                  label=<span style={{ color: "#000" }}>
                            <FaSignOutAlt style={{ marginRight: "10px" }} /> Sair
                          </span>
                  href="#/login"
                />
                <AuthConsumer>
                  {(context) =>
                    context.isAutenticado &&
                    context.usuarioAutenticado.admin ? (
                      <NavbarItem
                        render={props.isAutenticado}
                        click={menuFaixa}
                        label=<span style={{ color: "#000" }}>
                            <FaUserShield style={{ marginRight: "10px" }} /> Admin
                          </span>
                        href="#/admin"
                      />
                    ) : null
                  }
                </AuthConsumer>
              </ul>
            </div>
          </div>
        </Sidebar>

        <div
          className="navbar navbar-expand-lg fixed-top navbar-dark"
          style={{ backgroundColor: "#000" }}
        >
          <div className="container">
            <a href="#/" className="navbar-brand" style={{ color: "#fcfc01" }}>
              <img
                src={Lobato}
                alt="Lobato"
                style={{ marginTop: "5px", width: "120px" }}
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="true"
              aria-label="Toggle navigation"
              onClick={menuFaixa}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav">
                <NavbarItem
                  render={props.isAutenticado}
                  label={<span style={{ color: "#fcfc01" }}>Home</span>}
                  href="#/home"
                />
                <NavbarItem
                  render={props.isAutenticado}
                  label={
                    <span style={{ color: "#fcfc01" }}>Área do Aluno</span>
                  }
                  href="#/treinos"
                />

                <NavbarItem
                  render={props.isAutenticado}
                  label={<span style={{ color: "#fcfc01" }}>Perfil</span>}
                  href="#/perfil"
                />

                <NavbarItem
                  render={props.isAutenticado}
                  click={props.deslogar}
                  label={<span style={{ color: "#fcfc01" }}>Sair</span>}
                  href="#/login"
                />

                <AuthConsumer>
                  {(context) =>
                    context.isAutenticado &&
                    context.usuarioAutenticado.admin ? (
                      <NavbarItem
                        render={props.isAutenticado}
                        label={<span style={{ color: "#fcfc01" }}>Admin</span>}
                        href="#/admin"
                      />
                    ) : null
                  }
                </AuthConsumer>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return false;
  }
}

export default () => (
  <AuthConsumer>
    {(context) => (
      <Navbar
        isAutenticado={context.isAutenticado}
        deslogar={context.encerrarSessao}
      />
    )}
  </AuthConsumer>
);
