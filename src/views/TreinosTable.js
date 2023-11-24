// // // import React, { useEffect, useState } from "react";
// // // import { Button } from "primereact/button";
// // // import TreinoService from "../app/service/treinoService";

// // // const TreinosTable = (props) => {
// // //   const [treinos, setTreinos] = useState([]);

// // //   const carregarTreinos = async () => {
// // //     try {
// // //       const treinoService = new TreinoService();
// // //       const response = await treinoService.listarTreinos();
// // //       setTreinos(response.data);
// // //       console.log("AAAAAAAAAAAAAAAAAA", response.data);
// // //     } catch (error) {
// // //       console.error("Erro ao carregar treinos", error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     carregarTreinos();
// // //   }, []);

// // //   const rows = treinos.map((treino, index) => (
// // //     <tr key={index} className="table-row">
// // //       <td>
// // //         {treino.caminhoImagem && (
// // //           <img
// // //             src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
// // //             alt="Imagem"
// // //             style={{ maxWidth: "50px", maxHeight: "50px" }}
// // //           />
// // //         )}
// // //       </td>
// // //       <td>{treino.nome}</td>
// // //       <td style={{ maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
// // //         {treino.descricao}
// // //       </td>
// // //       <td>{treino.faixa}</td>
// // //       <td>{treino.horarios}</td>{" "}
// // //       {/* Adicione esta coluna para exibir os horários */}
// // //       <td>
// // //         <div className="action-buttons">
// // //           <Button
// // //             icon="pi pi-pencil"
// // //             className="p-button-secondary p-button-sm"
// // //             onClick={() => props.editAction(treino.id)}
// // //           />
// // //           <Button
// // //             icon="pi pi-trash"
// // //             className="p-button-secondary p-button-sm"
// // //             onClick={() => props.deleteAction(treino.id)} // Alterado para passar o ID diretamente
// // //           />
// // //         </div>
// // //       </td>
// // //     </tr>
// // //   ));

// // //   return (
// // //     <>
// // //       <table className="table table-hover">
// // //         <thead>
// // //           <tr className="" style={{ background: "#000" }}>
// // //             <th scope="col" style={{ color: "#fff" }}>
// // //               Img
// // //             </th>
// // //             <th scope="col" style={{ color: "#fff" }}>
// // //               Nome
// // //             </th>
// // //             <th scope="col" style={{ color: "#fff" }}>
// // //               Descrição
// // //             </th>
// // //             <th scope="col" style={{ color: "#fff" }}>
// // //               Faixa
// // //             </th>
// // //             <th scope="col" style={{ color: "#fff" }}>
// // //               Horários
// // //             </th>
// // //             <th scope="col" style={{ color: "#fff" }}>
// // //               Ações
// // //             </th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>{rows}</tbody>
// // //       </table>
// // //     </>
// // //   );
// // // };

// // // export default TreinosTable;

// // import React, { useEffect, useState } from "react";
// // import { Button } from "primereact/button";
// // import TreinoService from "../app/service/treinoService";

// // import DetalhesTreino from "./DetalhesTreino";

// // const TreinosTable = (props) => {
// //   const [treinos, setTreinos] = useState([]);

// //   const [treinoSelecionado, setTreinoSelecionado] = useState(null);

// //   const voltarParaLista = () => {
// //     setTreinoSelecionado(null);
// //   };

// //   const carregarTreinos = async () => {
// //     try {
// //       const treinoService = new TreinoService();
// //       const response = await treinoService.listarTreinos();
// //       setTreinos(response.data);
// //       console.log("AAAAAAAAAAAAAAAAAA", response.data);
// //     } catch (error) {
// //       console.error("Erro ao carregar treinos", error);
// //     }
// //   };

// //   useEffect(() => {
// //     carregarTreinos();
// //   }, []);

// //   const mostrarDetalhes = (treino) => {
// //     setTreinoSelecionado(treino);
// //   };

