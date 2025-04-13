import { useAppContext } from '../../hooks';
import style from './ListaTarefa.module.css';
import { ListaTarefaItem } from './ListaTarefaItem';

const ListaTarefa = () => {
    const { tarefas } = useAppContext();

    return (
        <ul className={style.ListaTarefa}>
            {!tarefas.length && (
                <p>Não há tarefas cadastradas...</p>
            )}
            { tarefas.map(item => 
            <ListaTarefaItem key={item.id} 
            nome={item.nome} 
            id={item.id} />) }
        </ul>
    );
}

export { ListaTarefa };