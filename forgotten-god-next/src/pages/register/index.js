import { RegisterWrapper, RegisterMethods, RegisterForm, RegisterFormHeader, RegisterInputWrapper, RegisterTextInputLabel, RegisterTextInput, RegisterInputErrorMessage, RegisterTextInputLabelText, RegisterPasswordHiddenButton, RegisterCheckboxLabel, RegisterCheckbox, RegisterCheckboxLabelText, RegisterButton, RegisterFormLinkWrapper, RegisterFormLink} from "@/services/auth/styles/register.js"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import BasePageLayout from "@/components/Layout/BasePageLayout"


const RegisterPage = () => {
    const router = useRouter()
    
    const [passwordInputTypes, setPasswordInputTypes] = useState({
        password : 'password',
        repeatPassword : 'password'
    })

    const getPasswordHiddenImage = (inputType) => {
        return inputType === 'password' ? 'images/password-hidden.svg' : 'images/password-not-hidden.svg'
    }

    const changePasswordType = (inputName)  => {
        return (event) => {
            event.preventDefault()
            setPasswordInputTypes(
                prev =>{ return {...prev, [inputName] : prev[inputName] === 'password' ? 'text' : 'password'}}
            )
        }
    }
    

    const [registerInfo, setRegisterInfo] = useState({
        email : ' ',
        login : ' ',
        password : ' ',
        repeatPassword: ' '
    })

    const onChangeRegisterInfo = (inputName) => {
        return (event) => {
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
            notValidLogin: registerInfo.login.trim().length > 0 && (!registerInfo.login.match(/[a-z0-9]+/gi) || registerInfo.login.match(/[a-z0-9]+/gi) && registerInfo.login.match(/[a-z0-9]+/gi)[0] !== registerInfo.login)
        },
        password:{
            noInput: registerInfo.password.length === 0,
            notValidPassword: registerInfo.password.trim().length > 0 && (!registerInfo.password.match(/[\S]+/gi) || registerInfo.password.match(/[\S]+/gi) && registerInfo.password.match(/[\S]+/gi)[0] !== registerInfo.password)
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


    const formSubmit = async (event) => {
        event.preventDefault()
        const fetchParams = {
            method: 'POST',
            body: JSON.stringify(registerInfo),
            mode: 'cors',
                headers:{
                    "Content-Type": "application/json; charset=UTF-8",
                    'Access-Control-Allow-Credentials' : 'true'
                }
        } 
        const response = await fetch('/auth/register', fetchParams)
        const json = await response.json()
        if (!json.msg && !json.error){
            router.push("/")
        }
    }


    return(
        <BasePageLayout>
            <RegisterWrapper>
                <RegisterMethods>
                    <RegisterForm method="POST">
                        <RegisterFormHeader>Регистрация</RegisterFormHeader>
                        <RegisterInputWrapper>
                            <RegisterTextInputLabel>
                                <RegisterTextInput id="email" name="email" isInvalid={!registerInfo.email} onChange={onChangeRegisterInfo('email')} placeholder=" " />
                                <RegisterTextInputLabelText>Email</RegisterTextInputLabelText>
                            </RegisterTextInputLabel>
                            {validationErrors.email.noInput && <RegisterInputErrorMessage>Обязательное поле</RegisterInputErrorMessage>}
                            {validationErrors.email.notValidEmail && <RegisterInputErrorMessage>Email введен некорректно</RegisterInputErrorMessage>}
                        </RegisterInputWrapper>
                        <RegisterInputWrapper>
                            <RegisterTextInputLabel>
                                <RegisterTextInput id="username" name="username" isInvalid={!registerInfo.login} onChange={onChangeRegisterInfo('login')} placeholder=" " />
                                <RegisterTextInputLabelText>Логин</RegisterTextInputLabelText>
                            </RegisterTextInputLabel>
                            {validationErrors.login.noInput && <RegisterInputErrorMessage>Обязательное поле</RegisterInputErrorMessage>}
                            {validationErrors.login.notValidLogin && <RegisterInputErrorMessage>Логин введен некорректно</RegisterInputErrorMessage>}
                        </RegisterInputWrapper>
                        <RegisterInputWrapper>
                            <RegisterTextInputLabel>
                                <RegisterTextInput id="password" name="password" isInvalid={!registerInfo.password} onChange={onChangeRegisterInfo('password')} type={passwordInputTypes.password} placeholder=" " />
                                <RegisterTextInputLabelText>Пароль</RegisterTextInputLabelText>
                                <RegisterPasswordHiddenButton onClick={changePasswordType('password')} src={getPasswordHiddenImage(passwordInputTypes.password)}/>
                            </RegisterTextInputLabel>
                            {validationErrors.password.noInput && <RegisterInputErrorMessage>Обязательное поле</RegisterInputErrorMessage>}
                            {validationErrors.password.notValidPassword && <RegisterInputErrorMessage>Пароль введен некорректно</RegisterInputErrorMessage>}
                        </RegisterInputWrapper>
                        <RegisterInputWrapper>
                            <RegisterTextInputLabel>
                                <RegisterTextInput isInvalid={!registerInfo.repeatPassword} onChange={onChangeRegisterInfo('repeatPassword')} type={passwordInputTypes.repeatPassword} placeholder=" " />
                                <RegisterTextInputLabelText>Повторите пароль</RegisterTextInputLabelText>
                                <RegisterPasswordHiddenButton onClick={changePasswordType('repeatPassword')} src={getPasswordHiddenImage(passwordInputTypes.repeatPassword)}/>
                            </RegisterTextInputLabel>
                            {validationErrors.repeatPassword.noInput && <RegisterInputErrorMessage>Обязательное поле</RegisterInputErrorMessage>}
                            {validationErrors.repeatPassword.notValidRepeatPassword && <RegisterInputErrorMessage>Пароли не совпадают</RegisterInputErrorMessage>}
                        </RegisterInputWrapper>
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
        </BasePageLayout>
    )
}

export default RegisterPage