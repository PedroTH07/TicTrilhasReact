import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { Botao, TIPO_BOTAO } from "../../Botao";

import style from "./ListaTarefaItem.module.css";
import { CampoTexto, Loading } from "../../../components";

const ListaTarefaItem = (props) => {
    const { id, nome } = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const { removerTarefa, editarTarefa, loadingEditar, loadingDeletar } = useAppContext();

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value;

        editarTarefa(id, nomeTarefa);

        setEstaEditando(false);
    }

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar == id;

    return (
        <li className={style.ListaTarefaItem}>
            {(estaEditando || estaEditando) && (
                <CampoTexto defaultValue={nome} onBlur={onBlurTarefa} autoFocus />
            )}

            {!loadingEstaEditando && !estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
            )}

            {loadingEstaEditando && (
                <Loading />
            )}

            <Botao 
            texto={loadingEstaDeletando ? <Loading /> : "-"}
            tipo={TIPO_BOTAO.SECUNDARIO}
            onClick={() => removerTarefa(id)} />
        </li>
    );
}

export { ListaTarefaItem };