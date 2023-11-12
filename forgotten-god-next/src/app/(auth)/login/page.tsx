"use client"

import { LoginWrapper, LoginHeader, LoginMethods, LoginForm, LoginFormHeader, LoginCheckbox, LoginCheckboxLabel, LoginCheckboxLabelText, LoginButton, LoginFormLinkWrapper, LoginFormLink,  } from "@/services/auth/styles/login.js"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import InputField from "@/services/auth/components/InputField/InputField"
import { useToastMessage } from "@/components/ToastMessage/ToastMessageProvider"


const LoginPage = () => {

    const router = useRouter()
    const setToastMessage = useToastMessage()

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
            const data = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/login`, {
                method: 'POST',
                body : JSON.stringify(loginInfo),
                credentials: "include"
                
            })
    
            const json = await data.json() 
           
            json.access_token ? 
                router.back() :
                setToastMessage("Такого пользователя не существует", true, 2000)
        
        }
        catch (error) {
            console.error(error)
            setToastMessage("Что-то пошло не так, попробуйте снова", true, 2000)
            
        }
        

    }


    return(
        <>
            <LoginWrapper>
                {/* <LoginHeader>Авторизация</LoginHeader> */}
                <LoginMethods>
                    <LoginForm>
                        <LoginFormHeader>Вход</LoginFormHeader>
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

export default LoginPage