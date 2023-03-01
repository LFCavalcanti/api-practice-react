
import axios from 'axios'
import { useState } from 'react'
import DisplayCard from '../../components/DisplayCard'
import SearchInputTxt from '../../components/SearchInputTxt'
import { iCep } from '../../interfaces/iCep'
import { iInfoList } from '../../interfaces/iInfoList'
import styles from './Cep.module.scss'

export default function Cep() {

    const [cepInformation, setCepInformation] = useState<iCep>()

    const infoList:iInfoList[] = [
        {attribute: 'cep', label: 'CODIGO:'},
        {attribute: 'state', label: 'ESTADO:'},
        {attribute: 'city', label: 'CIDADE:'},
        {attribute: 'neighborhood', label: 'BAIRRO:'},
        {attribute: 'street', label: 'LOGRADOURO:'}
    ]

    const searchCep = (cepToSearch:string) => {
        if(cepInformation) setCepInformation(undefined)
        axios.get(`https://brasilapi.com.br/api/cep/v2/${cepToSearch}`)
        .then((response)=>{
            setCepInformation(response.data)
        })
        .catch((error)=>console.error(error))
    }

    return (
        
        <main className={styles.cep__container}>

            <h1 className={styles.cep__titulo}>CEP</h1>
            
            <SearchInputTxt  placeHolder='Numero do CEP que deseja buscar' onClickCallBack={searchCep}/>

            <section className={styles.cep__display}>
                {(cepInformation) && <DisplayCard infoList={infoList} payload={cepInformation} />}
            </section>
        </main>
    )
}