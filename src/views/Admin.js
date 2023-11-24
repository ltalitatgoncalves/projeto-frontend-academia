// import React from "react";
// import { showErrorMessage, showSuccessMessage } from "../components/toastr";
// import Card from "../components/card";
// import FormGroup from "../components/form-group";
// import { Button } from "primereact/button";
// import { Dropdown } from "primereact/dropdown";
// import TreinosTable from "./TreinosTable";
// import "./faixas.css";

// import TreinoService from "../app/service/treinoService";

// class Admin extends React.Component {
//   state = {
//     nome: "",
//     descricao: "",
//     faixa: "",
//     horarios: "",
//     faixas: [],
//     imagem: null,
//     loading: false,
//     isEditing: false,
//     treinoEditId: null,
//   };

//   treinoService = new TreinoService();

//   cadastrar = () => {
//     const { nome, descricao, faixa, horarios, imagem } = this.state;

//     if (!nome || !descricao || !faixa || !horarios || !imagem) {
//       showErrorMessage("Preencha todos os campos.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("nome", nome);
//     formData.append("descricao", descricao);
//     formData.append("faixa", faixa);
//     formData.append("horarios", horarios);

//     // Adicionando um identificador único ao nome do arquivo
//     const uniqueIdentifier = new Date().getTime(); // Pode ser melhorado para gerar um ID único mais robusto
//     const fileName = `imagem_${uniqueIdentifier}.jpg`;

//     formData.append("imagem", imagem, fileName);

//     this.setState({ loading: true });

//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };

//     this.treinoService
//       .cadastrarTreino(formData, config)
//       .then((response) => {
//         this.setState((prevState) => ({
//           faixas: [...prevState.faixas, response.data],
//           nome: "",
//           descricao: "",
//           faixa: "",
//           horarios: "",
//           imagem: null,
//           loading: false,
//         }));

//         showSuccessMessage("Treino cadastrado com sucesso.");
//         console.log("AQUIIIII ao cadastrar treino:", response.data);
//       })
//       .catch((error) => {
//         console.error("Erro ao cadastrar treino:", error.response);
//         this.setState({ loading: false });
//         showErrorMessage("Erro ao cadastrar treino.");
//       });
//   };

//   listarTreinos = () => {
//     this.treinoService
//       .listarTreinos()
//       .then((response) => {
//         this.setState({ faixas: response.data });
//       })
//       .catch((error) => {
//         console.error("Erro ao listar treinos:", error.response);
//         showErrorMessage("Erro ao listar treinos.");
//       });
//   };

//   excluirTreino = (id) => {
//     this.treinoService
//       .excluirTreino(id)
//       .then(() => {
//         this.listarTreinos(); // Atualiza a lista após excluir
//         showSuccessMessage("Treino excluído com sucesso.");
//       })
//       .catch((error) => {
//         console.error("Erro ao excluir treino:", error.response);
//         showErrorMessage("Erro ao excluir treino.");
//       });
//   };

//   handleEditButtonClick = (id) => {
//     console.log("Edit button clicked for ID:", id);
//     this.setState({
//       isEditing: true,
//       treinoEditId: id,
//     });

//     // Chame a função para obter os detalhes do treino pelo ID e preencher o estado do formulário
//     this.obterDetalhesTreino(id);
//   };
// // Adicione esta função para obter os detalhes do treino e preencher o estado do formulário
// obterDetalhesTreino = (id) => {
//   this.treinoService
//     .obterTreinoPorId(id)
//     .then((response) => {
//       const treino = response.data;
//       this.setState({
//         nome: treino.nome,
//         descricao: treino.descricao,
//         faixa: treino.faixa,
//         horarios: treino.horarios,
//         imagem: treino.imagem, // ou ajuste conforme necessário
//         treinoIdParaEditar: id,
//       });
//     })
//     .catch((error) => {
//       console.error("Erro ao obter detalhes do treino:", error.response);
//       showErrorMessage("Erro ao obter detalhes do treino.");
//     });
// };

//   editarTreino = () => {
//     console.log("Edit button clicked for ID:", this.state.treinoEditId);
//     const { treinoIdParaEditar, nome, descricao, faixa, horarios, imagem } = this.state;

//     if (!treinoIdParaEditar) {
//       showErrorMessage("Selecione um treino para editar.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("nome", nome);
//     formData.append("descricao", descricao);
//     formData.append("faixa", faixa);
//     formData.append("horarios", horarios);

//     // Adicionando um identificador único ao nome do arquivo
//     const uniqueIdentifier = new Date().getTime(); // Pode ser melhorado para gerar um ID único mais robusto
//     const fileName = `imagem_${uniqueIdentifier}.jpg`;

