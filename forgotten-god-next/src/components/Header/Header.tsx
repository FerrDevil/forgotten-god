
import {AdminPanelSVG, SupportLinkSVG, HeaderNavigationButton, LogoutButtonSVG, HeaderWrapper, HeaderNavigation, HeaderNavigationList, HeaderNavigationItem, HeaderNavigationItemTitle, LogoImage, LoginLinkSVG, HeaderNavigationLink, DownloadLinkSVG, HeaderMobileNavigation, HeaderMobileNavigationList, HeaderMobileNavigationLink, HeaderMobileNavigationItem, ShopLinkSVG, HeaderMobileNavigationLinkText, NewsLinkSVG, AccountLinkSVG } from "./styles"
import HeaderLinkItem from "./HeaderLinkItem"

import LogoutButton from "./LogoutButton"
import { getUserInfo } from "@/utils/userAuth/getUserInfo"


const Header = async () => {
   
    const userInfo = await getUserInfo()
    console.log("userInfo: ", userInfo)

    return (
        <HeaderWrapper>
            <LogoImage/>
            <HeaderNavigation>
                <HeaderNavigationList>
                    <HeaderLinkItem
                        href="/"
                        title="Магазин"
                        svgIcon={<ShopLinkSVG/>}
                        includedPagesPaths={["/", "/store/search", "/store/product", "/store/cart"]}
                    />
                    <HeaderLinkItem
                        href="/news"
                        title="Новости"
                        svgIcon={ <NewsLinkSVG/>}
                        includedPagesPaths={["/news"]}
                    />
                    <HeaderLinkItem
                        href="/support"
                        title="Поддержка"
                        svgIcon={<SupportLinkSVG/>}
                        includedPagesPaths={["/support"]}
                    />
                    
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
                            <LogoutButton/>
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


           {/*  <HeaderMobileNavigation>
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
 */}
            
        </HeaderWrapper>
    )
}

export default Header