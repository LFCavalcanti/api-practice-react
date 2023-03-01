import { useEffect, useState } from 'react'
import DisplayCard from '../../components/DisplayCard'
import LoadingData from '../../components/LoadingData'
import SearchInputList from '../../components/SearchInputList'
import { iBank } from '../../interfaces/iBank'
import { iInfoList } from '../../interfaces/iInfoList'
import styles from './Bank.module.scss'

export default function Bank() {
    const [bankList, setBankList] = useState<iBank[]>([])
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

    const searchBank = (textFilter:string) => {
        if(textFilter){
            let filteredList = bankList.filter((bank) => bank.searchWord.includes(textFilter.toUpperCase()))
            setSelectedBanks(filteredList)
        } else {
            setSelectedBanks([])
        }
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

                <h1 className={styles.bank__titulo}>BANCOS</h1>

                <SearchInputList dataList={bankList} selectAction={searchBank} placeHolderTxt={'Código ou Nome do banco'} />

                {(selectedBanks.length === 0) && <p>Pesquise o banco desejado acima...</p>}
                <section className={styles.bank__display}>
                    {(selectedBanks.length > 0) && selectedBanks.map(bank => <DisplayCard key={bank.ispb} infoList={infoList} payload={bank}/>)}
                </section>

            </main>
        )

    }

}