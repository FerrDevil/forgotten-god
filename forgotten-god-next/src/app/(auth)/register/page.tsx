"use client"
import { RegisterWrapper, RegisterMethods, RegisterForm, RegisterFormHeader, RegisterInputWrapper, RegisterTextInputLabel, RegisterTextInput, RegisterInputErrorMessage, RegisterTextInputLabelText, RegisterPasswordHiddenButton, RegisterCheckboxLabel, RegisterCheckbox, RegisterCheckboxLabelText, RegisterButton, RegisterFormLinkWrapper, RegisterFormLink} from "@/services/auth/styles/register.js"
import InputField from "@/services/auth/components/InputField/InputField"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"



const RegisterPage = () => {
    const router = useRouter()

    const [registerInfo, setRegisterInfo] = useState({
        email : ' ',
        login : ' ',
        password : ' ',
        repeatPassword: ' '
    })

    const onChangeRegisterInfo = (inputName : string) => {
        return (event : React.ChangeEvent<HTMLInputElement>) => {
            setRegisterInfo(prev => ({...prev, [inputName] : event.target.value}))
        }
    }

    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)


    const validationErrors = {
        email:{
            noInput: registerInfo.email.length === 0,
            notValidEmail: registerInfo.email.trim().length > 0 && (!registerInfo.email.match(/[a-z0-9]+@[a-z]+[.][a-z]+/gi) || registerInfo.email.match(/[a-z0-9]+@[a-z]+[.][a-z]+/gi) && registerInfo.email.match(/[a-z0-9]+@[a-z]+[.][a-z]+/gi)[0] !== registerInfo.email)
        },
        login:{
            noInput: registerInfo.login.length === 0,
            notValidLogin: registerInfo.login.trim().length > 0 && (registerInfo.login.match(/[a-z0-9]+/gi) === null || registerInfo.login.match(/[a-z0-9]+/gi)[0] !== registerInfo.login)
        },
        password:{
            noInput: registerInfo.password.length === 0,
            notValidPassword: registerInfo.password.trim().length > 0 && (!registerInfo.password.match(/[\S]+/gi) || registerInfo.password.match(/[\S]+/gi) && registerInfo.password.match(/[\S]+/gi)[0] && registerInfo.password.match(/[\S]+/gi)[0] !== registerInfo.password)
        },
        repeatPassword:{
            noInput: registerInfo.repeatPassword.length === 0,
            notValidRepeatPassword: registerInfo.repeatPassword.trim().length > 0 && registerInfo.repeatPassword !== registerInfo.password
        }
    }


    useEffect(
        () => {
           
            if (validationErrors.email.noInput || validationErrors.email.notValidEmail || registerInfo.email.trim().length === 0 ||
                validationErrors.login.noInput || validationErrors.login.notValidLogin || registerInfo.login.trim().length === 0 ||
                validationErrors.password.noInput || validationErrors.password.notValidPassword || registerInfo.password.trim().length === 0 ||
                validationErrors.repeatPassword.noInput || validationErrors.repeatPassword.notValidRepeatPassword ||  registerInfo.repeatPassword.trim().length === 0
                ){
                setSubmitButtonDisabled(true)
                return
            }
            setSubmitButtonDisabled(false) 
        }, [registerInfo]
    )


    const formSubmit = async (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/register`, {
            method: 'POST',
            body: JSON.stringify(registerInfo),
            credentials: "include",
        })
        const json = await response.json()
        if (!json.msg && !json.error){
            router.push("/")
        }
    }


    return(
        <>
            <RegisterWrapper>
                <RegisterMethods>
                    <RegisterForm method="POST">
                        <RegisterFormHeader>Регистрация</RegisterFormHeader>
                        
                        <InputField
                            name="email"
                            placeholder="Email"
                            onChange={onChangeRegisterInfo("email")}
                            isValid={!(validationErrors.email.noInput || validationErrors.email.notValidEmail)}
                            errorMessage={validationErrors.email.noInput && "Обязательное поле" || validationErrors.email.notValidEmail && "Email введен некорректно" || ""}
                        />
                        <InputField
                            name="username"
                            placeholder="Логин"
                            onChange={onChangeRegisterInfo("login")}
                            isValid={!(validationErrors.login.noInput || validationErrors.login.notValidLogin)}
                            errorMessage={validationErrors.login.noInput && "Обязательное поле" || validationErrors.login.notValidLogin && "Логин введен некорректно" || ""}
                        />
                        <InputField
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            onChange={onChangeRegisterInfo("password")}
                            isValid={!(validationErrors.password.noInput || validationErrors.password.notValidPassword)}
                            errorMessage={validationErrors.password.noInput && "Обязательное поле" || validationErrors.password.notValidPassword && "Пароль введен некорректно" || ""}
                        />
                        <InputField
                            type="password"
                            name="repeatPassword"
                            placeholder="Повторите пароль"
                            onChange={onChangeRegisterInfo("repeatPassword")}
                            isValid={!(validationErrors.repeatPassword.noInput || validationErrors.repeatPassword.notValidRepeatPassword)}
                            errorMessage={validationErrors.repeatPassword.noInput && "Обязательное поле" || validationErrors.repeatPassword.notValidRepeatPassword && "Пароли не совпадают" || ""}
                        />
                        <RegisterInputWrapper>
                            <RegisterCheckboxLabel>
                                <RegisterCheckbox type='checkbox'/>
                                <RegisterCheckboxLabelText><RegisterFormLinkWrapper>Я прочитал(-а) и принимаю <RegisterFormLink href='/login'>условия предоставления услуг</RegisterFormLink></RegisterFormLinkWrapper></RegisterCheckboxLabelText>
                            </RegisterCheckboxLabel>
                        </RegisterInputWrapper>
                        
                        <RegisterButton disabled={isSubmitButtonDisabled} onClick={formSubmit} type="submit">Зарегистрироваться</RegisterButton>
                        <RegisterFormLinkWrapper>Вы уже зарегистрированы? <RegisterFormLink href='/login'>Войти</RegisterFormLink></RegisterFormLinkWrapper>
                    </RegisterForm>
                </RegisterMethods>
            </RegisterWrapper>
        </>
    )
}

export default RegisterPage