"use client"
import styled from "styled-components";
import Link  from "next/link";

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 24px;
    width: 100%;
    height: 100%;
    align-items: center;
    padding-block: 20px;
    
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
    transition: background-color 0.3s, color 0.3s;
    &:disabled{
        background-color: #282828;
        color: #4e4e4e;
        cursor: default;
    }
    &:not(:disabled):hover, &:not(:disabled):focus-visible, &:not(:disabled):active{
        background-color: #37373a;
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

