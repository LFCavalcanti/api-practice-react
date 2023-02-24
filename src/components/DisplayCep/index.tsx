import { Tooltip } from 'react-tooltip';
import { iCep } from '../../interfaces/iCep';
import styles from './DisplayCep.module.scss';

interface CepProps {
    cepInformation: iCep
}

export default function DisplayCep(props:CepProps){
    return(
        <div className={styles.container}>

            <div className={styles.field}>
                <p className={styles.field__name}>CODIGO:</p>
                <p className={styles.field__content}>{props.cepInformation.cep}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cepInformation.cep)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cepInformation.cep}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>ESTADO:</p>
                <p className={styles.field__content}>{props.cepInformation.state}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cepInformation.state)}
                    data-tooltip-id="btn-nomeCompl"
                    data-tooltip-content={`Copiou: ${props.cepInformation.state}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nomeCompl" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>CIDADE:</p>
                <p className={styles.field__content}>{props.cepInformation.city}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cepInformation.city)}
                    data-tooltip-id="btn-code"
                    data-tooltip-content={`Copiou: ${props.cepInformation.city}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-code" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>BAIRRO:</p>
                <p className={styles.field__content}>{props.cepInformation.neighborhood}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cepInformation.neighborhood)}
                    data-tooltip-id="btn-ispb"
                    data-tooltip-content={`Copiou: ${props.cepInformation.neighborhood}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-ispb" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>LOGRADOURO:</p>
                <p className={styles.field__content}>{props.cepInformation.street}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cepInformation.street)}
                    data-tooltip-id="btn-ispb"
                    data-tooltip-content={`Copiou: ${props.cepInformation.street}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-ispb" events={['click']} delayHide={2000} variant='light'/>
            </div>

        </div>
    )
}