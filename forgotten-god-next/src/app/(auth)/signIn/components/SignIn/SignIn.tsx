"use client"

import { LoginMethods, LoginForm, LoginFormHeader, LoginButton, LoginFormLinkWrapper, LoginFormLink, SignInByOAuthButton, GoogleIcon } from "./styles"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import InputField from "@/services/auth/components/InputField/InputField"
import { useToastMessage } from "@/components/ToastMessage/ToastMessageProvider"
import { signIn } from "next-auth/react"
import { redirectTo } from "./actions"



export default function SignIn(){
    const setToastMessage = useToastMessage()
    const searchParams = useSearchParams()

    const [signInInfo, setSignInInfo] = useState({
        email : '',
        password : ''
    })

    const onChangeLoginInfo = (inputName: string) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            setSignInInfo(prev => ({...prev, [inputName] : event.target.value}))
        }
    }

    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)

    useEffect(
        () => {
            for (let value of Object.values(signInInfo)){
                if (value.trim() === ''){
                    setSubmitButtonDisabled(true)
                    return
                }
            }
            setSubmitButtonDisabled(false) 
        }, [signInInfo]
    )
    
    const formSubmit : React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        try{
            const res = await signIn("credentials", {
                ...signInInfo,
                redirect: false
            })
            if(!res.ok) {
                setToastMessage("Что-то пошло не так, попробуйте заново", true, 2000)  
                return
            }
            setToastMessage("Авторизация прошла успешно", false, 2000)

            setTimeout(() => {
                const redirectToParam = searchParams.get("redirectTo")
                redirectToParam ?
                    redirectTo(redirectToParam)
                :
                    redirectTo("/")

            }, 1000)
            
        }
        catch (error){
            console.error(error)

            setToastMessage("Что-то пошло не так, попробуйте заново", true, 2000)
        }
        

        
    }



    return(
        <LoginMethods>
                    <LoginForm onSubmit={formSubmit}>
                        <LoginFormHeader>Вход</LoginFormHeader>
                        <InputField
                            name="email"
                            placeholder="Email"
                            
                            onChange={onChangeLoginInfo("email")}
                            isValid={!!signInInfo.email}
                            errorMessage={!signInInfo.email && "Обязательное поле" || ""}
                        />
                        <InputField
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            
                            onChange={onChangeLoginInfo("password")}
                            isValid={!!signInInfo.password}
                            errorMessage={!signInInfo.password && "Обязательное поле" || ""}
                        />
                
                        <LoginButton disabled={isSubmitButtonDisabled} type="submit">Войти</LoginButton>
                        <LoginFormLinkWrapper>У вас еще нет аккаунта? <LoginFormLink href='/signUp'>Зарегистрироваться</LoginFormLink></LoginFormLinkWrapper>
                        <SignInByOAuthButton 
                            onClick={async (event) => {
                                event.preventDefault()
                                await signIn("google")
                            }}
                        >   
                            <GoogleIcon/>
                            <span>Войти с помощью Google</span>
                        </SignInByOAuthButton>
                    </LoginForm>
                    
                </LoginMethods>
    )
}