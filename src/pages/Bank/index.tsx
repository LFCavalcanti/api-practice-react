import classNames from 'classnames'
import { useState } from 'react'
import styles from './Bank.module.scss'

export default function Bank() {
    const [searchType, setSearchType] = useState('nome')
    return (
        <div className={styles.bank__container}>
            <h1 className={styles.bank__titulo}>BANCOS</h1>
            <div className={styles.bank__form}>
                <div className={styles.bank__form__select}>
                    <p>Buscar por:</p>
                    <button
                        onClick={() => setSearchType('nome')}
                        className={classNames({
                            [styles.bank__form__select__btn]:true,
                            [styles.bank__form__select__btn_selected]: (searchType === 'nome')
                        })
                    }>
                        Nome
                    </button>
                    <button
                        onClick={() => setSearchType('codigo')}
                        className={classNames({
                                [styles.bank__form__select__btn]:true,
                                [styles.bank__form__select__btn_selected]: (searchType === 'codigo')
                            })
                        }>
                        Código
                    </button>
                </div>
                <div className={styles.bank__form__inputFilter}>
                    <p>Digite:</p>
                    {(searchType === 'nome') &&
                        <select>
                            <option>TESTE1</option>
                            <option>TESTE2</option>
                        </select>
                    }
                    {(searchType === 'codigo') &&
                        <input type='number'></input>                            
                    }
                    <button>Buscar</button>
                </div>
            </div>
            <div className={styles.bank__display}>
                <span>PLACEHOLDER</span>
            </div>
        </div>
    )
}