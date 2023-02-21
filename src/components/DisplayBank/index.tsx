import { iBank } from '../../interfaces/iBank'
import styles from './DisplayBank.module.scss'

interface DisplayProps {
    bank: iBank
}

export default function DisplayBank(props:DisplayProps){
    return(
        <div className={styles.container}>
            <div className={styles.field}>
                <p className={styles.field__name}>NOME:</p>
                <p className={styles.field__content}>{props.bank.name}</p>
                <button className={styles.field__copyBtn} onClick={()=>navigator.clipboard.writeText(props.bank.name)}>Copiar</button>
            </div>
            <div className={styles.field}>
                <p className={styles.field__name}>NOME COMPLETO:</p>
                <p className={styles.field__content}>{props.bank.fullName}</p>
                <button className={styles.field__copyBtn} onClick={()=>navigator.clipboard.writeText(props.bank.fullName)}>Copiar</button>
            </div>
            <div className={styles.field}>
                <p className={styles.field__name}>CÓDIGO:</p>
                <p className={styles.field__content}>{props.bank.code}</p>
                <button className={styles.field__copyBtn} onClick={()=>navigator.clipboard.writeText(props.bank.code.toString())}>Copiar</button>
            </div>
            <div className={styles.field}>
                <p className={styles.field__name}>ISPB:</p>
                <p className={styles.field__content}>{props.bank.ispb}</p>
                <button className={styles.field__copyBtn} onClick={()=>navigator.clipboard.writeText(props.bank.ispb)}>Copiar</button>
            </div>
        </div>
    )
}