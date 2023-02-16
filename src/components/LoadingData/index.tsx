import styles from './LoadingData.module.scss'

export default function LoadingData(){
    return (
        <div className={styles.container}>
            <span className={styles.messageLoading}>Loading data...</span><span className={styles.loadingSymbol}></span>
        </div>
    )
}