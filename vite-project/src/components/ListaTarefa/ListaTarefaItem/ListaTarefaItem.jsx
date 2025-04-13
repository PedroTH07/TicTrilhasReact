import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { Botao, TIPO_BOTAO } from "../../Botao";

import style from "./ListaTarefaItem.module.css";
import { CampoTexto } from "../../../components";

const ListaTarefaItem = (props) => {
    const { id, nome } = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const { removerTarefa, editarTarefa } = useAppContext();

    return (
        <li className={style.ListaTarefaItem}>
            {estaEditando && (
                <CampoTexto defaultValue={nome} onBlur={() => {setEstaEditando(false);}} autoFocus onChange={(event) => editarTarefa(id, event.currentTarget.value)} />
            )}

            {!estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
            )}

            <Botao 
            texto='-' 
            tipo={TIPO_BOTAO.SECUNDARIO}
            onClick={() => removerTarefa(id)} />
        </li>
    );
}

export { ListaTarefaItem };