import { useEffect, useRef, useState } from 'react'
import DisplayCard from '../../components/DisplayCard'
import LoadingData from '../../components/LoadingData'
import SearchInputList from '../../components/SearchInputList'
import ConvertDateFromISO from '../../helpers/ConvertDateFromISO'
import { iInfoList } from '../../interfaces/iInfoList'
import { iNcm } from '../../interfaces/iNcm'
import styles from './Ncm.module.scss'

export default function Ncm() {
    const [ncmList, setNcmList] = useState<iNcm[]>([])
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

    const searchNcm = (textFilter:string) => {
        if(textFilter){
            let filteredList = ncmList.filter((ncm) => ncm.searchWord.includes(textFilter.toUpperCase()))
            setSelectedNcms(filteredList)
        } else {
            setSelectedNcms([])
        }
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

                <SearchInputList dataList={ncmList} selectAction={searchNcm} placeHolderTxt='Código ou Descrição do NCM desejado'/>
                
                {(selectedNcms.length === 0) && <p>Pesquise o NCM desejado acima...</p>}
                <section className={styles.display}>
                    {(selectedNcms.length > 0) && selectedNcms.map(ncm => <DisplayCard key={ncm.codigo} infoList={infoList} payload={ncm}/>)}
                </section>

            </main>
        )

    }

}