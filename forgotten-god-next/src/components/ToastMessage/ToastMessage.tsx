"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ToastMessageErrorIcon, ToastMessageIconWrapper, ToastMessageSuccessIcon, ToastMessageText, ToastMessageWrapper, ToastWrapper } from "./styles"
import { errorMessageContext } from "./ToastMessageProvider"

export default function ToastMessage() {
    const [messages, setMessages] = useContext(errorMessageContext)
    return(
        <ToastWrapper>
            {
                messages.map((message, index) => (
                    <ToastMessageItem key={index} message={message} setMessages={setMessages}/>
                ))
            }
            
        </ToastWrapper>
    )
}

const ToastMessageItem = ({message=null, setMessages}) => {

    useEffect(() => {
        setTimeout(() => {
            setMessages(prev => prev.filter(currentMessage => currentMessage !== message))
        }, message.timeout)
    }, [])

    return (
        <ToastMessageWrapper $timeout={message.timeout} $isError={message.isError}>
            <ToastMessageIconWrapper>
                {
                    message.isError ?
                    <ToastMessageErrorIcon/> :
                    <ToastMessageSuccessIcon/>
                }
            </ToastMessageIconWrapper>
            <ToastMessageText>
                {message.message}
            </ToastMessageText>
        </ToastMessageWrapper>
    )
}
