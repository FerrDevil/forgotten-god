"use client"

import { HeaderNavigationButton, HeaderNavigationItem, HeaderNavigationItemTitle, LogoutButtonSVG } from "./styles";
import { signOut } from "next-auth/react";


export default function LogoutButton() {
    return(
        <HeaderNavigationItem>
            <HeaderNavigationButton onClick={ async () => {
                 await signOut()
            }}>
                <LogoutButtonSVG/>
                <HeaderNavigationItemTitle>Выйти</HeaderNavigationItemTitle>
            </HeaderNavigationButton>
        </HeaderNavigationItem>
    )
} 