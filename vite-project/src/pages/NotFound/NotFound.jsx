import style from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={style.NotFound}>
            <h1>error 404</h1>
            <h2>not found</h2>
        </div>
    );
}

export { NotFound };