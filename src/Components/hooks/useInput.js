import { useState } from 'react'

const useInput = (fun) => {
    const [isClicked , setIsClicked] = useState(false)
    const [value , setValue] = useState('')
    let isValid = fun(value)
    const inputHandler = (e) => {
        setIsClicked(true)
        setValue(e.target.value)
    }
    const inputBlur = () => {
        setIsClicked(true)
    }
    const inputReset =() => {
        setIsClicked(false)
        setValue('')
    }
    return {
        value,
        setValue,
        isClicked,
        isValid,
        inputHandler,
        inputBlur,
        inputReset
    }
}

export default useInput