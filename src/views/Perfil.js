// import React from "react";

// import Lobato from "../assets/lobato.png";

// class Perfil extends React.Component {
//   render() {
//     const containerStyle = {
//       backgroundColor: "#fff",
//       height: "100vh", // 100% da altura da tela
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center", // Centraliza verticalmente
//       alignItems: "center", // Centraliza horizontalmente
//       padding: "20px", // ou qualquer outro valor de preenchimento desejado
//     };

//     const textStyle = {
//       color: "#000", // Cor do texto
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center", // Centraliza verticalmente
//       alignItems: "center", // Centraliza horizontalmente
//     };

//     return (
//       <>
//         <div style={containerStyle}>
//           <div>
//             <h1 className="display-3" style={textStyle}>
//               Perfil
//             </h1>
//             <p className="lead" style={textStyle}>
//               Nome
//             </p>
//             <p className="lead" style={textStyle}>
//               Email
//             </p>
//             <p className="lead" style={textStyle}>
//               Faixa
//             </p>
//           </div>
//         </div>

//         <div
//           className="text-center text-white"
//           style={{ backgroundColor: "#000", padding: "0" }}
//         >
//           <a href="#/" className="navbar-brand" style={{ color: "#fcfc01" }}>
//             <img
//               src={Lobato}
//               alt="Lobato"
//               style={{ marginTop: "5px", width: "120px" }}
//             />
//           </a>
//           <br />
//           Endereço: Travessa SN 03, 516-546 - Cidade Nova Ananindeua - Pará
//           67130-640 Brasil
//           <br />
//           Contato: (91) 98765-4321
//           <div
//             className="p-3 d-flex justify-content-center"
//             style={{ backgroundColor: "#000" }}
//           >
//             &copy; {new Date().getFullYear()} Copyright:{" "}
//             <a
//               className="text-white"
//               href="https://lobatotopteam.negocio.site/"
//             >
//               Lobato TOP TEAM
//             </a>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Perfil;



import React, { useContext } from "react";
import { AuthContext } from "../main/ProvedorDeAutentificacao";
import Lobato from "../assets/lobato.png";

import {  FaHome, FaUser, FaSignOutAlt, FaCog, FaUserShield, } from 'react-icons/fa';

import { MdEmail } from "react-icons/md";

import { MdOutlineSportsHockey } from "react-icons/md";

const Perfil = () => {
  const { usuarioAutenticado } = useContext(AuthContext);

  const containerStyle = {
    backgroundColor: "#fff",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  const textStyle = {
    color: "#000",
   

    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div style={containerStyle}>


        <div>
          <h1 className="display-3" style={textStyle}>
            Perfil
          </h1>
          <p className="lead" style={textStyle}>
            <FaUser /> {usuarioAutenticado.nome}
          </p>
          <p className="lead" style={textStyle}>
            <MdEmail />  {usuarioAutenticado.email}
          </p>
          <p className="lead" style={textStyle}>
            <MdOutlineSportsHockey /> {usuarioAutenticado.faixa.nome}
          </p>
        </div>

      </div>

      <div
        className="text-center text-white"
        style={{ backgroundColor: "#000", padding: "0" }}
      >
        <a href="#/" className="navbar-brand" style={{ color: "#fcfc01" }}>
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
          <a className="text-white" href="https://lobatotopteam.negocio.site/">
            Lobato TOP TEAM
          </a>
        </div>
      </div>
    </>
  );
};

export default Perfil;

