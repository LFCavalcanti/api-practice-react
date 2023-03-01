import styles from './NotFound.module.scss'

export default function NotFound(){
    return(
        <main className={styles.container}>
            <h2>404</h2>
            <p>The requested page was not found</p>
        </main>
    )
}