// //   const rows = treinos.map((treino, index) => (
// //     <>
// //       <tr
// //         key={index}
// //         className="table-row"
// //         onClick={() => mostrarDetalhes(treino)}
// //         style={{ cursor: "pointer" }}
// //       >
// //         <td>
// //           {treino.caminhoImagem && (
// //             <img
// //               src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
// //               alt="Imagem"
// //               style={{ maxWidth: "50px", maxHeight: "50px" }}
// //             />
// //           )}
// //         </td>
// //         <td>{treino.nome}</td>
// //         <td
// //           style={{
// //             maxWidth: "50px",
// //             overflow: "hidden",
// //             textOverflow: "ellipsis",
// //             whiteSpace: "nowrap",
// //           }}
// //         >
// //           {treino.descricao}
// //         </td>
// //         <td>{treino.faixa}</td>
// //         <td>{treino.horarios}</td>{" "}
// //         <td>
// //           <div className="action-buttons">
// //             <Button
// //               icon="pi pi-pencil"
// //               className="p-button-secondary p-button-sm"
// //               onClick={() => props.editAction(treino.id)}
// //             />
// //             <Button
// //               icon="pi pi-trash"
// //               className="p-button-secondary p-button-sm"
// //               onClick={() => props.deleteAction(treino.id)} // Alterado para passar o ID diretamente
// //             />
// //           </div>
// //         </td>
// //       </tr>
// //     </>
// //   ));

// //   return (
// //     <>
// //       {treinoSelecionado ? (
// //         <DetalhesTreino treino={treinoSelecionado} onVoltar={voltarParaLista} />
// //       ) : (
// //         <table className="table table-hover">
// //           <thead>
// //             <tr className="" style={{ background: "#000" }}>
// //               <th scope="col" style={{ color: "#fff" }}>
// //                 Img
// //               </th>
// //               <th scope="col" style={{ color: "#fff" }}>
// //                 Nome
// //               </th>
// //               <th scope="col" style={{ color: "#fff" }}>
// //                 Descrição
// //               </th>
// //               <th scope="col" style={{ color: "#fff" }}>
// //                 Faixa
// //               </th>
// //               <th scope="col" style={{ color: "#fff" }}>
// //                 Horários
// //               </th>
// //               <th scope="col" style={{ color: "#fff" }}>
// //                 Ações
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody>{rows}</tbody>
// //         </table>
// //       )}
// //     </>
// //   );
// // };

// // export default TreinosTable;


// // import React, { useEffect, useState } from "react";
// // import { Button } from "primereact/button";
// // import TreinoService from "../app/service/treinoService";

// // import DetalhesTreino from "./DetalhesTreino";

// // const TreinosTable = (props) => {
// //   const [treinos, setTreinos] = useState([]);
// //   const [treinoSelecionado, setTreinoSelecionado] = useState(null);

// //   const voltarParaLista = () => {
// //     setTreinoSelecionado(null);
// //   };

// //   const carregarTreinos = async () => {
// //     try {
// //       const treinoService = new TreinoService();
// //       const response = await treinoService.listarTreinos();
// //       setTreinos(response.data);
// //       console.log("AAAAAAAAAAAAAAAAAA", response.data);
// //     } catch (error) {
// //       console.error("Erro ao carregar treinos", error);
// //     }
// //   };

// //   useEffect(() => {
// //     carregarTreinos();
// //   }, []);

// //   const mostrarDetalhes = (treino) => {
// //     setTreinoSelecionado(treino);
// //   };

// //   const renderTableContent = () => {
// //     if (treinos.length === 0) {
// //       return (
// //         <tr>
// //           <td colSpan="6" className="text-center">
// //             <strong>Não há treinos cadastrados.</strong>
// //           </td>
// //         </tr>
// //       );
// //     }

