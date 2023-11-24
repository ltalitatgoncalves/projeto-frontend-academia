// // // import React from "react";

// // // const DetalhesTreino = ({ treino }) => {
// // //   if (!treino) {
// // //     return null;
// // //   }

// // //   return (
// // //     <div className="detalhes-treino">
// // //       <h2>{treino.nome}</h2>
// // //       {treino.caminhoImagem && (
// // //         <img
// // //           src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
// // //           alt="Imagem"
// // //           style={{ maxWidth: "300px", maxHeight: "300px" }}
// // //         />
// // //       )}
// // //       <p>Faixa: {treino.faixa}</p>
// // //       <p>Horários: {treino.horarios}</p>
// // //       <p>Descrição: {treino.descricao}</p>
// // //       {/* Adicione outros detalhes conforme necessário */}
// // //     </div>
// // //   );
// // // };

// // // export default DetalhesTreino;

// // import React from "react";
// // import { MdOutlineKeyboardBackspace } from "react-icons/md";

// // const DetalhesTreino = ({ treino, onVoltar }) => {
// //   if (!treino) {
// //     return null;
// //   }

// //   return (
// //     <div
// //       className="faixa-container "
// //       style={{ backgroundColor: "#fff", height: "100vh" }}
// //     >
// //       <div
// //         className="back-button"
// //         onClick={onVoltar}
// //         style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
// //       >
// //         <MdOutlineKeyboardBackspace size={30} style={{ marginRight: "5px" }} />
// //         Voltar
// //         <div>
          
// //         </div>
// //       </div>
// //       <h2>{treino.nome}</h2>
// //       {treino.caminhoImagem && (
// //         <img
// //           src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
// //           alt="Imagem"
// //           style={{ maxWidth: "400px", maxHeight: "300px" }}
// //         />
// //       )}
// //       <p>Treino de: {treino.faixa && treino.faixa.nome}</p>
// //       <p>Horário: {treino.horarios}</p>
// //       <p>Como Fazer: {treino.descricao}</p>
// //       {/* Adicione outros detalhes conforme necessário */}
// //     </div>
// //   );
// // };

// // export default DetalhesTreino;


// // import React from "react";

// // const DetalhesTreino = ({ treino }) => {
// //   if (!treino) {
// //     return null;
// //   }

// //   return (
// //     <div className="detalhes-treino">
// //       <h2>{treino.nome}</h2>
// //       {treino.caminhoImagem && (
// //         <img
// //           src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
// //           alt="Imagem"
// //           style={{ maxWidth: "300px", maxHeight: "300px" }}
// //         />
// //       )}
// //       <p>Faixa: {treino.faixa}</p>
// //       <p>Horários: {treino.horarios}</p>
// //       <p>Descrição: {treino.descricao}</p>
// //       {/* Adicione outros detalhes conforme necessário */}
// //     </div>
// //   );
// // };

// // export default DetalhesTreino;

// import React from "react";
// import { MdOutlineKeyboardBackspace } from "react-icons/md";

// const DetalhesTreino = ({ treino, onVoltar }) => {
//   if (!treino) {
//     return null;
//   }

//   return (
//     <div
//       className="faixa-container "
//       style={{ backgroundColor: "#fff", height: "100vh" }}
//     >
//       <div
//         className="back-button"
//         onClick={onVoltar}
//         style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
//       >
//         <MdOutlineKeyboardBackspace size={30} style={{ marginRight: "5px" }} />
//         Voltar
//         <div>
          
//         </div>
//       </div>
//       <h2>{treino.nome}</h2>
//       {treino.caminhoImagem && (
//         <img
//           src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
//           alt="Imagem"
//           style={{ maxWidth: "300px", maxHeight: "300px" }}
//         />
//       )}
//       <p>Treino de: {treino.faixa && treino.faixa.nome}</p>
//       <p>Horário: {treino.horarios}</p>
//       <p>Como Fazer: {treino.descricao}</p>
//       {/* Adicione outros detalhes conforme necessário */}
//     </div>
//   );
// };

// export default DetalhesTreino;


import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const DetalhesTreino = ({ treino, onVoltar }) => {
  if (!treino) {
    return null;
  }

  return (
    <div
      className="faixa-container"
      style={{
        backgroundColor: "#fff",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        className="back-button"
        onClick={onVoltar}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          position: "absolute",
          top: "10px", // Ajuste conforme necessário
          left: "10px", // Ajuste conforme necessário
        }}
      >
        <MdOutlineKeyboardBackspace size={30} style={{ marginRight: "5px" }} />
        Voltar
        <div></div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h2>{treino.nome}</h2>
        {treino.caminhoImagem && (
          <img
            src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
            alt="Imagem"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        )}
        <p>Treino de: {treino.faixa && treino.faixa.nome}</p>
        <p>Horário: {treino.horarios}</p>
        <p>Como Fazer: {treino.descricao}</p>
        {/* Adicione outros detalhes conforme necessário */}
      </div>
    </div>
  );
};

export default DetalhesTreino;
