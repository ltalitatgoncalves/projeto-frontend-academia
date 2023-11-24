import React from "react";
import FormGroup from "../components/form-group";
import { withRouter } from "react-router-dom";
import UsuarioService from "../app/service/usuarioService";
import { Password } from "primereact/password";
import { showErrorMessage } from "../components/toastr";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { AuthContext } from "../main/ProvedorDeAutentificacao";
import fundo from "../assets/fundo.png";

import imgLogin from "../assets/imgLogin.jpeg";

class Login extends React.Component {
  constructor() {
    super();
    this.apiService = new UsuarioService();
  }

  state = {
    email: "",
    senha: "",
    loading: false,
  };

  entrar = () => {
    if (!this.state.email || !this.state.senha) {
      showErrorMessage("Preencha todos os campos");
      return false;
    }

    this.setState({ loading: true });
    this.apiService
      .autenticar({
        email: this.state.email,
        senha: this.state.senha,
      })
      .then((response) => {
        const user = response.data;
        this.context.iniciarSessao(user);
        console.log("AQUI EST O LOGIN", user)
        this.props.history.push("/home");
      })
      .catch((erro) => {
        this.setState({ loading: false });
        showErrorMessage(erro.response.data);
      });
  };

  // Caso o usuário clique em cadastrar, esse método chama a página de cadastro
  prepareCadastrar = () => {
    this.props.history.push("/cadastrarUsuario");
  };

  handleEnter = (e) => {
    if (e.key === "Enter") this.entrar();
  };

  render() {
    const load = () => {
      if (this.state.loading) {
        return (
          <ProgressSpinner
            style={{
              width: "50px",
              height: "50px",
              display: "block",
              margin: "40px auto",
            }}
            strokeWidth="8"
            fill="#EEEEEE"
            animationDuration=".5s"
          />
        );
      }
    };

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
      <div style={containerStyle} className="container-fluid">
        <div className="card mb-3" style={cardStyle}>
          <h3 className="card-header" id="dark-header">
            <span style={{ color: "white" }}>Login</span>
          </h3>
          <div className="card-body" id="dark-1">
            <div className="row">
              <div className="col-lg-12">
                <div className="bs-componet">
                  <fieldset>
                    <FormGroup htmlFor="exampleInputEmail1" label="E-mail: *">
                      <input
                        style={{ color: "black" }}
                        type="email"
                        value={this.state.email}
                        onChange={(event) =>
                          this.setState({ email: event.target.value })
                        }
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Digite o Email"
                      />
                    </FormGroup>
                    <FormGroup htmlFor="exampleInputPassword1" label="Senha: *">
                      <Password
                        promptLabel="Digite uma senha"
                        className="large form-control"
                        placeholder="Digite a senha"
                        feedback={false}
                        onKeyPress={this.handleEnter}
                        onChange={(event) =>
                          this.setState({ senha: event.target.value })
                        }
                      />
                    </FormGroup>
                    <Button
                      label="Login"
                      icon="pi pi-sign-in"
                      className="mr"
                      onClick={this.entrar}
                      style={{
                        backgroundColor: "black",
                        color: "#fcfc01", // Amarelo
                        border: "none",
                      }}
                    />

                    <Button
                      label="Criar conta"
                      icon="pi pi-user-plus"
                      className="mr p-button-secondary"
                      onClick={this.prepareCadastrar}
                      style={{
                        backgroundColor: "black",
                        color: "#fcfc01", // Amarelo
                        border: "none",
                      }}
                    />
                  </fieldset>
                  {load()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.contextType = AuthContext;

export default withRouter(Login);
