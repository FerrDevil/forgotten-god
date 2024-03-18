"use client"
import { useEffect, useRef } from "react";

export default function useDeferedEffect(effectFunction: (() => void) | (() => (() => void)), dependencies: any[] | null){
    const ref = useRef(false)
    useEffect(() => {
        if (!ref?.current){
            ref.current = true
            return
        }
        const func = effectFunction()
        if (func){
            return func
        }
    }, dependencies)
}