import styled from "styled-components";
import Link from "next/link";


export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    align-items: flex-start;
    padding-block: 20px;
    
    @media (min-width: 600px) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

export const RegisterHeader = styled.h1`
    margin-left: 20px;
    font-size: 24px;
    color: #fff;
    text-transform: uppercase;
`

export const RegisterMethods = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
    width: 100%;
`

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
    padding: 40px 40px;
    border-radius: 20px;
    background-color: #222222;
    width: clamp(260px, 200px + 30vw, 600px);
`

export const RegisterFormHeader = styled.h2`
    color: #ccc;
    font-size: clamp(14px, 7px + 2vw, 20px);
`

export const RegisterTextInputLabel = styled.label`
    position: relative;
    width: 100%;
    font-size: clamp(10px, 5px + 2vw, 16px);
`

export const RegisterTextInputLabelText = styled.span`
    position: absolute;
    color: #ccc;
    left: 20px;
    top: 50%;
    transform: translate(0, -50%);
    transition: top 0.25s cubic-bezier(0.0, 0, 0.2, 1), font-size 0.2s cubic-bezier(0.0, 0, 0.2, 1) ;
`


export const RegisterTextInput = styled.input`
    width: 100%;
    background-color: #2e2e2e;
    border-radius: 4px;
    color: #ccc;
    padding: 25px 20px 8px 20px;
    border: none;
    outline: 1px solid ${props => ( props.isInvalid ? '#c52929' : 'transparent')};

    &:focus{
        outline: 1px solid #ccc;
    }
    &:focus ~ ${RegisterTextInputLabelText}, &:not(:placeholder-shown)&:not(:focus) ~ ${RegisterTextInputLabelText}{
        top: 2px;
        transform: none;
        font-size: 0.8em;
    }
    

`
export const RegisterPasswordHiddenButton = styled.img`
    position: absolute;
    width: clamp(14px, 7px + 2vw, 28px);
    height: clamp(14px, 7px + 2vw, 28px);
    object-fit: cover;
    right: 16px;
    top: 50%;
    cursor: pointer;
    transform: translate(0, -50%);
    

    border-radius: 2px;
`

export const RegisterCheckbox = styled.input`
    width: clamp(10px, 5px + 2vw, 15px);
    height: clamp(10px, 5px + 2vw, 15px);
`

export const RegisterCheckboxLabel = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
    align-self: flex-start;
    padding: 0 5px;
    cursor: pointer;
    max-width: 400px;
`
export const RegisterCheckboxLabelText = styled.span`
    font-size: clamp(10px, 5px + 2vw, 16px);
    color: #ccc;
    
`

export const RegisterInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    row-gap: clamp(5px, 3px + 2vw, 10px);
    
`

export const RegisterInputErrorMessage = styled.span`
    font-size: 11px;
    color: #c52929;
    left: 5px;
    top: calc(100% + 2px);
    
`


export const RegisterButton = styled.button`
    font-size: clamp(12px, 6px + 2vw,18px);
    color: #ccc;
    background-color: #282828;
    border: none;
    width: 100%;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        background-color: #37373a;
    }
    &:disabled{
        color: #4e4e4e;
        cursor: default;
    }
`

export const RegisterFormLinkWrapper = styled.p`
    font-size: clamp(10px, 5px + 1vw, 14px);
    color: #8d8b8b;
`

export const RegisterFormLink = styled(Link)`
    color: #ccc;
    text-decoration: underline;
    &:hover{
        text-decoration: none;
    }
`