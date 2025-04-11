import style from './ListaTarefa.module.css';
import { ListaTarefaItem } from './ListaTarefaItem';

const ListaTarefa = (props) => {
    const { tarefas } = props;

    return (
        <ul className={style.ListaTarefa}>
            { tarefas.map(item => <ListaTarefaItem key={item.id} nome={item.nome} />) }
        </ul>
    );
}

export { ListaTarefa };