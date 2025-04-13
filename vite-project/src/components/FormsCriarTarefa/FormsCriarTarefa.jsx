import { useState } from "react";
import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";

import style from './formsCriarTarefa.module.css';
import { useAppContext } from "../../hooks";

const FormsCriarTarefa = () => {
    const { adicionarTarefa } = useAppContext();

    const [nomeTarefa, setNomeTarefa] = useState('');

    const subimeterFormulario = (event) => {
        event.preventDefault();

        if (!nomeTarefa) {
            return;
        }

        adicionarTarefa(nomeTarefa);

        setNomeTarefa('');
    }

    return (
        <form className={style.FormsCriarTarefa} onSubmit={subimeterFormulario}>
            <CampoTexto value={nomeTarefa} onChange={event => setNomeTarefa(event.currentTarget.value)} />
            <Botao texto='+'/>
        </form>
    );
}

export { FormsCriarTarefa };