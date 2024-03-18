"use client"

import { InputWrapper, TextInputLabel, TextInput, TextInputLabelText, InputErrorMessage, PasswordHiddenButton, PasswordHiddenButtonSVG, PasswordShownButtonSVG } from "./styles"
import { useEffect, useState } from "react"

const InputField = ({ name, onChange, type="text", placeholder="", isValid=true, errorMessage="", required=true }) => {
    const [inputType, setInputType] = useState(type)
    const [valueChanged, setValueChanged] = useState(false)

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        onChange(event)
        setValueChanged(true)
    }

    if (type === "password"){
        const changeInputType =  (event : React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault()
            setInputType(prev => prev === "password" ? "text" : "password")
        }
        return (
            <InputWrapper>
                <TextInputLabel>
                    <TextInput required type={inputType} id={name} name={name}  onChange={onChangeHandler} placeholder=" " $isValid={!valueChanged || isValid }/>
                    <TextInputLabelText>{placeholder}</TextInputLabelText>
                    <PasswordHiddenButton onClick={changeInputType}>
                        { inputType === "password" ?
                            <PasswordHiddenButtonSVG/> :
                            <PasswordShownButtonSVG/>
                        }
                    </PasswordHiddenButton>
                </TextInputLabel>
               { !valueChanged || !isValid && <InputErrorMessage>{errorMessage}</InputErrorMessage> }
            </InputWrapper>
        )
    }
    return (
        <InputWrapper>
            <TextInputLabel>
                <TextInput type={type} id={name} name={name}  onChange={onChangeHandler} placeholder=" " $isValid={!valueChanged || isValid}/>
                <TextInputLabelText>{placeholder}</TextInputLabelText>
            </TextInputLabel>
           {!valueChanged ||  !isValid && <InputErrorMessage>{errorMessage}</InputErrorMessage> }
        </InputWrapper>
    )
}

export default InputField