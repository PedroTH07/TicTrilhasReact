import { useState } from "react";
import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";

import style from './formsCriarTarefa.module.css';

const FormsCriarTarefa = (props) => {
    const [nomeTarefa, setNomeTarefa] = useState('');

    const { setTarefas } = props;

    const adicionarTarefa = (event) => {
        event.preventDefault();

        if (!nomeTarefa) {
            return;
        }

        setTarefas(estadoAtual => {
            const tarefa = {
                id: estadoAtual.length +1,
                nome: nomeTarefa
            }

            return [
                ...estadoAtual,
                tarefa
            ];
        })

        setNomeTarefa('');
    }

    return (
        <form className={style.FormsCriarTarefa} onSubmit={adicionarTarefa}>
            <CampoTexto value={nomeTarefa} onChange={event => setNomeTarefa(event.currentTarget.value)} />
            <Botao texto='+'/>
        </form>
    );
}

export { FormsCriarTarefa };