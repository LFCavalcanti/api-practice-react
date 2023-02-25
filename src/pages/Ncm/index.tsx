import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import DisplayNcm from '../../components/DisplayNcm'
import LoadingData from '../../components/LoadingData'
import useMonitorClickOnElement from '../../hooks/useMonitorClickOnElement'
import { iNcm } from '../../interfaces/iNcm'
import styles from './Bank.module.scss'

export default function Bank() {
    const [ncmList, setNcmList] = useState<iNcm[]>([])
    const [searchList, setSearchList] = useState<iNcm[]>([])
    const [searchFilter, setSearchFilter] = useState<string>('')
    const [selectedNcms, setSelectedNcms] = useState<iNcm[]>([])
    const [connectionError, setConnectionError] = useState<string>('')
    const dropDownRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)

    useMonitorClickOnElement(dropDownRef, ()=>setSearchList([]),true)
    useMonitorClickOnElement(searchInputRef, ()=>updateFilterList(),false)

    const loadBanks = () => {
        fetch('https://brasilapi.com.br/api/ncm/v1')
        .then((response)=>{
            if(response.status === 404) throw `URL: ${response.url} - NOT FOUND`
            return response.json()
        })
        .then((response)=>{
            let banks:iNcm[] = []
            response.forEach((item:iNcm)=>{
                let currBank = {
                    ...item,
                    searchWord: `${item.codigo.toUpperCase()} - ${item.descricao.toUpperCase()}`
                }
                banks.push(currBank)
            })
            setNcmList(banks)
        })
        .catch((error)=>{
            console.error(error)
            setConnectionError(`${error}`)
        })
    }

    const updateFilterList = () => {
        if(searchFilter){
            let filteredList = ncmList.filter((ncm) => ncm.searchWord.includes(searchFilter.toUpperCase()))
            setSearchList(filteredList)
        } else {
            setSearchList([])
        }
    }

    const searchBank = (textFilter:string) => {
        if(textFilter){
            let filteredList = ncmList.filter((ncm) => ncm.searchWord.includes(textFilter.toUpperCase()))
            setSelectedNcms(filteredList)
        } else {
            setSelectedNcms([])
        }
    }

    const handleSearch = (textFilter:string) => {
        searchBank(textFilter)
        setSearchList([])
    }

    useEffect(()=>{
        loadBanks()
    },[])

    useEffect(()=>{
        updateFilterList()
    },[searchFilter])

    if(!ncmList.length){
        return (
            <>
                <LoadingData />
                <div>
                    {(connectionError) && <p className={styles.errorDisplay}>{connectionError}</p>}
                </div>
            </>
        )
    } else {
        return (
            <main className={styles.container}>

                <h1 className={styles.titulo}>NCM</h1>

                <section className={styles.form}>

                    <label htmlFor='searchInput'>Busca:</label>

                    <div className={styles.form__searchElement}>
                        <input 
                            type='text'
                            name='searchInput'
                            ref={searchInputRef}
                            placeholder='Código ou Nome do banco'
                            value={searchFilter}
                            onChange={(event)=>setSearchFilter(event.target.value)}
                            autoComplete="off">
                        </input>
                        <div ref={dropDownRef} className={classNames({[styles.form__searchElement__select]:true, [styles.form__searchElement__select__hidden]: searchList.length === 0})}>
                            {(searchList.length > 0) && searchList.map(item => <p key={item.codigo} onClick={()=>handleSearch(item.searchWord)}>{item.searchWord}</p>)}
                        </div>
                    </div>
                    
                    <button onClick={()=>handleSearch(searchFilter)}>Search</button>

                </section>

                {(selectedNcms.length === 0) && <p>Pesquise o NCM desejado acima...</p>}
                <section className={styles.display}>
                    {(selectedNcms.length > 0) && selectedNcms.map(ncm => <DisplayNcm key={ncm.codigo} ncm={ncm}/>)}
                </section>

            </main>
        )

    }

}