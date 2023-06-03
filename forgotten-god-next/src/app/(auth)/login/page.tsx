"use client"

import { LoginWrapper, LoginHeader, LoginMethods, LoginForm, LoginFormHeader, LoginCheckbox, LoginCheckboxLabel, LoginCheckboxLabelText, LoginButton, LoginFormLinkWrapper, LoginFormLink,  } from "@/services/auth/styles/login.js"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import InputField from "@/services/auth/components/InputField/InputField"
import ErrorMessage from "@/services/auth/components/ErrorMessage/ErrorMessage"


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



    
    
    const formSubmit = async (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        try {/*  https://forgotten-god.onrender.com */
            const data = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/login`, {
                method: 'POST',
                body : JSON.stringify(loginInfo),
                credentials: "include"
                
            })
    
            const json = await data.json() 
           
            json.access_token ? 
                router.back() :
                setErrorMessageText("Такого пользователя не существует")
        
        }
        catch (error) {
            console.error(error)
            setErrorMessageText("Что-то пошло не так, попробуйте снова")
        }
        

    }


    return(
        <>
            <LoginWrapper>
                {/* <LoginHeader>Авторизация</LoginHeader> */}
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
                <ErrorMessage text={errorMessageText} setText={setErrorMessageText} delay={3000} />
            </LoginWrapper>
        </>
    )
}

export default LoginPage