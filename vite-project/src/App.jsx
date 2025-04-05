import { Cabecalho, Conteudo } from './componentes';

import './App.css';

const App = () => {

  return (
    <>
      <Cabecalho nomeUsuario="Pedro" />
      <Conteudo>
        <h1>Titulo</h1>
        <p>texto texto texto</p>
      </Conteudo>
    </>
  );
}

export { App };
