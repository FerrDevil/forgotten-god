"use client"

import { createContext, useContext, useState } from "react"
import { Message } from "./types"

export const errorMessageContext = createContext(null)

const MAX_MASSAGES_COUNT = 1

export function useToastMessage () {
    const [messages, setMessages] = useContext(errorMessageContext)
    const setNewMessage = (message="", isError=true, timeout=2000) => {
        setMessages((prev: Message[]) => prev.length >= MAX_MASSAGES_COUNT ? prev:
            [...prev, {
                message: message,
                isError: isError,
                timeout: timeout
            }]
        )
    }
    return setNewMessage 
}


export const useToastMessages = () => {
    const [messages, setMessages] = useContext(errorMessageContext)
    return [messages, setMessages]
}

const ErrorMessageProvider = ({children}) => {
    const [messages, setMessages] = useState<Message[]>([])

    return(
        <errorMessageContext.Provider value={[messages, setMessages]}>
            {children}
        </errorMessageContext.Provider>
    )
}


export default ErrorMessageProvider