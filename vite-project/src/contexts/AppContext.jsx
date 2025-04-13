import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;

    const [criador, setCriador] = useState('Pedro');

    const [tarefas, setTarefas] = useState([
        {id: 1, nome: "item 1"},
        {id: 2, nome: "item 2"},
        {id: 3, nome: "item 3"}
    ]);

    const adicionarTarefa = (nomeTarefa) => {
        setTarefas(estadoAtual => {
            const tarefa = {
                id: estadoAtual.length +1,
                nome: nomeTarefa
            }

            return [
                ...estadoAtual,
                tarefa
            ];
        });
    }

    const removerTarefa = (idTarefa) => {
        setTarefas(estadoAtual => {
            const tarefaAtualizada = estadoAtual.filter(tarefa => tarefa.id != idTarefa);

            return [
                ...tarefaAtualizada
            ];
        });
    }

    return (
        <AppContext.Provider value={{
            criador,
            tarefas,
            adicionarTarefa,
            removerTarefa,
        }}>
            {children}
        </AppContext.Provider>
    );
}