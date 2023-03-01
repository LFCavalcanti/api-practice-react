import { useState } from 'react'
import styles from './SearchInputTxt.module.scss'

interface SearchInputTxtProps{
    placeHolder: string
    onClickCallBack: (searchText:string) => void
    validationFunc?: (textToValidate:string) => boolean
}

export default function SearchInputTxt(
    {
        placeHolder,
        onClickCallBack,
        validationFunc = () => true
    }:SearchInputTxtProps){

    const [text, setText] = useState<string>('')
    const [validInput, setValidInput] = useState<boolean>(true)

    const onChangeValidation = (inputText:string) => {
        if(inputText){
            setText(inputText)
            setValidInput(validationFunc(inputText))
        } else {
            setText('')
            setValidInput(true)
        }
    }

    const onClickHandler = () => {
        if(text && validInput) onClickCallBack(text)
    }

    return (
        <section className={styles.search}>
            <label htmlFor='searchInput'>Busca:</label>
            <input
                type='text'
                name='searchInput'
                placeholder={placeHolder}
                value={text}
                className={(!validInput) ? styles.invalidInput : ''}
                onChange={(event)=>onChangeValidation(event.target.value)}
                >
            </input>
            <button onClick={onClickHandler}>SEARCH</button>
        </section>
    )
}