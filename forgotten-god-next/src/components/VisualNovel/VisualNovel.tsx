"use client"

import { notFound, usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import VNMessage from "./VNMessage"
import { VNAction } from "./types"



export default function VisualNovel({ actions }: { actions: VNAction[]}){

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const currentId = parseInt(searchParams.get("id")) || 1

    const currentAction = actions.find(action => action.id === currentId)
    if (!currentAction){
        notFound()
    }

    useEffect(() => {
        if ( searchParams?.get("id") ) return
        if ( actions.length === 0 ) return

        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("id", actions[0].id.toString())
        router.replace(`${pathname}?${newSearchParams}`)
        
        
    }, [])



    return (
        <>
            {
                currentAction.type === "message" ?
                    <VNMessage actions={actions} currentAction={currentAction}/>
                :
                    currentAction.action
            }
           
        </>
    )
} 