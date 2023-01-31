import { Link } from "react-router-dom"
import {ReactComponent as Logo} from '/src/assets/logo.svg'
import styles from './Menu.module.scss'

export default function Menu() {
    const paginas = [
        {
            label: 'Inicio',
            to: '/'
        },
        {
            label: 'Cep',
            to: '/cep'
        },
        {
            label: 'Bancos',
            to: '/bancos'
        },
        {
            label: 'Cnpj',
            to: '/cnpj'
        },
        {
            label: 'NCM',
            to: '/ncm'
        }
    ]

    return(
        <>
            <Logo id="logo" className={styles.logo} />
            <p id="app-name" className={styles.titulo}>API-PRACTICE-REACT</p>
            <nav>
                <ul>
                    {paginas.map((pagina)=>(
                        <li key={pagina.label}>
                            <Link to={pagina.to}>{pagina.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
    
}