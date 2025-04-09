import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";

import style from './formsCriarTarefa.module.css';

const FormsCriarTarefa = () => {
    return (
        <form className={style.FormsCriarTarefa}>
            <CampoTexto />
            <Botao texto='+'/>
        </form>
    );
}

export { FormsCriarTarefa };