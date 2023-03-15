import styles from './MainTitle.module.scss'

interface IMainTitle{
    text:string
}

export default function MainTitle({text}:IMainTitle){
    return(
        <h1 className={styles.title}>{text}</h1>
    )
}