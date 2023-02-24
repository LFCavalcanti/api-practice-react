
import axios from 'axios'
import { useState } from 'react'
import DisplayCep from '../../components/DisplayCep'
import { iCep } from '../../interfaces/iCep'
import styles from './Cep.module.scss'

export default function Cep() {

    const [cep, setCep] = useState<string>('')
    const [cepInformation, setCepInformation] = useState<iCep>()

    const valDigitCep = (newCep:string) => {
        if(newCep) setCep(newCep)
    }

    const searchCep = (cepToSearch:string) => {
        if(cepInformation) setCepInformation(undefined)
        axios.get(`https://brasilapi.com.br/api/cep/v2/${cepToSearch}`)
        .then((response)=>{
            setCepInformation(response.data)
        })
        .catch((error)=>console.log(error))
    }

    return (
        <main className={styles.cep__container}>
            <h1 className={styles.cep__titulo}>CEP</h1>
            <section className={styles.cep__search}>
                <label htmlFor='searchInput'>Busca:</label>
                <input
                    type='text'
                    name='searchInput'
                    placeholder='Numero do CEP que deseja buscar'
                    value={cep}
                    onChange={(event)=>valDigitCep(event.target.value)}
                    >
                </input>
                <button onClick={()=>searchCep(cep)}>SEARCH</button>
            </section>
            <section className={styles.cep__display}>
                {(cepInformation) && <DisplayCep cepInformation={cepInformation}></DisplayCep>}
            </section>
        </main>
    )
}