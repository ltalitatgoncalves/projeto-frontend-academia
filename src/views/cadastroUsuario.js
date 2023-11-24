import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import UsuarioService from "../app/service/usuarioService";
import { showSuccessMessage, showErrorMessage } from "../components/toastr";
import { Button } from "primereact/button";
import { Password } from "primereact/password";

import { Dropdown } from "primereact/dropdown";

import faixas from "../assets/faixas.jpeg";

import FaixaService from "../app/service/faixaservice";

import imgLogin from "../assets/imgLogin.jpeg";

class CadastroUsuario extends React.Component {
  constructor() {
    super();
    this.service = new UsuarioService();
    this.state = {
      faixaService: new FaixaService(),
    };
  }

  state = {
    nome: "",
    email: "",
    senha: "",
    faixaId: "",
    showConfirmDialog: true,
    faixas: [], // Adiciona este estado local para armazenar as faixas
  };

  cadastrar = () => {
    const { nome, email, senha, faixaId } = this.state;
    const usuario = { nome, email, senha, faixaId };

    try {
      this.service.validar(usuario);
    } catch (err) {
      const erros = err.mensagens;
      erros.forEach((msg) => showErrorMessage(msg));
      return;
    }

    this.service
      .cadastrarUsuario(usuario)
      .then((response) => {
        showSuccessMessage(
          "Usuário cadastrado com sucesso! Faça o login para acessar o sistema."
        );
        this.props.history.push("/login");
      })
      .catch((err) => {
        showErrorMessage(err.response.data);
      });
  };

  login = () => {
    this.props.history.push("/login");
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const faixaId = event.target.faixaId;

    this.setState({ [name]: value });
  };

  handleEnter = (e) => {
    if (e.key === "Enter") this.cadastrar();
  };

  async componentDidMount() {
    try {
      const response = await this.state.faixaService.listarFaixas();
      const faixasOptions = response.data.map((faixaId) => ({
        label: faixaId.nome,
        value: faixaId.id.toString(),
        image: faixas, // Adicione a imagem ao objeto da faixa
      }));

      this.setState({
        faixas: response.data,
        faixasOptions: [
          ...faixasOptions,
        ],
      });
    } catch (error) {
      console.error("Erro ao obter faixas:", error.response);
      showErrorMessage("Erro ao obter faixas.");
    }
  }

  render() {
    const cardStyle = {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "#black",
      padding: "20px",
    };

    const containerStyle = {
      className: "container-fluid",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${imgLogin})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
    };

    return (
      <div style={containerStyle}>
        <div style={{ paddingTop: "50px" }}>
          <div className="card mb-3" style={cardStyle}>
            <h3 className="card-header">
              <span style={{ color: "white" }}>Criar sua conta</span>
            </h3>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-componet">
                    <FormGroup htmlFor="inputNome" label="Nome: *">
                      <input
                        style={{ color: "black" }}
                        type="text"
                        className="form-control"
                        id="inputNome"
                        placeholder="Digite o seu nome"
                        name="nome"
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup htmlFor="inputEmail" label="Email: *">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Digite o seu melhor e-mail"
                        name="email"
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup htmlFor="inputSenha" label="Senha: *">
                      <Password
                        promptLabel="Digite uma senha"
                        className="large form-control"
                        placeholder="Digite uma senha"
                        name="senha"
                        onChange={this.handleChange}
                      />
                    </FormGroup>

                    <FormGroup label="Faixa: *" htmlFor="inputFaixa">
                      <Dropdown
                        value={this.state.faixaId}
                        options={this.state.faixasOptions}
                        className="large"
                        onChange={(e) => this.setState({ faixaId: e.value })}
                        placeholder="Selecione o tipo de faixa"
                        itemTemplate={(option) => (
                          <div className="custom-dropdown-item">
                            <img
                              src={option.image}
                              alt="Faixa"
                              style={{
                                marginRight: "10px",
                                width: "20px",
                                height: "20px",
                              }}
                            />
                            {option.label}
                          </div>
                        )}
                        showClear // Isso permitirá que a opção de limpar seja exibida
                        valueTemplate={(option) => option.label} // Isto remove a imagem da exibição do valor selecionado
                      />
                    </FormGroup>

                    <Button
                      label="Cadastrar"
                      icon="pi pi-user-plus"
                      className="mr p-button-success"
                      onClick={this.cadastrar}
                      style={{
                        backgroundColor: "black",
                        color: "#fcfc01", // Amarelo
                        border: "none",
                      }}
                    />
                    <Button
                      label="Login"
                      icon="pi pi-sign-in"
                      className="mr p-button-secondary"
                      onClick={this.login}
                      style={{
                        backgroundColor: "black",
                        color: "#fcfc01", // Amarelo
                        border: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CadastroUsuario);