//     formData.append("imagem", imagem, fileName);

//     this.setState({ loading: true });

//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };

//     this.treinoService
//       .editarTreino(treinoIdParaEditar, formData, config)
//       .then((response) => {
//         // Lógica adicional após a edição, se necessário
//         showSuccessMessage("Treino editado com sucesso.");
//         console.log("Treino editado:", response.data);
//       })
//       .catch((error) => {
//         console.error("Erro ao editar treino:", error.response);
//         this.setState({ loading: false });
//         showErrorMessage("Erro ao editar treino.");
//       });
//   };

//     // Adicione esta função para resetar o estado do formulário após a conclusão da edição
//     handleEditModalClose = () => {
//       this.setState({
//         isEditing: false,
//         treinoEditId: null,
//         nome: "",
//         descricao: "",
//         faixa: "",
//         horarios: "",
//       });
//     };

//   // Adicione esta função para chamar o método de exclusão
//   handleDeleteButtonClick = (id) => {
//     this.excluirTreino(id);
//   };

//   handleImageChange = (e) => {
//     const file = e.target.files[0];
//     this.setState({ imagem: file });
//   };

//   render() {
//     return (
//       <div className="faixa-container">
//         <Card title={this.state.isEditing ? "Editar Treino" : "Cadastrar Treino"} className="faixa-card" >
//           <div className="faixa-form">
//             <FormGroup label="Nome: " htmlFor="inputNome">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="inputNome"
//                 placeholder="Nome do Treino"
//                 value={this.state.nome}
//                 onChange={(e) => this.setState({ nome: e.target.value })}
//               />
//             </FormGroup>

//             <FormGroup label="Como Fazer: " htmlFor="inputDescricao">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="inputDescricao"
//                 placeholder="Como Fazer"
//                 value={this.state.descricao}
//                 onChange={(e) => this.setState({ descricao: e.target.value })}
//               />
//             </FormGroup>

//             <FormGroup label="Imagem: " htmlFor="inputImagem">
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="form-control"
//                 id="inputImagem"
//                 onChange={this.handleImageChange}
//               />
//             </FormGroup>

//             <FormGroup label="Horário: " htmlFor="inputHorario">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="inputHorario"
//                 placeholder="Horário"
//                 value={this.state.horarios}
//                 onChange={(e) => this.setState({ horarios: e.target.value })}
//               />
//             </FormGroup>

//             <FormGroup label="Tipo de Faixa: *" htmlFor="inputFaixa">
//               <Dropdown
//                 value={this.state.faixa}
//                 options={[
//                   { label: "Selecione a Faixa", value: "" },
//                   { label: "Branca", value: "Branca" },
//                   { label: "Amarela", value: "Amarela" },
//                   { label: "Laranja", value: "Laranja" },
//                   { label: "Verde", value: "Verde" },
//                   { label: "Azul", value: "Azul" },
//                   { label: "Roxo", value: "Roxo" },
//                   { label: "Marrom", value: "Marrom" },
//                   { label: "Preta", value: "Preta" },
//                 ]}
//                 className="large"
//                 onChange={(e) => this.setState({ faixa: e.value })}
//                 placeholder="Selecione o tipo de faixa"
//               />
//             </FormGroup>
//             <Button
//               label={this.state.isEditing ? "Editar" : "Cadastrar"}
//               icon="pi pi-check"
//               className="p-button-success"
//               onClick={this.state.isEditing ? this.editar : this.cadastrar}
//             />
//           </div>
//         </Card>
//         <div className="faixa-list">
//           <h3>Treinos Cadastrados</h3>
//           <TreinosTable
//             treinos={this.state.faixas}
//             editAction={this.handleEditButtonClick}
//             deleteAction={this.handleDeleteButtonClick}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Admin;

import React from "react";
import { showErrorMessage, showSuccessMessage } from "../components/toastr";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import TreinosTable from "./TreinosTable";
import "./faixas.css";

import TreinoService from "../app/service/treinoService";

import FaixaService from "../app/service/faixaservice";

import Lobato from "../assets/lobato.png";

class Admin extends React.Component {
  state = {
    nome: "",
    descricao: "",
    faixa: "",
    horarios: "",
    faixas: [],
    imagem: null,
    loading: false,
    isEditing: false,
    treinoEditId: null,
  };

  constructor() {
    super();
    this.state = {
      faixaService: new FaixaService(),
      treinoService: new TreinoService(),
    };
  }

