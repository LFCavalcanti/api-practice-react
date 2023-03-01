
import styles from './DisplayNcm.module.scss'
import { Tooltip } from 'react-tooltip'
import { iNcm } from '../../../interfaces/iNcm'
import ConvertDateFromISO from '../../../helpers/ConvertDateFromISO'

interface DisplayProps {
    ncm: iNcm
}

export default function DisplayNcm(props:DisplayProps){

    const dataInicio = ConvertDateFromISO(props.ncm.data_inicio)
    const dataFim = ConvertDateFromISO(props.ncm.data_fim)

    return(
        <div className={styles.container}>

            <div className={styles.field}>
                <p className={styles.field__name}>CODIGO:</p>
                <p className={styles.field__content}>{props.ncm.codigo}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.ncm.codigo)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.ncm.codigo}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>DESCRICAO:</p>
                <p className={styles.field__content}>{props.ncm.descricao}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.ncm.descricao)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.ncm.descricao}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>DATA INICIO:</p>
                <p className={styles.field__content}>{dataInicio}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(dataInicio)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${dataInicio}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>DATA FIM:</p>
                <p className={styles.field__content}>{dataFim}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(dataFim)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${dataFim}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>TIPO ATO:</p>
                <p className={styles.field__content}>{props.ncm.tipo_ato}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.ncm.tipo_ato)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.ncm.tipo_ato}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>NUMERO ATO:</p>
                <p className={styles.field__content}>{props.ncm.numero_ato}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.ncm.numero_ato)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.ncm.numero_ato}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>ANO ATO:</p>
                <p className={styles.field__content}>{props.ncm.ano_ato}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.ncm.ano_ato)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.ncm.ano_ato}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

        </div>
    )
}