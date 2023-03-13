import styles from './SearchInputList.module.scss'
import { useRef, useState } from "react"
import useMonitorClickOnElement from "../../hooks/useMonitorClickOnElement"
import classNames from 'classnames'
import useDebounce from '../../hooks/useDebounce'

interface iDataItem{
    searchWord: string,
    uniqueId: string
}

interface iSearchInputListProps{
    dataList: iDataItem[],
    selectAction: (searchWord:string)=>void,
    placeHolderTxt: string
}

export default function SearchInputList({dataList, selectAction, placeHolderTxt}:iSearchInputListProps){

    const [searchFilter, setSearchFilter] = useState<string>('')
    const [searchList, setSearchList] = useState<iDataItem[]>([])
    const dropDownRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    const MAX_LIST_SIZE = 200

    const updateFilterList = (text?:string) => {
        if(text){
            let filteredList = dataList.filter((item) => item.searchWord.includes(text.toUpperCase()))
            if(filteredList.length > MAX_LIST_SIZE) filteredList = filteredList.slice(1, MAX_LIST_SIZE + 1)
            setSearchList(filteredList)
        } else {
            setSearchList([])
        }
    }

    
    const handleSearch = (textFilter:string) => {
        selectAction(textFilter)
        setSearchList([])
    }

    useMonitorClickOnElement(dropDownRef, updateFilterList,true)

    const debounceSearchFilter = useDebounce(updateFilterList, 1000)

    const onInputSearchChange = (text:string) => {
        setSearchFilter(text)
        debounceSearchFilter(text)
    }

    return(
        <section className={styles.form}>

            <label htmlFor='searchInput'>Busca:</label>

            <div ref={dropDownRef} className={styles.form__searchElement}>
                <input 
                    type='text'
                    name='searchInput'
                    ref={searchInputRef}
                    placeholder={placeHolderTxt}
                    value={searchFilter}
                    onChange={(event)=>onInputSearchChange(event.target.value)}
                    onFocus={(event)=>updateFilterList(event.target.value)}
                    autoComplete="off">
                </input>
                <div className={classNames({[styles.form__searchElement__select]:true, [styles.form__searchElement__select__hidden]: searchList.length === 0})}>
                    {(searchList.length > 0) && searchList.map(item => <p key={item.uniqueId} onClick={()=>handleSearch(item.searchWord)}>{item.searchWord}</p>)}
                </div>
            </div>
            
            <button onClick={()=>handleSearch(searchFilter)}>Search</button>

        </section>
    )
}