  async componentDidMount() {
    try {
      const response = await this.state.faixaService.listarFaixas();
      const faixasOptions = response.data.map((faixa) => ({
        label: faixa.nome,
        value: faixa.id.toString(),
        style: { backgroundImage: `url(${faixa.lobato ? faixa.lobato : ""})` },
      }));

      this.setState({
        faixas: response.data,
        faixasOptions: [
          { label: "Selecione a Faixa", value: "" },
          ...faixasOptions,
        ],
      });
    } catch (error) {
      console.error("Erro ao obter faixas:", error.response);
      showErrorMessage("Erro ao obter faixas.");
    }
  }

  treinoService = new TreinoService();

  cadastrar = () => {
    const { nome, descricao, faixa, horarios, imagem } = this.state;

    if (!nome || !descricao || !faixa || !horarios || !imagem) {
      showErrorMessage("Preencha todos os campos.");
      return;
    }

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("faixa", faixa);
    formData.append("horarios", horarios);

    // Adicionando um identificador único ao nome do arquivo
    const uniqueIdentifier = new Date().getTime(); // Pode ser melhorado para gerar um ID único mais robusto
    const fileName = `imagem_${uniqueIdentifier}.jpg`;

    formData.append("imagem", imagem, fileName);

    this.setState({ loading: true });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    this.treinoService
      .cadastrarTreino(formData, config)
      .then((response) => {
        this.setState((prevState) => ({
          faixas: [...prevState.faixas, response.data],
          nome: "",
          descricao: "",
          faixa: "",
          horarios: "",
          imagem: null,
          loading: false,
        }));

        showSuccessMessage("Treino cadastrado com sucesso.");
        console.log("AQUIIIII ao cadastrar treino:", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao cadastrar treino:", error.response);
        this.setState({ loading: false });
        showErrorMessage("Erro ao cadastrar treino.");
      });
  };

  // listarTreinos = () => {
  //   this.treinoService
  //     .listarTreinos()
  //     .then((response) => {
  //       this.setState({ faixas: response.data });
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao listar treinos:", error.response);
  //       showErrorMessage("Erro ao listar treinos.");
  //     });
  // };

  async componentDidMount() {
    try {
      const responseFaixas = await this.state.faixaService.listarFaixas();
      const faixasOptions = responseFaixas.data.map((faixa) => ({
        label: faixa.nome,
        value: faixa.id.toString(),
        style: { backgroundImage: `url(${faixa.lobato})` },
      }));

      this.setState({
        faixas: responseFaixas.data,
        faixasOptions: [...faixasOptions],
      });

      // Agora, ao carregar o componente, liste todos os treinos disponíveis
      this.listarTodosTreinos();
    } catch (error) {
      console.error("Erro ao obter faixas:", error.response);
      showErrorMessage("Erro ao obter faixas.");
    }
  }

  listarTodosTreinos = () => {
    this.state.treinoService
      .listarTreinos()
      .then((response) => {
        this.setState({ faixas: response.data });
      })
      .catch((error) => {
        console.error("Erro ao listar treinos:", error.response);
        showErrorMessage("Erro ao listar treinos.");
      });
  };

  excluirTreino = (id) => {
    this.treinoService
      .excluirTreino(id)
      .then(() => {
        this.listarTodosTreinos(); // Atualiza a lista após excluir
        showSuccessMessage("Treino excluído com sucesso.");
        // Remova o seguinte código, pois recarregar a página pode não ser necessário
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao excluir treino:", error.response);
        showErrorMessage("Erro ao excluir treino.");
      });
  };

  handleEditButtonClick = (id) => {
    console.log("Edit button clicked for ID:", id);
    this.setState({
      isEditing: true,
      treinoEditId: id,
    });

    // Chame a função para obter os detalhes do treino pelo ID e preencher o estado do formulário
    this.obterDetalhesTreino(id);
  };

  // Adicione esta função para obter os detalhes do treino e preencher o estado do formulário
  obterDetalhesTreino = (id) => {
    this.treinoService
      .obterTreinoPorId(id)
      .then((response) => {
        const treino = response.data;
        this.setState({
          nome: treino.nome,
          descricao: treino.descricao,
          faixa: treino.faixa,
          horarios: treino.horarios,
          imagem: treino.imagem, // ou ajuste conforme necessário
          treinoIdParaEditar: id,
        });
      })
      .catch((error) => {
        console.error("Erro ao obter detalhes do treino:", error.response);
        showErrorMessage("Erro ao obter detalhes do treino.");
      });
  };

  editarTreino = () => {
    console.log("Edit button clicked for ID:", this.state.treinoEditId);
    const { treinoEditId, nome, descricao, faixa, horarios, imagem } =
      this.state;

    if (!treinoEditId) {
      showErrorMessage("Selecione um treino para editar.");
      return;
    }

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("faixa", faixa);
    formData.append("horarios", horarios);

    // Adicionando um identificador único ao nome do arquivo
    const uniqueIdentifier = new Date().getTime();
    const fileName = `imagem_${uniqueIdentifier}.jpg`;

    formData.append("imagem", imagem, fileName);

    this.setState({ loading: true });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    this.treinoService
      .editarTreino(treinoEditId, formData, config)
      .then((response) => {
        showSuccessMessage("Treino editado com sucesso.");
        console.log("Treino editado:", response.data);

        // Adicione lógica adicional, se necessário

        // Limpe o estado após a edição
        this.handleEditModalClose();
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao editar treino:", error.response);
        this.setState({ loading: false });
        showErrorMessage("Erro ao editar treino.");
      });
  };

  // Adicione esta função para resetar o estado do formulário após a conclusão da edição
  handleEditModalClose = () => {
    this.setState({
      isEditing: false,
      treinoEditId: null,
      nome: "",
      descricao: "",
      faixa: "",
      horarios: "",
    });
  };

  // Adicione esta função para chamar o método de exclusão
  handleDeleteButtonClick = (id) => {
    this.excluirTreino(id);
  };

  handleImageChange = (e) => {
    const file = e.target.files[0];
    this.setState({ imagem: file });
  };

  render() {
    return (
      <>
        <div className="faixa-container">
          <Card
            title={this.state.isEditing ? "Editar Treino" : "Cadastrar Treino"}
            className="faixa-card"
          >
            <div className="faixa-form">
              <FormGroup label="Nome: " htmlFor="inputNome">
                <input
                  type="text"
                  className="form-control"
                  id="inputNome"
                  placeholder="Nome do Treino"
                  value={this.state.nome}
                  onChange={(e) => this.setState({ nome: e.target.value })}
                />
              </FormGroup>

              <FormGroup label="Como Fazer: " htmlFor="inputDescricao">
                <textarea
                  className="form-control"
                  id="inputDescricao"
                  placeholder="Como Fazer"
                  value={this.state.descricao}
                  onChange={(e) => this.setState({ descricao: e.target.value })}
                />
              </FormGroup>

              <FormGroup label="Imagem: " htmlFor="inputImagem">
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  id="inputImagem"
                  onChange={this.handleImageChange}
                  style={{
                    width: "100%", // Preenche a largura do contêiner
                    height: "100%",
                    boxSizing: "border-box", // Inclui a largura da borda e do preenchimento
                    padding: "8px", // Preenchimento interno do input
                    border: "1px solid #ced4da", // Adiciona uma borda ao input
                    borderRadius: "4px", // Borda arredondada
                    marginTop: "8px", // Espaçamento superior para separar o input do botão
                    position: "relative", // Certifica-se de que o botão pode ser posicionado absolutamente em relação a isso
                    zIndex: 0, // Certifica-se de que o input está abaixo do botão
                  }}
                />
              </FormGroup>

              <FormGroup label="Horário: " htmlFor="inputHorario">
                <input
                  type="text"
                  className="form-control"
                  id="inputHorario"
                  placeholder="Horário"
                  value={this.state.horarios}
                  onChange={(e) => this.setState({ horarios: e.target.value })}
                />
              </FormGroup>

              {/* <FormGroup label="Tipo de Faixa: *" htmlFor="inputFaixa">
              <Dropdown
                value={this.state.faixa}
                options={this.state.faixasOptions}
                className="large"
                onChange={(e) => this.setState({ faixa: e.value })}
                placeholder="Selecione o tipo de faixa"
              />
            </FormGroup> */}

              <FormGroup label="Faixa: *" htmlFor="inputFaixa">
                <Dropdown
                  value={this.state.faixa}
                  options={this.state.faixasOptions}
                  className="large"
                  onChange={(e) => this.setState({ faixa: e.value })}
                  placeholder="Selecione o tipo de faixa"
                  itemTemplate={(option) => (
                    <div className="custom-dropdown-item" style={option.style}>
                      {option.label}
                    </div>
                  )}
                />
              </FormGroup>

              <Button
                label={this.state.isEditing ? "Editar" : "Cadastrar"}
                icon="pi pi-check"
                className="p-button-success"
                onClick={
                  this.state.isEditing ? this.editarTreino : this.cadastrar
                }
              />
            </div>
          </Card>

          <div className="faixa-list" style={{ textAlign: "center" }}>
          <h3 style={{ margin: "10px", fontWeight: "bold", fontSize: "2.5em" }}>
    Treinos Cadastrados
  </h3>
            <TreinosTable
              treinos={this.state.faixas}
              editAction={this.handleEditButtonClick}
              deleteAction={this.handleDeleteButtonClick}
            />
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
            <a
              className="text-white"
              href="https://lobatotopteam.negocio.site/"
            >
              Lobato TOP TEAM
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Admin;
