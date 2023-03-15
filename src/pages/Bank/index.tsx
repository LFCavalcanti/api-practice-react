import { useEffect, useState } from 'react'
import DisplayOutlet from '../../components/DisplayOutlet'
import LoadingData from '../../components/LoadingData'
import MainTitle from '../../components/MainTitle'
import SearchInputList from '../../components/SearchInputList'
import UIConstants from '../../global/UiConstants'
import { iBank } from '../../interfaces/iBank'
import { iInfoList } from '../../interfaces/iInfoList'
import styles from './Bank.module.scss'

export default function Bank() {
    const UiConstants = UIConstants()
    const [bankList, setBankList] = useState<iBank[]>([])
    const [lastSearch, setLastSearch] = useState<string>('')
    const [selectedBanks, setSelectedBanks] = useState<iBank[]>([])
    const [connectionError, setConnectionError] = useState<string>('')

    const infoList:iInfoList[] = [
        {attribute:'fullName', label: 'NOME COMPLETO:'},
        {attribute:'name', label: 'NOME:'},
        {attribute:'code', label: 'CÓDIGO:'},
        {attribute:'ispb', label: 'ISPB:'}
    ]

    const loadBanks = () => {
        fetch('https://brasilapi.com.br/api/banks/v1')
        .then((response)=>{
            if(response.status === 404) throw `URL: ${response.url} - NOT FOUND`
            return response.json()
        })
        .then((response)=>{
            let banks:iBank[] = []
            response.forEach((item:iBank)=>{
                let currBank = {
                    uniqueId: item.ispb,
                    ispb: item.ispb,
                    name: item.name,
                    code: `${item.code}`,
                    fullName: item.fullName,
                    searchWord: `${(item.code === null) ? 'N/A' : item.code.toString()} - ${item.name}`
                }
                banks.push(currBank)
            })
            setBankList(banks)
        })
        .catch((error)=>{
            console.error(error)
            setConnectionError(`${error}`)
        })
    }

    const searchBank = (textFilter:string, amountToShow:number = UiConstants.DEFAULT_AMOUNT_TO_SHOW) => {
        if(textFilter){
            let filteredList = bankList.filter((bank) => bank.searchWord.includes(textFilter.toUpperCase()))
            if(filteredList.length > amountToShow) filteredList = filteredList.slice(1, amountToShow + 1)
            setSelectedBanks(filteredList)
        } else {
            setSelectedBanks([])
        }
    }

    const handleSearch = (textFilter:string) => {
        if(textFilter){
            setLastSearch(textFilter)
        }
        searchBank(textFilter)
    }

    useEffect(()=>{
        loadBanks()
    },[])

    if(!bankList.length){
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
            <main className={styles.bank__container}>

                <MainTitle text="BANCOS" />

                <SearchInputList dataList={bankList} selectAction={handleSearch} placeHolderTxt={'Código ou Nome do banco'} />

                <DisplayOutlet infoList={infoList} itemList={selectedBanks} lastSearch={lastSearch} updateFn={searchBank} placeHolder='Pesquise o banco desejado acima...'/>

            </main>
        )

    }

}