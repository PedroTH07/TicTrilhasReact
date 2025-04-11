import { useState } from "react";
import { FormsCriarTarefa } from "../../components";
import { ListaTarefa } from "../../components";

import style from './inicial.module.css';

const Inicial = () => {
    const [tarefas, setTarefas] = useState([
        {id: 1, nome: "item 1"},
        {id: 2, nome: "item 2"},
        {id: 3, nome: "item 3"}
    ]);

    return (
        <div className={style.Inicial}>
            <FormsCriarTarefa setTarefas={setTarefas} />
            <ListaTarefa tarefas={tarefas} />
        </div>
    );
}

export { Inicial };