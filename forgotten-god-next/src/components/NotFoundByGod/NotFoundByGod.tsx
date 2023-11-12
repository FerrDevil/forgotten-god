"use client"

import { useRouter } from "next/navigation"
import { GodImage, GodImageWrapper, NotFoundByGodReturnButton, NotFoundByGodTextMessage, NotFoundByGodWrapper } from "./style"

export default function NotFoundByGod({message}) {
    const router = useRouter()

    return(
        <NotFoundByGodWrapper>
            <GodImageWrapper>
                <GodImage/>
            </GodImageWrapper>
           
            <NotFoundByGodTextMessage>
                {message}
            </NotFoundByGodTextMessage>
            <NotFoundByGodReturnButton onClick={() => {router.back()}}>
                Return to safety
            </NotFoundByGodReturnButton>
        </NotFoundByGodWrapper>
    )
}