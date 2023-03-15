import { useEffect, useRef, useState } from 'react'
import DisplayOutlet from '../../components/DisplayOutlet'
import LoadingData from '../../components/LoadingData'
import SearchInputList from '../../components/SearchInputList'
import UIConstants from '../../global/UiConstants'
import ConvertDateFromISO from '../../helpers/ConvertDateFromISO'
import { iInfoList } from '../../interfaces/iInfoList'
import { iNcm } from '../../interfaces/iNcm'
import styles from './Ncm.module.scss'

export default function Ncm() {
    const UiConstants = UIConstants()
    const [ncmList, setNcmList] = useState<iNcm[]>([])
    const [lastSearch, setLastSearch] = useState<string>('')
    const [selectedNcms, setSelectedNcms] = useState<iNcm[]>([])
    const [connectionError, setConnectionError] = useState<string>('')

    const infoList:iInfoList[] = [
        {attribute: 'codigo', label: 'CÓDIGO:'},
        {attribute: 'descricao', label: 'DESCRIÇÃO:'},
        {attribute: 'data_inicio', label: 'DATA INICIO:'},
        {attribute: 'data_fim', label: 'DATA FIM:'},
        {attribute: 'tipo_ato', label: 'TIPO ATO:'},
        {attribute: 'numero_ato', label: 'NUMERO ATO:'},
        {attribute: 'ano_ato', label: 'ANO ATO:'},
    ]

    const loadNcms = () => {
        fetch('https://brasilapi.com.br/api/ncm/v1')
        .then((response)=>{
            if(response.status === 404) throw `URL: ${response.url} - NOT FOUND`
            return response.json()
        })
        .then((response)=>{
            let ncms:iNcm[] = []
            response.forEach((item:iNcm)=>{
                let currNcm = {
                    uniqueId: item.codigo,
                    codigo: item.codigo,
                    descricao: item.descricao,
                    data_inicio: ConvertDateFromISO(item.data_inicio),
                    data_fim: ConvertDateFromISO(item.data_fim),
                    tipo_ato: item.tipo_ato,
                    numero_ato: item.numero_ato,
                    ano_ato: item.ano_ato,
                    searchWord: `${item.codigo.toUpperCase()} - ${item.descricao.toUpperCase()}`
                }
                ncms.push(currNcm)
            })
            setNcmList(ncms)
        })
        .catch((error)=>{
            console.error(error)
            setConnectionError(`${error}`)
        })
    }

    const searchNcm = (textFilter:string, amountToShow:number = UiConstants.DEFAULT_AMOUNT_TO_SHOW) => {
        if(textFilter){
            let filteredList = ncmList.filter((ncm) => ncm.searchWord.includes(textFilter.toUpperCase()))
            if(filteredList.length > amountToShow) filteredList = filteredList.slice(1, amountToShow + 1)
            setSelectedNcms(filteredList)
        } else {
            setSelectedNcms([])
        }
    }

    const handleSearch = (textFilter:string) => {
        if(textFilter){
            setLastSearch(textFilter)
        }
        searchNcm(textFilter)
    }

    useEffect(()=>{
        loadNcms()
    },[])

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

                <SearchInputList dataList={ncmList} selectAction={handleSearch} placeHolderTxt='Código ou Descrição do NCM desejado'/>

                <DisplayOutlet infoList={infoList} itemList={selectedNcms} lastSearch={lastSearch} updateFn={searchNcm} placeHolder='Pesquise o NCM desejado acima...'/>

            </main>
        )

    }

}