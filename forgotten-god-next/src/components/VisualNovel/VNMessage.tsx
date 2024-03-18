"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GodImage, GodImageWrapper, VNSkipButton, VNTextMessage, VNWrapper } from "./styles";
import { useEffect, useState } from "react";
import { VNAction } from "./types";

export default function VNMessage ({ actions, currentAction } : { actions: VNAction[], currentAction: VNAction}) {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const [openedSignIndex, setOpenedSignIndex] = useState(0)

    const message = (currentAction?.action as string)
    let interval

    useEffect(() => {
        const timeoutFunction = () => {

            setOpenedSignIndex(prev => {
                if (prev + 1 >= message.length){
                    clearInterval(interval)
                    return prev
                }
                else{
                    return prev + 1
                }
            })
        }
        interval = setInterval(timeoutFunction, 50)

        return () => {
            setOpenedSignIndex(0)
            clearInterval(interval)
        }
    }, [currentAction])


    const handleMessageClick:  React.MouseEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation()
        event.preventDefault()
        if ( message.length - 1 > openedSignIndex ){
            clearInterval(interval)
            setOpenedSignIndex(message.length - 1)
        }
        else{
            const newSearchParams = new URLSearchParams(searchParams)
            newSearchParams.set("id", (currentAction?.id + 1).toString() )
            router.push(`${pathname}?${newSearchParams}`)
        }
    }

    const handleMessageSkip:  React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        event.preventDefault()

        const maxId = actions.reduce((id, currentAction) => currentAction.id > id ? currentAction.id : id, 1)
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("id", maxId.toString() )
        router.push(`${pathname}?${newSearchParams}`)
    }


    return (
        <VNWrapper onClick={handleMessageClick}>
            <VNSkipButton onClick={handleMessageSkip}>Пропустить</VNSkipButton>
            <GodImageWrapper>
                <GodImage src="/images/logo.png" 
                    alt="God Image"
                    sizes="100vw"
                    width={0}
                    height={0}
                    priority={true}
                />
            </GodImageWrapper>
            <VNTextMessage >
                { `${(currentAction.action as string).substring(0, openedSignIndex === 0 ? 0 : openedSignIndex + 1)}` }
            </VNTextMessage>
            
            
        </VNWrapper>
    )
} 