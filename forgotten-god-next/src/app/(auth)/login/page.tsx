"use client"

import { LoginWrapper, LoginHeader, LoginMethods, LoginForm, LoginFormHeader, LoginTextInputLabel, LoginTextInput, LoginTextInputLabelText, PasswordHiddenButton, LoginCheckbox, LoginCheckboxLabel, LoginCheckboxLabelText, LoginButton, LoginFormLinkWrapper, LoginFormLink, ErrorMessage } from "@/services/auth/styles/login.js"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import InputField from "@/services/auth/components/InputField/InputField"
import Head from "next/head"


const LoginPage = () => {

    const router = useRouter()


    const [loginInfo, setLoginInfo] = useState({
        login : ' ',
        password : ' '
    })

    const onChangeLoginInfo = (inputName: string) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            setLoginInfo(prev => ({...prev, [inputName] : event.target.value}))
        }
    }

    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)

    useEffect(
        () => {
            for (let value of Object.values(loginInfo)){
                if (value.trim() === ''){
                    setSubmitButtonDisabled(true)
                    return
                }
            }
            setSubmitButtonDisabled(false) 
        }, [loginInfo]
    )

    const [errorMessageText, setErrorMessageText] = useState("")


    const errorMessageAnimation = (text: string) => {
        setErrorMessageText(text)
        setTimeout(() => {
            setErrorMessageText('')
        }, 1100)
    }

    
    
    const formSubmit = async (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        try {
            const data = await fetch("https://forgotten-god.onrender.com//auth/login", {
                method: 'POST',
                body : JSON.stringify(loginInfo),
                credentials: "include",
                headers:{
                    "Content-Type": "application/json; charset=UTF-8",
                }
                
            }).catch(() => errorMessageAnimation("Такого пользователя не существует"))
    
            const json = await data.json() 
           
            json.access_token ? 
                router.back() :
                errorMessageAnimation("Такого пользователя не существует")
        
        }
        catch (error) {
            errorMessageAnimation("Что-то пошло не так, попробуйте снова")
        }
        

    }


    return(
        <>
            <LoginWrapper>
                <Head>
                    <title>Логин</title>
                </Head>
                <LoginHeader>Авторизация</LoginHeader>
                <LoginMethods>
                    <LoginForm method="POST" >
                        <LoginFormHeader>Вход с помощью аккаунта</LoginFormHeader>
                        <InputField
                            name="login"
                            placeholder="Логин"
                            onChange={onChangeLoginInfo("username")}
                            isValid={!!loginInfo.login}
                            errorMessage={!loginInfo.login && "Обязательное поле" || ""}
                        />
                        <InputField
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            onChange={onChangeLoginInfo("password")}
                            isValid={!!loginInfo.password}
                            errorMessage={!loginInfo.password && "Обязательное поле" || ""}
                        />
                
                        <LoginCheckboxLabel>
                            <LoginCheckbox type='checkbox'/>
                            <LoginCheckboxLabelText>Запомнить меня</LoginCheckboxLabelText>
                        </LoginCheckboxLabel>
                        <LoginButton disabled={isSubmitButtonDisabled} onClick={formSubmit} type="submit">Войти</LoginButton>
                        <LoginFormLinkWrapper>У вас еще нет аккаунта? <LoginFormLink href='/register'>Зарегистрироваться</LoginFormLink></LoginFormLinkWrapper>
                    </LoginForm>
                </LoginMethods>
                <ErrorMessage isVisible={errorMessageText}>{errorMessageText}</ErrorMessage>
            </LoginWrapper>
        </>
    )
}

export default LoginPage