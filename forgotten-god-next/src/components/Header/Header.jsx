import {AdminPanelSVG, SupportLinkSVG, HeaderWrapper, HeaderNavigation, HeaderNavigationList, HeaderNavigationItem, HeaderNavigationItemTitle, LogoImage, LoginLinkSVG, HeaderNavigationLink, DownloadLinkSVG, ProfilePicture, HeaderMobileNavigation, HeaderMobileNavigationList, HeaderMobileNavigationLink, HeaderMobileNavigationItem, ShopLinkSVG, HeaderMobileNavigationLinkText, NewsLinkSVG } from "./header.js"
import { memo } from "react"
import { useRouter } from "next/router.js"
import { useSelector } from "react-redux"

const Header = () => {
    const router = useRouter()
    const {userInfo, error, isLoading} = useSelector((state) => state.user)

    const activeLinks = {
        store: router.pathname === '/' || router.pathname === '/store' || router.pathname === '/store/browse' || router.pathname === '/store/cart' || router.pathname.includes( '/store/product'),
        news: router.pathname === '/news',
        support: router.pathname === '/support',
        login: router.pathname === '/login' || router.pathname === '/register',
        profile: router.pathname === `/user/${userInfo?.userId}` 

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