import { Dispatch, SetStateAction } from "react"

export interface IErrorMessageWrapper {
    $isVisible: boolean
    $delay: number
}

export interface IErrorMessage{
    text: string
    delay: number
    setText: Dispatch<SetStateAction<string>>
}