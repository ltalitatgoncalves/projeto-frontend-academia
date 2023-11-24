// import React, { useState } from "react";
// import { Button } from "primereact/button";
// import DetalhesTreino from "./DetalhesTreino";

// const TreinoTable = (props) => {
//   const [treinoSelecionado, setTreinoSelecionado] = useState(null);

//   const rows = props.treinos.map((treino, index) => (
//     <tr key={index} className="table-row">
//       <td>
//         {treino.caminhoImagem && (
//           <img
//             src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
//             alt="Imagem"
//             style={{ maxWidth: "50px", maxHeight: "50px" }}
//           />
//         )}
//       </td>
//       <td>{treino.nome}</td>
//       <td>{treino.faixa}</td>
//       <td>{treino.horarios}</td>
//       <td>
//         <div className="action-buttons">
//           <Button
//             icon="pi pi-search"
//             className="p-button-secondary p-button-sm"
//             onClick={() => setTreinoSelecionado(treino)}
//           />
//         </div>
//       </td>
//     </tr>
//   ));

//   const voltarParaLista = () => {
//     setTreinoSelecionado(null);
//   };

//   return (
//     <>
//       {treinoSelecionado ? (
//         <DetalhesTreino treino={treinoSelecionado} onVoltar={voltarParaLista} />
//       ) : (
//         <table className="table table-hover">
//          <thead>
//            <tr className="" style={{ background: "#000" }}>
//              <th scope="col" style={{ color: "#fff" }}>
//                Img
//              </th>
//              <th scope="col" style={{ color: "#fff" }}>
//                Nome
//              </th>
//              <th scope="col" style={{ color: "#fff" }}>
//                Faixa
//              </th>
//              <th scope="col" style={{ color: "#fff" }}>
//                Horários
//              </th>
//              <th scope="col" style={{ color: "#000" }}>
//                {/* Ações */}
//              </th>
//            </tr>
//          </thead>
//          <tbody>{rows}</tbody>
//        </table>
//       )}
//     </>
//   );
// };

// export default TreinoTable;

// import React, { useState } from "react";
// import { Button, Card } from "react-bootstrap";
// import DetalhesTreino from "./DetalhesTreino";

// const TreinoCard = ({ treino, onCardClick }) => (
//   <Card style={{ width: "100%", margin: "10px" }} onClick={() => onCardClick(treino)}>
//     {treino.caminhoImagem && (
//       <Card.Img
//         variant="top"
//         src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
//         alt="Imagem"
//         style={{ maxWidth: "10%", maxHeight: "10%" }}
//       />
//     )}
//     <Card.Body>
//       <Card.Title>{treino.nome}</Card.Title>
//       <Card.Text>Faixa: {treino.faixa}</Card.Text>
//       <Card.Text>Horários: {treino.horarios}</Card.Text>
//       <Button
//         variant="primary"
//         onClick={(e) => {
//           e.stopPropagation(); // Impede a propagação do clique para o card, evitando a seleção do treino
//           onCardClick(treino);
//         }}
//       >
//         Detalhes
//       </Button>
//     </Card.Body>
//   </Card>
// );

// const TreinoTable = (props) => {
//   const [treinoSelecionado, setTreinoSelecionado] = useState(null);

//   const voltarParaLista = () => {
//     setTreinoSelecionado(null);
//   };

//   return (
//     <div>
//       <div className="treino-cards">
//         {props.treinos.map((treino, index) => (
//           <TreinoCard key={index} treino={treino} onCardClick={setTreinoSelecionado} />
//         ))}
//       </div>

//       {treinoSelecionado && (
//         <DetalhesTreino treino={treinoSelecionado} onVoltar={voltarParaLista} />
//       )}
//     </div>
//   );
// };

// export default TreinoTable;

import React, { useState } from "react";

import { Button, Card } from "react-bootstrap";
import DetalhesTreino from "./DetalhesTreino";
import { MdNavigateNext } from "react-icons/md";

const TreinoCard = ({ treino, onCardClick }) => (
  <Card
    style={{
      width: "100%",
      marginTop: "10px",
      height: "100px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }}
    onClick={() => onCardClick(treino)}
  >
    {/* <div className="d-flex align-items-center">
      {treino.caminhoImagem && (
        <Card.Img
          variant="top"
          src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
          alt="Imagem"
          style={{ width: "150px", height: "70px", margin: "10px" }}
        />
      )}
      <Card.Body style={{}}>
        <Card.Title>{treino.nome}</Card.Title>
        <Card.Text>Horário: {treino.horarios}</Card.Text>
        <MdNavigateNext />
      </Card.Body>
    </div> */}

    <Card.Body className="d-flex justify-content-between align-items-center">
      {treino.caminhoImagem && (
        <div>
        <Card.Img
          variant="top"
          src={`http://172.20.10.2:8080${treino.caminhoImagem}`}
          alt="Imagem"
          style={{ width: "100px", height: "90px", margin: "-10px" }}
        />
        </div>
        
      )}
      <div style={{ width: "65%",}}>
        <Card.Title className="font-weight-bold text-left" >  {treino.nome}</Card.Title>
        <Card.Text className="font-weight-bold text-left">Horário:{treino.horarios}</Card.Text>
      </div>
      <div>
        <MdNavigateNext />
      </div>
    </Card.Body>
  </Card>
);

const TreinoTable = (props) => {
  const [treinoSelecionado, setTreinoSelecionado] = useState(null);

  const voltarParaLista = () => {
    setTreinoSelecionado(null);
  };

  return (
    <>
      {treinoSelecionado ? (
        <DetalhesTreino treino={treinoSelecionado} onVoltar={voltarParaLista} />
      ) : (
        <div className="treino-cards" style={{ margin: "10px" }}>
          {props.treinos.map((treino, index) => (
            <TreinoCard
              key={index}
              treino={treino}
              onCardClick={setTreinoSelecionado}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TreinoTable;
