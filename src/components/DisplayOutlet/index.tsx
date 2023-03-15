import { useState } from 'react'
import UIConstants from '../../global/UiConstants'
import { iInfoList } from '../../interfaces/iInfoList'
import DisplayCard from '../DisplayCard'
import styles from './DisplayOutlet.module.scss'

interface IDdisplayOutlet{
    infoList:iInfoList[]
    itemList: any[]
    updateFn: (lastSearch:string, amountToShow:number) => void
    placeHolder: string
    lastSearch: string
}

export default function DisplayOutlet({infoList, itemList, updateFn, placeHolder, lastSearch}:IDdisplayOutlet){
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
            <section className={styles.display}>
                {itemList.map(item => <DisplayCard key={item.codigo} infoList={infoList} payload={item}/>)}
                {(itemList.length >= UiConstants.DEFAULT_AMOUNT_TO_SHOW) && <button className={styles.showMore} onClick={handleShowMore}>Show More</button>}                    
            </section>
    
        )
    }

}