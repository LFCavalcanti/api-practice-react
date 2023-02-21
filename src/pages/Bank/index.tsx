import classNames from 'classnames'
import { useEffect, useState } from 'react'
import DisplayBank from '../../components/DisplayBank'
import LoadingData from '../../components/LoadingData'
import { iBank } from '../../interfaces/iBank'
import styles from './Bank.module.scss'

export default function Bank() {
    const [bankList, setBankList] = useState<iBank[]>([])
    const [searchList, setSearchList] = useState<iBank[]>([])
    const [searchFilter, setSearchFilter] = useState<string>('')
    const [selectedBanks, setSelectedBanks] = useState<iBank[]>([])

    const loadBanks = () => {
        fetch('https://brasilapi.com.br/api/banks/v1')
        .then((response)=>response.json())
        .then((convRes)=>{
            let banks:iBank[] = []
            convRes.forEach((item:iBank)=>{
                let currBank = {
                    ...item,
                    searchWord: `${(item.code === null) ? 'N/A' : item.code.toString()} - ${item.name}`
                }
                banks.push(currBank)
            })
            setBankList(banks)
        })
        .catch((error)=>console.log(error))
    }

    const updateFilterList = () => {
        if(searchFilter){
            let filteredList = bankList.filter((bank) => bank.searchWord.includes(searchFilter.toUpperCase()))
            setSearchList(filteredList)
        } else {
            setSearchList([])
        }
    }

    const searchBank = (textFilter:string) => {
        if(textFilter){
            let filteredList = bankList.filter((bank) => bank.searchWord.includes(textFilter.toUpperCase()))
            setSelectedBanks(filteredList)
        } else {
            setSelectedBanks([])
        }
    }

    const handleDropList = (textFilter:string) => {
        searchBank(textFilter)
        setSearchList([])
    }

    useEffect(()=>{
        loadBanks()
    },[])

    useEffect(()=>{
        updateFilterList()
    },[searchFilter])

    if(!bankList.length){
        return (
            <LoadingData />
        )
    } else {
        return (
            <main className={styles.bank__container}>

                <h1 className={styles.bank__titulo}>BANCOS</h1>

                <section className={styles.bank__form}>

                    <label htmlFor='searchInput'>Busca:</label>

                    <div className={styles.bank__form__searchElement}>
                        <input 
                            type='text'
                            name='searchInput'
                            placeholder='Código ou Nome do banco'
                            value={searchFilter}
                            onChange={(event)=>setSearchFilter(event.target.value)}>
                        </input>
                        <div className={classNames({[styles.bank__form__searchElement__select]:true, [styles.bank__form__searchElement__select__hidden]: searchList.length === 0})}>
                            {(searchList.length > 0) && searchList.map(item => <p key={item.ispb} onClick={()=>handleDropList(item.searchWord)}>{item.searchWord}</p>)}
                        </div>
                    </div>
                    
                    <button onClick={()=>searchBank(searchFilter)}>Search</button>

                </section>

                {(selectedBanks.length === 0) && <p>Pesquise o banco desejado acima...</p>}
                <section className={styles.bank__display}>
                    {(selectedBanks.length > 0) && selectedBanks.map(bank => <DisplayBank bank={bank}/>)}
                </section>

            </main>
        )

    }

}