"use client"

import {AdminPanelSVG, SupportLinkSVG, HeaderNavigationButton, LogoutButtonSVG, HeaderWrapper, HeaderNavigation, HeaderNavigationList, HeaderNavigationItem, HeaderNavigationItemTitle, LogoImage, LoginLinkSVG, HeaderNavigationLink, DownloadLinkSVG, ProfilePicture, HeaderMobileNavigation, HeaderMobileNavigationList, HeaderMobileNavigationLink, HeaderMobileNavigationItem, ShopLinkSVG, HeaderMobileNavigationLinkText, NewsLinkSVG } from "./header.js"
import { memo } from "react"
import { usePathname } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import {deleteUser} from "@/store/store"

const Header = () => {
    const pathname = usePathname()
    /* const dispatch = useDispatch()
    const {userInfo, error, isLoading} = useSelector((state) => state.user ) */
    const userInfo = null
    const activeLinks = {
        store: pathname === '/' || pathname === '/store' || pathname === '/store/browse' || pathname === '/store/cart' || pathname.includes( '/store/product'),
        news: pathname === '/news',
        support: pathname === '/support',
        login: pathname === '/login' || pathname === '/register',
        profile: pathname === `/user/${userInfo?.userId}` 

    }

    const logout = async () => {
        await fetch('https://forgotten-god.onrender.com/auth/refresh', {method: "POST", credentials: "include"})
        const response = await fetch('https://forgotten-god.onrender.com/auth/logout', {method: "POST", credentials: "include"})
        const message = await response.json()
        dispatch(deleteUser())
    } 
    

    return (
        <HeaderWrapper>
            <LogoImage />
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
                            <HeaderNavigationLink href="/login">
                                <LoginLinkSVG/>
                                <HeaderNavigationItemTitle>Войти</HeaderNavigationItemTitle>
                            </HeaderNavigationLink>
                        </HeaderNavigationItem> :
                        <>
                            {
                                userInfo?.userRole === "admin" ? 
                                <HeaderNavigationItem>
                                    <HeaderNavigationLink href="/admin">
                                        <AdminPanelSVG/>
                                        <HeaderNavigationItemTitle>Панель администратора</HeaderNavigationItemTitle>
                                    </HeaderNavigationLink>
                                </HeaderNavigationItem> :
                                <HeaderNavigationItem>
                                    <HeaderNavigationLink href={`/user/`}>
                                        <ProfilePicture src="/image/thumbnail.jpg" alt="profile picture"/>
                                        <HeaderNavigationItemTitle>Профиль</HeaderNavigationItemTitle>
                                    </HeaderNavigationLink>
                                </HeaderNavigationItem>
                            }
                             <HeaderNavigationItem>
                                <HeaderNavigationButton onClick={logout}>
                                    <LogoutButtonSVG/>
                                    <HeaderNavigationItemTitle>Выйти</HeaderNavigationItemTitle>
                                </HeaderNavigationButton>
                            </HeaderNavigationItem>
                        </>
                    }
                    

                    <HeaderNavigationItem>
                        <HeaderNavigationLink href="/support/downloads">
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
                            <ProfilePicture src="/image/thumbnail.jpg" alt="profile picture"/>
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