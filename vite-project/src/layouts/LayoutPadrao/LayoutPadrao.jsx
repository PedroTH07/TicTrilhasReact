import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../components";
import { useAppContext } from "../../hooks";


const LayoutPadrao = () => {
    const { criador } = useAppContext();

    return (
        <>
            <Cabecalho nomeUsuario="Pedro" />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape nomeCriador={criador}/>
        </>
    );
}

export { LayoutPadrao };