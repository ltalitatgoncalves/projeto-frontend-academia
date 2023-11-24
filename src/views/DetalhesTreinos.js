// import React from "react";
// import { MdOutlineKeyboardBackspace } from "react-icons/md";

// const DetalhesTreinos = ({ treino, onVoltar }) => {
//   if (!treino) {
//     return null;
//   }

//   const containerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//   };

//   const detalhesStyle = {
//     backgroundColor: "#fff",
//     textAlign: "center",
//   };

//   return (
//     <div style={containerStyle}>
//       <div className="faixa-container" style={detalhesStyle}>
//         <div
//           className="back-button"
//           onClick={onVoltar}
//           style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
//         >
//           <MdOutlineKeyboardBackspace size={30} style={{ marginRight: "5px" }} />
//           Voltar
//         </div>
//         <h2>{treino.nome}</h2>
//         {treino.caminhoImagem && (
//           <img
//             src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
//             alt="Imagem"
//             style={{ maxWidth: "400px", maxHeight: "300px" }}
//           />
//         )}
//         <p>Treino de: {treino.faixa && treino.faixa.nome}</p>
//         <p>Horário: {treino.horarios}</p>
//         <p>Como Fazer: {treino.descricao}</p>
//       </div>
//     </div>
//   );
// };

// export default DetalhesTreinos;

import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const DetalhesTreinos = ({ treino, onVoltar }) => {
  if (!treino) {
    return null;
  }

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const detalhesStyle = {
    backgroundColor: "#fff",
    textAlign: "center",
    padding: "20px",
    maxWidth: "600px", // ajuste conforme necessário
  };

  const imageStyle = {
    maxWidth: "400px",
    maxHeight: "300px",
  };

  const textContainerStyle = {
    marginTop: "20px",
    textAlign: "left",
  };

  const labelStyle = {
    fontWeight: "bold",
    fontSize: "1.2em",
  };

  const labelStyleDetalhes = {
    fontWeight: "bold",
    fontSize: "1.5em",
  };

  return (
    <div style={containerStyle}>
      <div className="faixa-container" style={detalhesStyle}>
        <div
          className="back-button"
          onClick={onVoltar}
          style={{ display: "flex", alignItems: "start", cursor: "pointer" }}
        >
          <MdOutlineKeyboardBackspace
            size={30}
            style={{ justifyContent: "start", alignItems: "start" }}
          />
          Voltar
        </div>
        
        <h2>{treino.nome}</h2>
        {treino.caminhoImagem && (
          <img
            src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
            alt="Imagem"
            style={imageStyle}
          />
        )}
        <div style={textContainerStyle}>
          <p style={labelStyleDetalhes}>Treino de:</p>
          <p style={labelStyle}>{treino.faixa && treino.faixa.nome}</p>
          <p style={labelStyleDetalhes}>Horário:</p>
          <p style={labelStyle}>{treino.horarios}</p>
          <p style={labelStyleDetalhes}>Como Fazer:</p>
          <p style={labelStyle}>{treino.descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default DetalhesTreinos;
