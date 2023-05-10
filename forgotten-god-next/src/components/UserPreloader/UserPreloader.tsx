"use client"

import store, { UserInfo, setUser } from "@/store/store"
import { useRef } from "react"

const UserPreloader = (userInfo: UserInfo) => {
    const loaded = useRef(false)
    if (!loaded.current){
        store.dispatch(setUser(userInfo))
        loaded.current = true
    }
    return null
}

export default UserPreloader