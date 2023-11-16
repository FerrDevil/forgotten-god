"use client"

import { LoginWrapper, LoginHeader, LoginMethods, LoginForm, LoginFormHeader, LoginButton, LoginFormLinkWrapper, LoginFormLink } from "./styles"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import InputField from "@/services/auth/components/InputField/InputField"
import { useDispatch } from "react-redux"
import { setUser } from "@/store/store"


export default function Login(){

    const router = useRouter()
    const [errorMessageText, setErrorMessageText] = useState("")
    const dispatch = useDispatch()

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

    
    const formSubmit = async (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        try {
            const data = await fetch("/api/signIn", {
                method: 'POST',
                body : JSON.stringify(loginInfo),
                credentials: "include",
            })
    
            const json = await data.json() 
           
            if (json.access_token) {
                const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/getUser`, { credentials: "include"})
                console.log(response)
                dispatch(setUser(await response.json()))
            }
            else{
                setErrorMessageText("Такого пользователя не существует")
            }
                
            
            /* console.log(new Headers(refreshAccess.headers) ) */
            
        }
        catch (error) {
            setErrorMessageText("Что-то пошло не так, попробуйте снова")
        }
        

    }


    return(
        <>
            <LoginWrapper>
                <LoginHeader>Авторизация</LoginHeader>
                <LoginMethods>
                    <LoginForm method="POST" >
                        <LoginFormHeader>Вход с помощью аккаунта</LoginFormHeader>
                        <InputField
                            name="login"
                            placeholder="Логин"
                            onChange={onChangeLoginInfo("login")}
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
                
                        
                        <LoginButton disabled={isSubmitButtonDisabled} onClick={formSubmit} type="submit">Войти</LoginButton>
                        <LoginFormLinkWrapper>У вас еще нет аккаунта? <LoginFormLink href='/register'>Зарегистрироваться</LoginFormLink></LoginFormLinkWrapper>
                    </LoginForm>
                </LoginMethods>
            </LoginWrapper>
        </>
    )
}