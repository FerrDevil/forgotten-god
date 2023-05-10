import styled from "styled-components";
import Link  from "next/link";

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    position: absolute;
    align-items: flex-start;
    padding-block: 20px;
    @media (min-width: 600px) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    
`

export const LoginHeader = styled.h1`
    margin-left: 20px;
    font-size: clamp(18px, 9px + 2vw, 24px);
    color: #fff;
    text-transform: uppercase;
`

export const LoginMethods = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
    width: 100%;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
    padding: 40px 40px;
    border-radius: 20px;
    background-color: #222222;
    width: clamp(260px, 200px + 20vw, 600px);
`

export const LoginFormHeader = styled.h2`
    color: #ccc;
    font-size: clamp(14px, 7px + 2vw, 20px);
`

export const LoginTextInputLabel = styled.label`
    position: relative;
    width: 100%;
    font-size: clamp(10px, 5px + 2vw, 16px);
`

export const LoginTextInputLabelText = styled.span`
    position: absolute;
    color: #ccc;
    left: 20px;
    top: 50%;
    transform: translate(0, -50%);
    transition: top 0.25s cubic-bezier(0.0, 0, 0.2, 1), font-size 0.2s cubic-bezier(0.0, 0, 0.2, 1) ;
`


export const LoginTextInput = styled.input`
    
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
    &:focus ~ ${LoginTextInputLabelText}, &:not(:placeholder-shown)&:not(:focus) ~ ${LoginTextInputLabelText}{
        top: 2px;
        transform: none;
        font-size: 0.8em;
    }
    &:-webkit-autofill{
        background-color: #2e2e2e;
    }
`

export const PasswordHiddenButton = styled.img`
    position: absolute;
    width: clamp(14px, 7px + 2vw, 28px);
    height: clamp(14px, 7px + 2vw, 28px);
    object-fit: cover;
    right: 16px;
    top: 50%;
    cursor: pointer;
    transform: translate(0, -50%);
    transition: width, height 0.2s ease-in-out;

    border-radius: 2px;
`

export const LoginCheckbox = styled.input`
    width: clamp(10px, 5px + 2vw, 15px);
    height: clamp(10px, 5px + 2vw, 15px);
    cursor: pointer;
`

export const LoginCheckboxLabel = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
    align-self: flex-start;
    padding: 0 5px;
    cursor: pointer;
`
export const LoginCheckboxLabelText = styled.span`
    font-size: clamp(10px, 5px + 2vw, 16px);
    color: #ccc;
`

export const LoginButton = styled.button`
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

export const LoginFormLinkWrapper = styled.p`
    font-size: clamp(10px, 5px + 1vw, 14px);
    color: #8d8b8b;
`

export const LoginFormLink = styled(Link)`
    
    color: #ccc;
    text-decoration: underline;
    &:hover{
        text-decoration: none;
    }
`

export const ErrorMessage = styled.span`
    font-size: 20px;
    padding: 10px 20px;
    background-color: #780c0c;
    color: #ccc;
    position: fixed;
    bottom: 10px;
    opacity: ${props => props.isVisible? 1: 0};
    left: 10px;
    &::after{
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        transition: width 1s linear;
        width: ${props => props.isVisible? 100: 0}%;
        height: 1px;
        background-color: #ccc;
    }
`