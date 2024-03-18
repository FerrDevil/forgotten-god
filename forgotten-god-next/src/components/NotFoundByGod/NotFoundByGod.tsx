"use client"

import { useRouter } from "next/navigation"
import { GodImage, GodImageWrapper, NotFoundByGodTextMessage, NotFoundByGodWrapper } from "./style"
import { useEffect, useState } from "react"

export default function NotFoundByGod({message}) {
    const router = useRouter()
    const ANIMATION_TIMING = 3600
    const [isAnimationEnded, setAnimationEnded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setAnimationEnded(true)
        }, ANIMATION_TIMING)
    }, [])

    return(
        <NotFoundByGodWrapper onClick={() => {isAnimationEnded && router.back()}}>
            <GodImageWrapper>
                <GodImage src="/images/logo.png" 
                    alt="God Image"
                    sizes="100vw"
                    width={0}
                    height={0}
                    priority={true}
                />
            </GodImageWrapper>
           
            <NotFoundByGodTextMessage>
                {message}
            </NotFoundByGodTextMessage>
        </NotFoundByGodWrapper>
    )
}