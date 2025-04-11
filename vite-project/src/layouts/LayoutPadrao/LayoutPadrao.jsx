import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../components";


const LayoutPadrao = () => {
    return (
        <>
            <Cabecalho nomeUsuario="Pedro" />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape nomeCriador="Pedro"/>
        </>
    );
}

export { LayoutPadrao };