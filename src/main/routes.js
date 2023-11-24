import React from 'react'
import {Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import { AuthConsumer } from '../main/ProvedorDeAutentificacao'

import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'

import Treinos from '../views/Treinos'

import Adimin from '../views/Admin'

import Perfil from '../views/Perfil'

function RotaAutenticada( { component: Component, isAutenticado, ...props } ) {
  return (
    <Route {...props} render={ (componentProps) => {      
      if(isAutenticado) 
        return ( <Component {...componentProps } /> )      
      else
        return ( <Redirect to={ {pathname: '/login', state : { from: componentProps.location } } } /> )
    } 
    }/>
  )
}

function Rotas(props) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastrarUsuario" component={CadastroUsuario} />
        <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} exact path="/" component={Home} />
        <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
        <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} path="/treinos" component={Treinos} />
        <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} path="/perfil" component={Perfil} />
        <RotaAutenticada
          isAutenticado={props.isUsuarioAutenticado}
          path="/admin"
          component={Adimin}
        />
      </Switch>
    </HashRouter>
  )
}

export default () => (
  <AuthConsumer> 
    { (context) => (<Rotas isUsuarioAutenticado={context.isAutenticado} /> )  } 
  </AuthConsumer>
)


// import React from 'react';
// import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
// import { AuthConsumer } from '../main/ProvedorDeAutentificacao';

// import Login from '../views/login';
// import CadastroUsuario from '../views/cadastroUsuario';
// import Home from '../views/home';
// import Treinos from '../views/Treinos';
// import Adimin from '../views/Admin';
// import Perfil from '../views/Perfil';

// function RotaAutenticada({ component: Component, ...props }) {
//   const { isAutenticado } = React.useContext(AuthConsumer);

//   return (
//     <Route
//       {...props}
//       render={(componentProps) =>
//         isAutenticado ? <Component {...componentProps} /> : <Redirect to="/login" />
//       }
//     />
//   );
// }

// function Rotas(props) {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/login" component={Login} />
//         <Route path="/cadastrarUsuario" component={CadastroUsuario} />
//         <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} exact path="/" component={Home} />
//         <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
//         <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} path="/treinos" component={Treinos} />
//         <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} path="/perfil" component={Perfil} />
//         <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} path="/admin" component={Adimin} />
//       </Switch>
//     </Router>
//   );
// }

// export default () => (
//   <AuthConsumer>
//     {(context) => <Rotas isUsuarioAutenticado={context.isAutenticado} />}
//   </AuthConsumer>
// );
