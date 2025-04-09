import { FormsCriarTarefa } from "../../components";
import { ListaTarefa } from "../../components";

import style from './inicial.module.css';

const Inicial = () => {
    return (
        <div className={style.Inicial}>
            <FormsCriarTarefa />
            <ListaTarefa />
        </div>
    );
}

export { Inicial };