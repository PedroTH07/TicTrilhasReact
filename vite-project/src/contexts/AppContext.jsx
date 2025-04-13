import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;

    const [criador, setCriador] = useState('Pedro');

    const [tarefas, setTarefas] = useState([]);

    const carregarTarefa = async () => {
        const { data = [] } = await api.get('/tarefas');

        setTarefas([
            ...data
        ]);
    }

    const adicionarTarefa = async (nomeTarefa) => {
        const { data: tarefa } = await api.post('/tarefas', {
            nome: nomeTarefa,
        });

        setTarefas(estadoAtual => {

            return [
                ...estadoAtual,
                tarefa
            ];
        });
    }

    useEffect(() => {
        carregarTarefa();
    }, []);

    const removerTarefa = async (idTarefa) => {
        await api.delete(`/tarefas/${idTarefa}`);
        setTarefas(estadoAtual => {
            const tarefaAtualizada = estadoAtual.filter(tarefa => tarefa.id != idTarefa);

            return [
                ...tarefaAtualizada
            ];
        });
    }

    const editarTarefa = async (idTarefa, nomeTarefa) => {
        const { data: tarefaAtualizada } = await api.put(`tarefas/${idTarefa}`, {
            nome: nomeTarefa,
        });

        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa => {
                return tarefa.id == idTarefa ? {
                    ...tarefa,
                    nome: tarefaAtualizada.nome,
                } : tarefa;
            });

            return [
                ...tarefasAtualizadas,
            ];
        });
    }

    return (
        <AppContext.Provider value={{
            criador,
            tarefas,
            adicionarTarefa,
            removerTarefa,
            editarTarefa,
        }}>
            {children}
        </AppContext.Provider>
    );
}