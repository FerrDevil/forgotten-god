"use client"
import { InputWrapper, TextInputLabel, TextInput, TextInputLabelText, InputErrorMessage, PasswordHiddenButton, PasswordHiddenButtonSVG, PasswordShownButtonSVG } from "./styles"
import { useState } from "react"

const InputField = ({ name, onChange, type="text", placeholder="", isValid=true, errorMessage="" }) => {
    const [inputType, setInputType] = useState(type)
    if (type === "password"){
        const changeInputType =  (event : React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault()
            setInputType(prev => prev === "password" ? "text" : "password")
        }
        return (
            <InputWrapper>
                <TextInputLabel>
                    <TextInput type={inputType} id={name} name={name}  onChange={onChange} placeholder=" " $isValid={isValid}/>
                    <TextInputLabelText>{placeholder}</TextInputLabelText>
                    <PasswordHiddenButton onClick={changeInputType}>
                        { inputType === "password" ?
                            <PasswordHiddenButtonSVG/> :
                            <PasswordShownButtonSVG/>
                        }
                    </PasswordHiddenButton>
                </TextInputLabel>
               { !isValid && <InputErrorMessage>{errorMessage}</InputErrorMessage> }
            </InputWrapper>
        )
    }
    return (
        <InputWrapper>
            <TextInputLabel>
                <TextInput type={type} id={name} name={name}  onChange={onChange} placeholder=" " $isValid={isValid}/>
                <TextInputLabelText>{placeholder}</TextInputLabelText>
            </TextInputLabel>
           { !isValid && <InputErrorMessage>{errorMessage}</InputErrorMessage> }
        </InputWrapper>
    )
}

export default InputField