// //     return treinos.map((treino, index) => (
// //       <tr
// //         key={index}
// //         className="table-row"
// //         onClick={() => mostrarDetalhes(treino)}
// //         style={{ cursor: "pointer" }}
// //       >
// //         <td>
// //           {treino.caminhoImagem && (
// //             <img
// //               src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
// //               alt="Imagem"
// //               style={{ maxWidth: "50px", maxHeight: "50px" }}
// //             />
// //           )}
// //         </td>
// //         <td>{treino.nome}</td>
// //         <td
// //           style={{
// //             maxWidth: "50px",
// //             overflow: "hidden",
// //             textOverflow: "ellipsis",
// //             whiteSpace: "nowrap",
// //           }}
// //         >
// //           {treino.descricao}
// //         </td>
// //         <td>{treino.faixa}</td>
// //         <td>{treino.horarios}</td>{" "}
// //         <td>
// //           <div className="action-buttons">
// //             <Button
// //               icon="pi pi-pencil"
// //               className="p-button-secondary p-button-sm"
// //               onClick={() => props.editAction(treino.id)}
// //             />
// //             <Button
// //               icon="pi pi-trash"
// //               className="p-button-secondary p-button-sm"
// //               onClick={() => props.deleteAction(treino.id)} // Alterado para passar o ID diretamente
// //             />
// //           </div>
// //         </td>
// //       </tr>
// //     ));
// //   };

// //   return (
// //     <>
// //       {treinoSelecionado ? (
// //         <DetalhesTreino treino={treinoSelecionado} onVoltar={voltarParaLista} />
// //       ) : (
// //         <table className="table table-hover">
// //           <thead>
// //             <tr className="" style={{ background: "#000" }}>
// //               <th scope="col" style={{ color: "#fff" }}>
// //                 Img
// //               </th>
// //               <th scope="col" style={{ color: "#fff" }}>
// //                 Nome
// //               </th>
// //               <th scope="col" style={{ color: "#fff" }}>
// //                 Descrição
// //               </th>
// //               <th scope="col" style={{ color: "#fff" }}>
// //                 Faixa
// //               </th>
// //               <th scope="col" style={{ color: "#fff" }}>
// //                 Horários
// //               </th>
// //               <th scope="col" style={{ color: "#fff" }}>
// //                 Ações
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody>{renderTableContent()}</tbody>
// //         </table>
// //       )}
// //     </>
// //   );
// // };

// // export default TreinosTable;



import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import TreinoService from "../app/service/treinoService";

import DetalhesTreinos from "./DetalhesTreinos";

