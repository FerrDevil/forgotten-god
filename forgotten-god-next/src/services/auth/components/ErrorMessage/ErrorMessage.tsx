"use client"

import { useEffect } from "react"
import { ErrorMessageWrapper } from "./styles"

export default function ErrorMessage({text="", delay=0, setText}){
    useEffect(() => {
        let timeout: any
        if(text){
            timeout = setTimeout(() => {
                setText("")
            }, delay)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [text])
    return (
        <ErrorMessageWrapper $delay={delay} $isVisible={!!text}>{text}</ErrorMessageWrapper>
    )
}