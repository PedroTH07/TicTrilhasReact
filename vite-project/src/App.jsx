import { Cabecalho, Conteudo, Rodape } from './components';
import { Inicial } from './pages';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';

const App = () => {

  return (
    <BrowserRouter>
      <Router />
      
    </BrowserRouter>
  );
}

export { App };
