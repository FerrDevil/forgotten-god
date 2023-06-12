"use client"

import store, { setUser } from "@/store/store"
import { UserInfo } from "@/store/types"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"

const UserPreloader = (/* {userInfo}: {userInfo: UserInfo} */) => {
    const loaded = useRef(false)
    const dispatch = useDispatch()
    /* if (!loaded.current){
        store.dispatch(setUser(userInfo))
        loaded.current = true
    } */

    useEffect(() => {
        const getUser = async () => {
            const refreshUserCookies = await fetch(`${"https://forgotten-god.onrender.com"}/auth/refresh`, {method: "POST", credentials: "include"})
            if (!refreshUserCookies.ok){
                return
            }
            const res = await fetch(
                `${"https://forgotten-god.onrender.com"}/auth/getUser`,
                {
                    credentials: "include", 
                }
            );
            const userInfo = await res.json();
                dispatch(setUser(userInfo))
        }
        getUser()
        
    }, [])
    return null
}

export default UserPreloader