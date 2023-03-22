import { useState } from 'react'
import UIConstants from '../../global/UiConstants'
import { iInfoList } from '../../interfaces/iInfoList'
import CardsPDF from '../../reports/PDFExports/CardsPDF'
import DisplayCard from '../DisplayCard'
import styles from './DisplayOutlet.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faSquarePlus, faPlusSquare } from '@fortawesome/free-regular-svg-icons'

interface IDdisplayOutlet{
    infoList:iInfoList[]
    itemList: any[]
    updateFn: (lastSearch:string, amountToShow:number) => void
    placeHolder: string
    callerName?: string
    lastSearch: string
}

export default function DisplayOutlet({infoList, itemList, updateFn, placeHolder, callerName="Pagina", lastSearch}:IDdisplayOutlet){
    const UiConstants = UIConstants()
    const [numShow, setNumShow] = useState<number>(UiConstants.DEFAULT_AMOUNT_TO_SHOW)

    const handleShowMore = () => {
        let amountToShow = numShow + UiConstants.ADD_AMOUNT_TO_SHOW
        setNumShow(amountToShow)
        updateFn(lastSearch, amountToShow)
    }

    if(itemList.length <= 0){
        return(
            <section className={styles.display__placeholder}>
                <p>{placeHolder}</p>
            </section>
        )
    } else {
        return(
            <>
                <section className={styles.display}>
                    <div className={styles.display__exports}>
                        <label>Export results:</label>
                        <button onClick={()=>CardsPDF({callerName, infoList, itemList})}><FontAwesomeIcon icon={faFilePdf} /> Download PDF</button>
                    </div>
                    {itemList.map(item => <DisplayCard key={item.uniqueId} infoList={infoList} payload={item}/>)}
                    {(itemList.length >= UiConstants.DEFAULT_AMOUNT_TO_SHOW) && <div className={styles.showMore}><button  onClick={handleShowMore}><FontAwesomeIcon icon={faPlusSquare} /> Show More</button></div>}                    
                </section>
            </>
    
        )
    }

}