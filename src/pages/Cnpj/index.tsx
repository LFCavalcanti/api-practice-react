
import axios from 'axios'
import { useState } from 'react'
import DisplayCard from '../../components/DisplayCard'
import ErrorMessage from '../../components/ErrorMessage'
import MainTitle from '../../components/MainTitle'
import SearchInputTxt from '../../components/SearchInputTxt'
import ConvertDateFromISO from '../../helpers/ConvertDateFromISO'
import { iCnpj } from '../../interfaces/iCnpj'
import { iInfoList } from '../../interfaces/iInfoList'
import styles from './Cnpj.module.scss'

export default function Cnpj() {

    const [cnpjInformation, setCnpjInformation] = useState<iCnpj>()
    const [errorMsg, setErrorMsg] = useState<string>('')

    const infoList:iInfoList[] = [
        {attribute: 'cnpj', label: 'CODIGO:'},
        {attribute: 'razao_social', label: 'RAZAO SOCIAL:'},
        {attribute: 'nome_fantasia', label: 'NOME FANTASIA:'},
        {attribute: 'matriz_filial', label: 'MATRIZ/FILAIL:'},
        {attribute: 'descricao_situacao_cadastral', label: 'SITUAÇÃO:'},
        {attribute: 'data_inicio_atividade', label: 'DATA INICIO:'},
        {attribute: 'data_situacao_cadastral', label: 'DATA ATUALIZAÇÃO:'},
        {attribute: 'descricao_tipo_logradouro', label: 'TIPO LOGRADOURO:'},
        {attribute: 'logradouro', label: 'LOGRADOURO:'},
        {attribute: 'numero', label: 'NUMERO:'},
        {attribute: 'complemento', label: 'COMPLEMENTO:'},
        {attribute: 'bairro', label: 'BAIRRO:'},
        {attribute: 'cep', label: 'CEP:'},
        {attribute: 'uf', label: 'ESTADO:'},
        {attribute: 'codigo_municipio', label: 'COD IBGE:'},
        {attribute: 'municipio', label: 'MUNICIPIO:'},
        {attribute: 'nome_cidade_exterior', label: 'MUNICIPIO EXT:'},
        {attribute: 'codigo_natureza_juridica', label: 'NATUREZA JURIDICA:'},
        {attribute: 'cnae_fiscal', label: 'CNAE FISCAL:'},
        {attribute: 'cnae_fiscal_descricao', label: 'DESCRIÇÃO CNAE:'},
        {attribute: 'ddd_telefone_1', label: 'TELEFONE 1:'},
        {attribute: 'ddd_telefone_2', label: 'TELEFONE 2:'},
    ]

    const searchCnpj = (cnpjToSearch:string) => {
        cnpjToSearch = cnpjToSearch.replace(/[^\d]+/g,'')
        if(cnpjInformation) setCnpjInformation(undefined)
        axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpjToSearch}`)
        .then((response)=>{
            let data = response.data
            let id_filial = (!data.identificador_matriz_filial) ? '' : data.identificador_matriz_filial
            let descricao_matriz_filial = (!data.descricao_matriz_filial) ? '' : data.descricao_matriz_filial
            let cnpjInfo:iCnpj = {
                cnpj : data.cnpj,
                razao_social : data.razao_social,
                nome_fantasia : data.nome_fantasia,
                matriz_filial : `${id_filial} - ${descricao_matriz_filial}`,
                descricao_situacao_cadastral : data.descricao_situacao_cadastral,
                data_inicio_atividade : ConvertDateFromISO(data.data_inicio_atividade),
                data_situacao_cadastral : ConvertDateFromISO(data.data_situacao_cadastral),
                descricao_tipo_logradouro : data.descricao_tipo_logradouro,
                logradouro : data.logradouro,
                numero : data.numero,
                complemento : data.complemento,
                bairro : data.bairro,
                cep : data.cep,
                uf : data.uf,
                codigo_municipio : `${data.codigo_municipio}`,
                municipio : data.municipio,
                nome_cidade_exterior : data.nome_cidade_exterior,
                codigo_natureza_juridica : `${data.codigo_natureza_juridica}`,
                cnae_fiscal : data.cnae_fiscal,
                cnae_fiscal_descricao : data.cnae_fiscal_descricao,
                ddd_telefone_1 : data.ddd_telefone_1,
                ddd_telefone_2 : data.ddd_telefone_2
            }
            setCnpjInformation(cnpjInfo)
            setErrorMsg('')
        })
        .catch((error)=>{
            const errorMessage = (error.response.data.message) ? error.response.data.message : 'UNKNOWN ERROR MESSAGE'
            console.error(error)
            setErrorMsg(`${errorMessage}`)
        })
    }

    const validateCnpj = (cnpj:string) => {

        const regExWithExtra = new RegExp(/[\d]{1,2}\.[\d]{3}\.[\d]{3}\/[\d]{4}[-]{1}[\d]{2}/g)
        const regExOnlyNum = new RegExp(/[\d]{13,14}/g)
        return (regExWithExtra.test(cnpj) || regExOnlyNum.test(cnpj))

    }

    return (
        <main className={styles.cnpj__container}>

            <MainTitle text="CNPJ" />

            <SearchInputTxt placeHolder='Numero do CNPJ que deseja buscar' onClickCallBack={searchCnpj} validationFunc={validateCnpj} />

            <section className={styles.cnpj__display}>
                {(errorMsg) && <ErrorMessage message={errorMsg} />}
                {(cnpjInformation) && <DisplayCard infoList={infoList} payload={cnpjInformation}/>}
            </section>
        </main>
    )
}