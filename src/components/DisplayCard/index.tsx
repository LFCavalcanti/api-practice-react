
import styles from './DisplayCard.module.scss'
import { Tooltip } from 'react-tooltip'
import { iInfoList } from '../../interfaces/iInfoList'

interface DisplayProps {
    infoList:iInfoList[],
    payload: {}  
}

export default function DisplayCard({infoList, payload}:DisplayProps){

    return(
        <div className={styles.container}>

            {infoList.map((info)=>{
                const value = (info.attribute in payload) ? payload[info.attribute as keyof typeof payload] : 'ERRO'
                return (
                    <div key={info.label} className={styles.field}>
                        <p className={styles.field__name}>{info.label}</p>
                        <p className={styles.field__content}>{value}</p>
                        <button
                            className={styles.field__copyBtn}
                            onClick={()=>navigator.clipboard.writeText(value)}
                            data-tooltip-id="btn-nome"
                            data-tooltip-content={`Copiou: ${value}`}>
                            Copiar
                        </button>
                        <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
                    </div>
                )
            })}


        </div>
    )
}