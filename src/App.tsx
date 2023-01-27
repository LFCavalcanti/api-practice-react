import { useState } from 'react'
import {ReactComponent as Logo} from './assets/logo.svg';
import styles from './app.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo id="logo" className={styles.logo} />
      <p id="app-name" className={styles.titulo}>API-PRACTICE-REACT</p>
    </>
  )
}

export default App
