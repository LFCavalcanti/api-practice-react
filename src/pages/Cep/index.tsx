
import axios from 'axios'
import { useState } from 'react'
import DisplayCard from '../../components/DisplayCard'
import ErrorMessage from '../../components/ErrorMessage'
import MainTitle from '../../components/MainTitle'
import SearchInputTxt from '../../components/SearchInputTxt'
import { iCep } from '../../interfaces/iCep'
import { iInfoList } from '../../interfaces/iInfoList'
import styles from './Cep.module.scss'

export default function Cep() {

    const [cepInformation, setCepInformation] = useState<iCep>()
    const [errorMsg, setErrorMsg] = useState<string>('')

    const infoList:iInfoList[] = [
        {attribute: 'cep', label: 'CODIGO:'},
        {attribute: 'state', label: 'ESTADO:'},
        {attribute: 'city', label: 'CIDADE:'},
        {attribute: 'neighborhood', label: 'BAIRRO:'},
        {attribute: 'street', label: 'LOGRADOURO:'}
    ]

    const searchCep = (cepToSearch:string) => {
        cepToSearch = cepToSearch.replace(/[^\d]+/g,'')
        if(cepInformation) setCepInformation(undefined)
        axios.get(`https://brasilapi.com.br/api/cep/v2/${cepToSearch}`)
        .then((response)=>{
            setCepInformation(response.data)
            setErrorMsg('')
        })
        .catch((error)=>{
            const errorMessage = (error.response.data.message) ? error.response.data.message : 'UNKNOWN ERROR MESSAGE'
            console.error(error)
            setErrorMsg(`${errorMessage}`)
        })
    }

    const validateCep = (cnpj:string) => {

        const regExWithExtra = new RegExp(/([\d]{1,2}\.[\d]{3}-[\d]{3})|([\d]{4,5}-[\d]{3})/g)
        const regExOnlyNum = new RegExp(/[\d]{7,8}/g)
        return (regExWithExtra.test(cnpj) || regExOnlyNum.test(cnpj))

    }

    return (
        
        <main className={styles.cep__container}>

            <MainTitle text="CEP" />
            
            <SearchInputTxt  placeHolder='Numero do CEP que deseja buscar' onClickCallBack={searchCep} validationFunc={validateCep} />

            <section className={styles.cep__display}>
                {(errorMsg) && <ErrorMessage message={errorMsg} />}
                {(cepInformation) && <DisplayCard infoList={infoList} payload={cepInformation} />}
            </section>
        </main>
    )
}