const TreinosTable = (props) => {
  const [treinos, setTreinos] = useState([]);
  const [treinoSelecionado, setTreinoSelecionado] = useState(null);

  const voltarParaLista = () => {
    setTreinoSelecionado(null);
  };

  const carregarTreinos = async () => {
    try {
      const treinoService = new TreinoService();
      const response = await treinoService.listarTreinos();
      setTreinos(response.data);
      console.log("AAAAAAAAAAAAAAAAAA", response.data);
    } catch (error) {
      console.error("Erro ao carregar treinos", error);
    }
  };

  useEffect(() => {
    carregarTreinos();
  }, []);

  const mostrarDetalhes = (treino) => {
    setTreinoSelecionado(treino);
  };

  const renderTableContent = () => {
    if (treinos.length === 0) {
      return (
        <tr>
          <td colSpan="6" className="text-center">
            <strong>Não há treinos cadastrados.</strong>
          </td>
        </tr>
      );
    }

    return treinos.map((treino, index) => (
      <tr
        key={index}
        className="table-row"
        onClick={() => mostrarDetalhes(treino)}
        style={{ cursor: "pointer" }}
      >
        <td>
          {treino.caminhoImagem && (
            <img
              src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
              alt="Imagem"
              style={{ maxWidth: "50px", maxHeight: "50px" }}
            />
          )}
        </td>
        <td>{treino.nome}</td>
        <td
          style={{
            maxWidth: "50px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {treino.descricao}
        </td>
        <td>{treino.faixa.nome}</td> {/* Corrigir para acessar treino.faixa.nome */}
        <td>{treino.horarios}</td>{" "}
        <td>
          <div className="action-buttons">
            <Button
              icon="pi pi-pencil"
              className="p-button-secondary p-button-sm"
              onClick={() => props.editAction(treino.id)}
            />
            <Button
              icon="pi pi-trash"
              className="p-button-secondary p-button-sm"
              onClick={() => props.deleteAction(treino.id)}
            />
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <>
    {treinoSelecionado && (
      <DetalhesTreinos treino={treinoSelecionado} onVoltar={voltarParaLista} />
    )}
    {!treinoSelecionado && treinos.length > 0 && (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr className="" style={{ background: "#000" }}>
              <th scope="col" style={{ color: "#fff" }}>
                Img
              </th>
              <th scope="col" style={{ color: "#fff" }}>
                Nome
              </th>
              <th scope="col" style={{ color: "#fff" }}>
                Descrição
              </th>
              <th scope="col" style={{ color: "#fff" }}>
                Faixa
              </th>
              <th scope="col" style={{ color: "#fff" }}>
                Horários
              </th>
              <th scope="col" style={{ color: "#fff" }}>
                Ações
              </th>
            </tr>
          </thead>
          <tbody>{renderTableContent()}</tbody>
        </table>
      </div>
    )}
  </>
  );
};

export default TreinosTable;


// import React, { useEffect, useState } from "react";
// import { Button, Card } from "react-bootstrap"; // Importando Card do react-bootstrap
// import TreinoService from "../app/service/treinoService";
// import DetalhesTreino from "./DetalhesTreino";

// import { MdNavigateNext } from "react-icons/md";

// const TreinoCard = ({ treino, onCardClick }) => (
//   <Card
//     style={{
//       width: "100%",
//       marginTop: "10px",
//       height: "100px",
//       backgroundColor: "#fff",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
//     }}
//     onClick={() => onCardClick(treino)}
//   >
//     <div className="d-flex justify-content-between align-items-center">
//       {treino.caminhoImagem && (
//         <div>
//           <Card.Img
//             variant="top"
//             src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
//             alt="Imagem"
//             style={{ width: "100px", height: "90px", margin: "-10px" }}
//           />
//         </div>
//       )}
//       <div style={{ width: "65%" }}>
//         <Card.Title className="font-weight-bold text-left" style={{ marginLeft: "5px" }}>
//           {treino.nome}
//         </Card.Title>
//         <Card.Text className="font-weight-bold">Horário: {treino.horarios}</Card.Text>
//       </div>
//       <div>
//         <MdNavigateNext />
//       </div>
//     </div>
//   </Card>
// );

// const TreinosTable = (props) => {
//   const [treinos, setTreinos] = useState([]);
//   const [treinoSelecionado, setTreinoSelecionado] = useState(null);

//   const voltarParaLista = () => {
//     setTreinoSelecionado(null);
//   };

//   const carregarTreinos = async () => {
//     try {
//       const treinoService = new TreinoService();
//       const response = await treinoService.listarTreinos();
//       setTreinos(response.data);
//       console.log("AAAAAAAAAAAAAAAAAA", response.data);
//     } catch (error) {
//       console.error("Erro ao carregar treinos", error);
//     }
//   };

//   useEffect(() => {
//     carregarTreinos();
//   }, []);

//   const mostrarDetalhes = (treino) => {
//     setTreinoSelecionado(treino);
//   };

//   return (
//     <>
//       {treinoSelecionado && (
//         <DetalhesTreino treino={treinoSelecionado} onVoltar={voltarParaLista} />
//       )}
//       {!treinoSelecionado && treinos.length > 0 && (
//         <div className="treino-cards" style={{ margin: "10px" }}>
//           {treinos.map((treino, index) => (
//             <TreinoCard
//               key={index}
//               treino={treino}
//               onCardClick={mostrarDetalhes}
//             />
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default TreinosTable;


