"use client"
import type { Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState<T>(defaultValue)

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem(key))
        if(!item) {
            localStorage.setItem(key, JSON.stringify(defaultValue))
        }
        else setValue(item)
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue] as [T , Dispatch<SetStateAction<T>>]
}