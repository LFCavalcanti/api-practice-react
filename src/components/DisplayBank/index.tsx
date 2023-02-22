import { iBank } from '../../interfaces/iBank'
import styles from './DisplayBank.module.scss'
import { Tooltip } from 'react-tooltip'

interface DisplayProps {
    bank: iBank
}

export default function DisplayBank(props:DisplayProps){
    const handleCopy = (text:string) => {
        navigator.clipboard.writeText(text)
        .then()
    }
    return(
        <div className={styles.container}>

            <div className={styles.field}>
                <p className={styles.field__name}>NOME:</p>
                <p className={styles.field__content}>{props.bank.name}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.bank.name)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.bank.name}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>NOME COMPLETO:</p>
                <p className={styles.field__content}>{props.bank.fullName}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.bank.fullName)}
                    data-tooltip-id="btn-nomeCompl"
                    data-tooltip-content={`Copiou: ${props.bank.fullName}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nomeCompl" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>CÓDIGO:</p>
                <p className={styles.field__content}>{props.bank.code}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.bank.code.toString())}
                    data-tooltip-id="btn-code"
                    data-tooltip-content={`Copiou: ${props.bank.code.toString()}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-code" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>ISPB:</p>
                <p className={styles.field__content}>{props.bank.ispb}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.bank.ispb)}
                    data-tooltip-id="btn-ispb"
                    data-tooltip-content={`Copiou: ${props.bank.ispb}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-ispb" events={['click']} delayHide={2000} variant='light'/>
            </div>

        </div>
    )
}