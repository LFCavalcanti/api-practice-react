import { Link } from "react-router-dom"
import {ReactComponent as Logo} from '/src/assets/logo.svg'
import styles from './Menu.module.scss'

export default function Menu() {
    const paginas = [
        {
            label: 'HOME',
            to: '/'
        },
        {
            label: 'CEP',
            to: '/cep'
        },
        {
            label: 'BANKS',
            to: '/bancos'
        },
        {
            label: 'CNPJ',
            to: '/cnpj'
        },
        {
            label: 'NCM',
            to: '/ncm'
        }
    ]

    return(
        <header className={styles.menu__container}>
            <div className={styles.menu__header}>
                <Logo id="logo" className={styles.menu__logo} />
                <p id="app-name" className={styles.menu__titulo}>API - PRACTICE REACT</p>
            </div>
            <nav className={styles.menu__nav}>
                {paginas.map((pagina)=>(
                    <Link key={pagina.label} to={pagina.to} id='pageLink' className={styles.menu__item}>{pagina.label}</Link>
                ))}
            </nav>
        </header>
    )
    
}