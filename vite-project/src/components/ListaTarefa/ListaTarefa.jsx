import style from './ListaTarefa.module.css';
import { ListaTarefaItem } from './ListaTarefaItem';

const ListaTarefa = () => {
    const tarefas = [
        {id: 1, nome: "item 1"},
        {id: 2, nome: "item 2"},
        {id: 3, nome: "item 3"}
    ];

    return (
        <ul className={style.ListaTarefa}>
            { tarefas.map(item => <ListaTarefaItem key={item.id} nome={item.nome} />) }
        </ul>
    );
}

export { ListaTarefa };