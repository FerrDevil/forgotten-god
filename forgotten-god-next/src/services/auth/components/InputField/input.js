import styled from "styled-components"

import PasswordHiddenSVG from "@/services/auth/public/password-hidden.svg"
import PasswordShownSVG from "@/services/auth/public/password-shown.svg"

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    row-gap: clamp(5px, 3px + 2vw, 10px);
    
`

export const InputErrorMessage = styled.span`
    font-size: 11px;
    color: #c52929;
    left: 5px;
    top: calc(100% + 2px);
    
`


export const TextInputLabel = styled.label`
    position: relative;
    width: 100%;
    font-size: clamp(10px, 5px + 2vw, 16px);
`

export const TextInputLabelText = styled.span`
    position: absolute;
    color: #ccc;
    left: 20px;
    top: 50%;
    transform: translate(0, -50%);
    transition: top 0.25s cubic-bezier(0.0, 0, 0.2, 1), font-size 0.2s cubic-bezier(0.0, 0, 0.2, 1) ;
`


export const TextInput = styled.input`
    width: 100%;
    background-color: #2e2e2e;
    border-radius: 4px;
    color: #ccc;
    padding: 25px 20px 8px 20px;
    border: none;
    outline: 1px solid ${props => ( props.$isValid ? 'transparent' : '#c52929')};

    &:focus{
        outline: 1px solid #ccc;
    }
    &:focus ~ ${TextInputLabelText}, &:not(:placeholder-shown)&:not(:focus) ~ ${TextInputLabelText}{
        top: 2px;
        transform: none;
        font-size: 0.8em;
    }
    

`

export const PasswordHiddenButton = styled.button`
    all: unset;
    display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    width: clamp(14px, 7px + 2vw, 28px);
    height: clamp(14px, 7px + 2vw, 28px);
    right: 16px;
    top: 50%;
    cursor: pointer;
    transform: translate(0, -50%);
    

    border-radius: 2px;

    &:hover, &:active > svg{
        fill: #780c0c;
    }
`
export const PasswordHiddenButtonSVG = styled(PasswordHiddenSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #ccc;
    transition: fill 0.3s;
    &:active, &:hover{
        fill: #780c0c;
    }
`
export const PasswordShownButtonSVG = styled(PasswordShownSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #ccc;
    transition: fill 0.3s;
    &:active, &:hover{
        fill: #780c0c;
    }
`