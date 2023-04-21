import { LoginWrapper, LoginHeader, LoginMethods, LoginForm, LoginFormHeader, LoginTextInputLabel, LoginTextInput, LoginTextInputLabelText, PasswordHiddenButton, LoginCheckbox, LoginCheckboxLabel, LoginCheckboxLabelText, LoginButton, LoginFormLinkWrapper, LoginFormLink, ErrorMessage } from "@/services/auth/styles/login.js"
import {useEffect, useState } from "react"
import { useRouter } from "next/router"
import BasePageLayout from "@/components/Layout/BasePageLayout"


const LoginPage = () => {

    const router = useRouter()
    const [passwordInputType, setPasswordInputType] = useState('password')

    const changePasswordHidden = (event) => {
        event.preventDefault()
        setPasswordInputType(prev => prev === 'password' ? 'text' : 'password')
    }


    const [loginInfo, setLoginInfo] = useState({
        login : ' ',
        password : ' '
    })

    const onChangeLoginInfo = (inputName) => {
        return (event) => {
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


    const errorMessageAnimation = (text) => {
        setErrorMessageText(text)
        setTimeout(() => {
            setErrorMessageText('')
        }, 1100)
    }

    
    
    const formSubmit = async (event) => {
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
            console.log(data.headers)
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
        <BasePageLayout>
            <LoginWrapper>
                <LoginHeader>Авторизация</LoginHeader>
                <LoginMethods>
                    <LoginForm method="POST" >
                        <LoginFormHeader>Вход с помощью аккаунта</LoginFormHeader>
                        <LoginTextInputLabel>
                            <LoginTextInput id="login" name="login" isInvalid={!loginInfo.login} onChange={onChangeLoginInfo('login')} placeholder=" " />
                            <LoginTextInputLabelText>Логин</LoginTextInputLabelText>
                        </LoginTextInputLabel>
                        <LoginTextInputLabel>
                            <LoginTextInput id="password" name="password" isInvalid={!loginInfo.password} onChange={onChangeLoginInfo('password')} type={passwordInputType} placeholder=" " />
                            <LoginTextInputLabelText>Пароль</LoginTextInputLabelText>
                            {passwordInputType === 'password'?
                                <PasswordHiddenButton onClick={changePasswordHidden} src={"images/password-hidden.svg"}/>:
                                <PasswordHiddenButton onClick={changePasswordHidden} src={"images/password-not-hidden.svg"}/>
                            }
                            
                        </LoginTextInputLabel>
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
        </BasePageLayout>
    )
}

export default LoginPage