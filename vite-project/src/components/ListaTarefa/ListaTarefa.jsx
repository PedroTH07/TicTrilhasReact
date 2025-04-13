import { useAppContext } from '../../hooks';
import { Loading } from '../Loading';
import style from './ListaTarefa.module.css';
import { ListaTarefaItem } from './ListaTarefaItem';

const ListaTarefa = () => {
    const { tarefas, loadingCarregar } = useAppContext();

    return (
        <ul className={style.ListaTarefa}>
            {loadingCarregar && (
                <p>Carregando...<Loading /></p>
            )}
            
            {!loadingCarregar && !tarefas.length && (
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