"use client"
import { useState } from "react";
import { HeaderNavigationButton, HeaderNavigationItem, HeaderNavigationItemTitle, LogoutButtonSVG } from "./styles";
import { useRouter } from "next/navigation";




export default function LogoutButton() {

    const {refresh} = useRouter()

    const logout = async () => {
        await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include"})
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/logout`, {method: "POST", credentials: "include"})
        const message = await response.json()
        refresh()
    }
    return(
        <HeaderNavigationItem>
            <HeaderNavigationButton $isActive={false} onClick={logout}>
                <LogoutButtonSVG/>
                <HeaderNavigationItemTitle>Выйти</HeaderNavigationItemTitle>
            </HeaderNavigationButton>
        </HeaderNavigationItem>
    )
} 