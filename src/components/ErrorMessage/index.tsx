import styles from './ErrorMessage.module.scss';

interface IErrorMessage {
    message : string
}

export default function ErrorMessage({message} : IErrorMessage){
    return (
        <div className={styles.messageContainer}>
            <h3>ERROR:</h3>
            <p>{message}</p>
        </div>
    )
}