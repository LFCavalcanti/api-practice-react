
import axios from 'axios'
import { useState } from 'react'
import DisplayCnpj from '../../components/DisplayCnpj'
import ConvertDateFromISO from '../../helpers/ConvertDateFromISO'
import { iCnpj } from '../../interfaces/iCnpj'
import styles from './Cnpj.module.scss'

export default function Cep() {

    const [cnpj, setCnpj] = useState<string>('')
    const [cnpjInformation, setCnpjInformation] = useState<iCnpj>()

    const valDigitCep = (newCnpj:string) => {
        if(newCnpj) setCnpj(newCnpj)
    }

    const searchCnpj = (cnpjToSearch:string) => {
        if(cnpjInformation) setCnpjInformation(undefined)
        axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpjToSearch}`)
        .then((response)=>{
            let data = response.data
            let cnpjInfo:iCnpj = {
                cnpj : data.cnpj,
                razao_social : data.razao_social,
                nome_fantasia : data.nome_fantasia,
                identificador_matriz_filial : data.identificador_matriz_filial,
                descricao_matriz_filial : data.descricao_matriz_filial,
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
                codigo_municipio : data.codigo_municipio,
                municipio : data.municipio,
                nome_cidade_exterior : data.nome_cidade_exterior,
                codigo_natureza_juridica : data.codigo_natureza_juridica,
                cnae_fiscal : data.cnae_fiscal,
                cnae_fiscal_descricao : data.cnae_fiscal_descricao,
                ddd_telefone_1 : data.ddd_telefone_1,
                ddd_telefone_2 : data.ddd_telefone_2
            }
            setCnpjInformation(cnpjInfo)
        })
        .catch((error)=>console.log(error))
    }

    return (
        <main className={styles.cnpj__container}>
            <h1 className={styles.cnpj__titulo}>CEP</h1>
            <section className={styles.cnpj__search}>
                <label htmlFor='searchInput'>Busca:</label>
                <input
                    type='text'
                    name='searchInput'
                    placeholder='Numero do CEP que deseja buscar'
                    value={cnpj}
                    onChange={(event)=>valDigitCep(event.target.value)}
                    >
                </input>
                <button onClick={()=>searchCnpj(cnpj)}>SEARCH</button>
            </section>
            <section className={styles.cnpj__display}>
                {(cnpjInformation) && <DisplayCnpj cnpjInformation={cnpjInformation}></DisplayCnpj>}
            </section>
        </main>
    )
}