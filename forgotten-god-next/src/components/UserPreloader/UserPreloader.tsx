"use client"

import store, { setUser } from "@/store/store"
import { UserInfo } from "@/store/types"
import { useRef } from "react"

const UserPreloader = ({userInfo}: {userInfo: UserInfo}) => {
    const loaded = useRef(false)
    if (!loaded.current){
        store.dispatch(setUser(userInfo))
        loaded.current = true
    }
    return null
}

export default UserPreloader