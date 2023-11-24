import React, { useEffect, useState, useContext } from "react";
import { showErrorMessage, showSuccessMessage } from "../components/toastr";
import TreinoTable from "./TreinoTable";
import "./faixas.css";
import TreinoService from "../app/service/treinoService";
import { AuthContext } from "../main/ProvedorDeAutentificacao";

import Lobato from "../assets/lobato.png";

const Treinos = () => {
  const [faixas, setFaixas] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [faixa, setFaixa] = useState("");
  const [horarios, setHorarios] = useState("");
  const [imagem, setImagem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { usuarioAutenticado } = useContext(AuthContext);

  const treinoService = new TreinoService();

  useEffect(() => {
    listarTreinos();
  }, [usuarioAutenticado.faixa]);
  
  const listarTreinos = () => {
    treinoService
      .listarTreinosPorFaixa(usuarioAutenticado.faixa.nome)
      .then((response) => {
        setFaixas(response.data);
        console.log("TREINOS:", response.data);
        console.log("Faixa do usuário:", usuarioAutenticado.faixa);
      })
      .catch((error) => {
        console.error("Erro ao listar treinos:", error.response);
        showErrorMessage("Erro ao listar treinos.");
      });
  };


  const containerStyle = {
    backgroundColor: "#292929",
    height: "100px",
    display: "flex",
    padding: "20px",
  };

  const textStyle = {
    color: "white",
    display: "flex",
    margin: "10px",
  };

  const cadastrar = () => {
    if (!nome || !descricao || !faixa || !horarios || !imagem) {
      showErrorMessage("Preencha todos os campos.");
      return;
    }

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("faixa", faixa);
    formData.append("horarios", horarios);

    const uniqueIdentifier = new Date().getTime();
    const fileName = `imagem_${uniqueIdentifier}.jpg`;

    formData.append("imagem", imagem, fileName);

    setLoading(true);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    treinoService
      .cadastrarTreino(formData, config)
      .then((response) => {
        setFaixas((prevFaixas) => [...prevFaixas, response.data]);
        setNome("");
        setDescricao("");
        setFaixa("");
        setHorarios("");
        setImagem(null);
        setLoading(false);
        showSuccessMessage("Treino cadastrado com sucesso.");
        console.log("AQUIIIII ao cadastrar treino:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar treino:", error.response);
        setLoading(false);
        showErrorMessage("Erro ao cadastrar treino.");
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagem(file);
  };

  return (
    <>
      <div
        className="faixa-container"
        style={{ backgroundColor: "#fff", height: "100vh" }}
      >
        <div title="Meus Treinos" style={containerStyle}></div>

        <div className="faixa-list">
          <div style={{}}>
            <h1
              className="display-3"
              style={{
                ...textStyle,
                display: "flex",
                justifyContent: "space-between",
                color: "#000",
                fontSize: "10",
              }}
            >
              <span>Treinos</span>
              {/* <span>{faixas.length}</span> */}
            </h1>
          </div>
          <TreinoTable treinos={faixas} treinoService={treinoService} />
        </div>

        <div
        className="text-center text-white"
        style={{ backgroundColor: "#000" }}
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
      </div>
      
    </>
  );
};

export default Treinos;
