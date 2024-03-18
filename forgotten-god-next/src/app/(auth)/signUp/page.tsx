"use client"
import { RegisterWrapper, RegisterMethods, RegisterForm, RegisterFormHeader, RegisterInputWrapper, RegisterTextInputLabel, RegisterTextInput, RegisterInputErrorMessage, RegisterTextInputLabelText, RegisterPasswordHiddenButton, RegisterCheckboxLabel, RegisterCheckbox, RegisterCheckboxLabelText, RegisterButton, RegisterFormLinkWrapper, RegisterFormLink} from "@/services/auth/styles/register.js"
import InputField from "@/services/auth/components/InputField/InputField"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"



const RegisterPage = () => {
    const router = useRouter()

    const [signUpInfo, setSignUpInfo] = useState({
        email : ' ',
        username : ' ',
        password : ' ',
        repeatPassword: ' '
    })

    const onChangesignUpInfo = (inputName : string) => {
        return (event : React.ChangeEvent<HTMLInputElement>) => {
            setSignUpInfo(prev => ({...prev, [inputName] : event.target.value}))
        }
    }

    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)


    const validationErrors = {
        email:{
            noInput: signUpInfo.email.length === 0,
            notValidEmail: signUpInfo.email.trim().length > 0 && (!signUpInfo.email.match(/[a-z0-9]+@[a-z]+[.][a-z]+/gi) || signUpInfo.email.match(/[a-z0-9]+@[a-z]+[.][a-z]+/gi) && signUpInfo.email.match(/[a-z0-9]+@[a-z]+[.][a-z]+/gi)[0] !== signUpInfo.email)
        },
        username:{
            noInput: signUpInfo.username.length === 0,
            notValidLogin: signUpInfo.username.trim().length > 0 && (signUpInfo.username.match(/[a-z0-9]+/gi) === null || signUpInfo.username.match(/[a-z0-9]+/gi)[0] !== signUpInfo.username)
        },
        password:{
            noInput: signUpInfo.password.length === 0,
            notValidPassword: signUpInfo.password.trim().length > 0 && (!signUpInfo.password.match(/[\S]+/gi) || signUpInfo.password.match(/[\S]+/gi) && signUpInfo.password.match(/[\S]+/gi)[0] && signUpInfo.password.match(/[\S]+/gi)[0] !== signUpInfo.password)
        },
        repeatPassword:{
            noInput: signUpInfo.repeatPassword.length === 0,
            notValidRepeatPassword: signUpInfo.repeatPassword.trim().length > 0 && signUpInfo.repeatPassword !== signUpInfo.password
        }
    }


    useEffect(
        () => {
           
            if (validationErrors.email.noInput || validationErrors.email.notValidEmail || signUpInfo.email.trim().length === 0 ||
                validationErrors.username.noInput || validationErrors.username.notValidLogin || signUpInfo.username.trim().length === 0 ||
                validationErrors.password.noInput || validationErrors.password.notValidPassword || signUpInfo.password.trim().length === 0 ||
                validationErrors.repeatPassword.noInput || validationErrors.repeatPassword.notValidRepeatPassword ||  signUpInfo.repeatPassword.trim().length === 0
                ){
                setSubmitButtonDisabled(true)
                return
            }
            setSubmitButtonDisabled(false) 
        }, [signUpInfo]
    )


    const formSubmit : React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()


    // TODO: set redirect to false once the bug is fixed    
        try{
            const res = await signIn("signUp", {
                ...signUpInfo,
                redirect: true
            })
            console.log("RES:", res)

           /*  setToastMessage("Регистрация прошла успешно", false, 2000) */
        }
        catch (error){
            console.error(error)

            /* setToastMessage("Что-то пошло не так, попробуйте заново", true, 2000) */
        }
        

        
    }

    return(
        <>
            <RegisterWrapper>
                <RegisterMethods>
                    <RegisterForm onSubmit={formSubmit}>
                        <RegisterFormHeader>Регистрация</RegisterFormHeader>
                        
                        <InputField
                            name="email"
                            placeholder="Email"
                            onChange={onChangesignUpInfo("email")}
                            isValid={!(validationErrors.email.noInput || validationErrors.email.notValidEmail)}
                            errorMessage={validationErrors.email.noInput && "Обязательное поле" || validationErrors.email.notValidEmail && "Email введен некорректно" || ""}
                        />
                        <InputField
                            name="username"
                            placeholder="Никнейм"
                            onChange={onChangesignUpInfo("username")}
                            isValid={!(validationErrors.username.noInput || validationErrors.username.notValidLogin)}
                            errorMessage={validationErrors.username.noInput && "Обязательное поле" || validationErrors.username.notValidLogin && "Никнейм введен некорректно" || ""}
                        />
                        <InputField
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            onChange={onChangesignUpInfo("password")}
                            isValid={!(validationErrors.password.noInput || validationErrors.password.notValidPassword)}
                            errorMessage={validationErrors.password.noInput && "Обязательное поле" || validationErrors.password.notValidPassword && "Пароль введен некорректно" || ""}
                        />
                        <InputField
                            type="password"
                            name="repeatPassword"
                            placeholder="Повторите пароль"
                            onChange={onChangesignUpInfo("repeatPassword")}
                            isValid={!(validationErrors.repeatPassword.noInput || validationErrors.repeatPassword.notValidRepeatPassword)}
                            errorMessage={validationErrors.repeatPassword.noInput && "Обязательное поле" || validationErrors.repeatPassword.notValidRepeatPassword && "Пароли не совпадают" || ""}
                        />
                        <RegisterInputWrapper>
                            <RegisterCheckboxLabel>
                                <RegisterCheckbox type='checkbox'/>
                                <RegisterCheckboxLabelText><RegisterFormLinkWrapper>Я прочитал(-а) и принимаю <RegisterFormLink href='/login'>условия предоставления услуг</RegisterFormLink></RegisterFormLinkWrapper></RegisterCheckboxLabelText>
                            </RegisterCheckboxLabel>
                        </RegisterInputWrapper>
                        
                        <RegisterButton disabled={isSubmitButtonDisabled} type="submit">Зарегистрироваться</RegisterButton>
                        <RegisterFormLinkWrapper>Вы уже зарегистрированы? <RegisterFormLink href='/signIn'>Войти</RegisterFormLink></RegisterFormLinkWrapper>
                    </RegisterForm>
                </RegisterMethods>
            </RegisterWrapper>
        </>
    )
}

export default RegisterPage