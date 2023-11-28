import { Dispatch, SetStateAction } from "react"

export interface IToastMessageWrapper{
    $timeout: number,
    $isError: boolean
}


export type Message = {
    message: string,
    isError: boolean,
    timeout: number
}

export type MessageContext = [
    Message[],
    Dispatch<SetStateAction<Message[]>>
]

export type MessageItemProps = {message: Message, setMessages: Dispatch<SetStateAction<Message[]>>}