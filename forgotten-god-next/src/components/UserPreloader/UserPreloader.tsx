"use client"

import { setUser } from "@/store/store"
import { UserInfo } from "@/store/types"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const UserPreloader = ({userInfo}: {userInfo: UserInfo}) => {
   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setUser(userInfo))
    }, [])

    return <></>
}

export default UserPreloader