import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Pagina = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
   <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route component={Pagina} />
   </Switch>
    

  </BrowserRouter>,
  document.getElementById('root')
);
