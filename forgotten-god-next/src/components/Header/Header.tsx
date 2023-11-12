"use client"

import {AdminPanelSVG, SupportLinkSVG, HeaderNavigationButton, LogoutButtonSVG, HeaderWrapper, HeaderNavigation, HeaderNavigationList, HeaderNavigationItem, HeaderNavigationItemTitle, LogoImage, LoginLinkSVG, HeaderNavigationLink, DownloadLinkSVG, HeaderMobileNavigation, HeaderMobileNavigationList, HeaderMobileNavigationLink, HeaderMobileNavigationItem, ShopLinkSVG, HeaderMobileNavigationLinkText, NewsLinkSVG, AccountLinkSVG } from "./styles"
import { memo } from "react"
import { usePathname } from "next/navigation"
import { deleteUser, useUserSelector } from "@/store/store"
import { useDispatch } from "react-redux"

const Header = () => {
    const pathname = usePathname()
    const dispatch = useDispatch()
    const {userInfo} = useUserSelector()

    /* console.log(userInfo) */
    const activeLinks = {
        store: pathname === '/' || pathname === '/store' || pathname === '/store/browse' || pathname === '/store/cart' || pathname.includes( '/store/product'),
        news: pathname === '/news',
        support: pathname === '/support',
        login: pathname === '/login' || pathname === '/register',
        profile: pathname === `/user/${userInfo?.userId}` 

    }

    const logout = async () => {
        await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include"})
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/logout`, {method: "POST", credentials: "include"})
        response.ok && dispatch(deleteUser())
        const message = await response.json()
        
    } 
    

    return (
        <HeaderWrapper>
            <LogoImage/>
            <HeaderNavigation>
                <HeaderNavigationList>
                    <HeaderNavigationItem>
                        <HeaderNavigationLink $isActive={activeLinks.store} href="/">
                            <ShopLinkSVG/>
                            <HeaderNavigationItemTitle>Магазин</HeaderNavigationItemTitle>
                        </HeaderNavigationLink>
                    </HeaderNavigationItem>
                    <HeaderNavigationItem>
                        <HeaderNavigationLink $isActive={activeLinks.news} href="/news">
                            <NewsLinkSVG/>
                            <HeaderNavigationItemTitle>Новости</HeaderNavigationItemTitle>
                        </HeaderNavigationLink>
                    </HeaderNavigationItem>
                    <HeaderNavigationItem>
                        <HeaderNavigationLink $isActive={activeLinks.support} href="/support">
                            <SupportLinkSVG/>
                            <HeaderNavigationItemTitle>Поддержка</HeaderNavigationItemTitle>
                        </HeaderNavigationLink>
                    </HeaderNavigationItem>
                </HeaderNavigationList>
            
                <HeaderNavigationList>
                    {
                    !userInfo?.userId ?
                        <HeaderNavigationItem>
                            <HeaderNavigationLink $isActive={false} href="/login">
                                <LoginLinkSVG/>
                                <HeaderNavigationItemTitle>Войти</HeaderNavigationItemTitle>
                            </HeaderNavigationLink>
                        </HeaderNavigationItem> :
                        <>
                            {
                                userInfo?.userRole === "admin" && 
                                <HeaderNavigationItem>
                                    <HeaderNavigationLink $isActive={false} href="/admin/users">
                                        <AdminPanelSVG/>
                                        <HeaderNavigationItemTitle>Панель администратора</HeaderNavigationItemTitle>
                                    </HeaderNavigationLink>
                                </HeaderNavigationItem>
                               
                            }
                             <HeaderNavigationItem>
                                <HeaderNavigationLink $isActive={false} href={`/profile/`}>
                                    <AccountLinkSVG/>
                                    <HeaderNavigationItemTitle>Профиль</HeaderNavigationItemTitle>
                                </HeaderNavigationLink>
                            </HeaderNavigationItem>
                             <HeaderNavigationItem>
                                <HeaderNavigationButton $isActive={false} onClick={logout}>
                                    <LogoutButtonSVG/>
                                    <HeaderNavigationItemTitle>Выйти</HeaderNavigationItemTitle>
                                </HeaderNavigationButton>
                            </HeaderNavigationItem>
                        </>
                    }
                    

                    <HeaderNavigationItem>
                        <HeaderNavigationLink $isActive={false} href="/support/downloads">
                            <DownloadLinkSVG/>
                            <HeaderNavigationItemTitle>Загрузка</HeaderNavigationItemTitle>
                        </HeaderNavigationLink>
                    </HeaderNavigationItem>
                </HeaderNavigationList>
            </HeaderNavigation>


            <HeaderMobileNavigation>
                <HeaderMobileNavigationList>
                    <HeaderMobileNavigationItem>
                        <HeaderMobileNavigationLink $isActive={activeLinks.store} href="/">
                            <ShopLinkSVG/>
                            <HeaderMobileNavigationLinkText>Магазин</HeaderMobileNavigationLinkText>
                        </HeaderMobileNavigationLink>
                    </HeaderMobileNavigationItem>
                    <HeaderMobileNavigationItem>
                        <HeaderMobileNavigationLink $isActive={activeLinks.news} href="/news">
                            <NewsLinkSVG/>
                            <HeaderMobileNavigationLinkText>Новости</HeaderMobileNavigationLinkText>
                        </HeaderMobileNavigationLink>
                    </HeaderMobileNavigationItem>

                    {
                   !userInfo?.userId?
                    <HeaderMobileNavigationItem>
                        <HeaderMobileNavigationLink $isActive={activeLinks.login} href="/login">
                            <LoginLinkSVG/>
                            <HeaderMobileNavigationLinkText>Войти</HeaderMobileNavigationLinkText>
                        </HeaderMobileNavigationLink>
                    </HeaderMobileNavigationItem> :
                    <HeaderMobileNavigationItem>
                        <HeaderMobileNavigationLink $isActive={activeLinks.profile} href={`/user/`}>
                            <AccountLinkSVG/>
                            <HeaderMobileNavigationLinkText>Профиль</HeaderMobileNavigationLinkText>
                        </HeaderMobileNavigationLink>
                    </HeaderMobileNavigationItem>
                    }
                    
                </HeaderMobileNavigationList>
            </HeaderMobileNavigation>

            
        </HeaderWrapper>
    )
}

export default memo(Header)