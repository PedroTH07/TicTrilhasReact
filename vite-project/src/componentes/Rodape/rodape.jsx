import style from './rodape.module.css';

const Rodape = (props) => {
    const { nomeCriador } = props;

    const ano = (new Date()).getFullYear();

    return (
        <div className={style.Rodape}>
            <p>React básico - {ano} - {nomeCriador}</p>
        </div>
    );
}

export { Rodape };