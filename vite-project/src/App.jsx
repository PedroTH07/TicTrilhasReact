import { Cabecalho, Conteudo, Rodape } from './componentes';
import { Inicial } from './pages';

import './App.css';

const App = () => {

  return (
    <>
      <Cabecalho nomeUsuario="Pedro" />
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape nomeCriador="Pedro"/>
    </>
  );
}

export { App };
