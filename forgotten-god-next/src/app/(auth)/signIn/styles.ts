"use client"

import styled from "styled-components";
import Link  from "next/link";
import GoogleSVG from "../public/web_dark_rd_na.svg"

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    
    
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
    width: 500px;
    @media (max-width: 600px) {
  
        width: 100%;
  
    }
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

export const LoginButton = styled.button`
    font-size: clamp(12px, 6px + 2vw,18px);
    color: #ccc;
    background-color: #282828;
    border: none;
    width: 100%;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    &:not(:disabled):hover{
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

export const SignInByOAuthButton = styled.button`
    background-color: #282828;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 10px 20px;
    border: none;
    font-size: clamp(10px, 5px + 2vw, 14px);
    border-radius: 5px;
    cursor: pointer;
`

export const GoogleIcon = styled(GoogleSVG)`
    width: 30px;
    height: 30px;
    object-fit: cover;
`
