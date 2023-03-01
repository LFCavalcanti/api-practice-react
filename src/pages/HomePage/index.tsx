import styles from './HomePage.module.scss'
import {ReactComponent as Logo} from '/src/assets/logo.svg'

export default function HomePage(){
    return(
        <main className={styles.container}>
            <h1 className={styles.titulo}>WELCOME!</h1>
            <section className={styles.information}>
                <Logo id="logo" className={styles.information__logoProject} />
                <div className={styles.information__text}>
                    <h2>This is a personal project to practice React and REST API</h2>
                    <strong>
                        Feel free to browse the pages in the menu above
                    </strong>
                    <p>
                        Each page uses a different API endpoint
                        <br/>Go check the code and thinker around if you like.
                    </p>
                </div>
            </section>

            <section className={styles.brasilApi}>
                <img src='https://brasilapi.com.br/_next/image?url=%2Fbrasilapi-logo-medium.png&w=256&q=75'
                    id="logo"
                    className={styles.brasilApi__logo}
                />
                <div className={styles.brasilApi__text}>
                    <h2>I'm using Brasil API to get data</h2>
                    <strong>
                        Important information from Brasil in a low latency API endpoints
                    </strong>
                    <p className={styles.brasilApi__text__awesome}>It's awesome!</p>
                    <p>
                        Check out their <a href='https://brasilapi.com.br/' target='_blank'>Website</a> and the <a href='https://github.com/BrasilAPI/BrasilAPI' target='_blank'>Github Repo</a>
                    </p>
                </div>
            </section>

        </main>
    )
}