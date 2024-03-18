
import {AdminPanelSVG, SupportLinkSVG, HeaderWrapper, HeaderNavigation, HeaderNavigationList, HeaderNavigationItem, HeaderNavigationItemTitle, LogoImage, HeaderNavigationLink, DownloadLinkSVG, HeaderMobileNavigation, HeaderMobileNavigationList, HeaderMobileNavigationLink, HeaderMobileNavigationItem, ShopLinkSVG, NewsLinkSVG, AccountLinkSVG, LogoImageWrapper } from "./styles"
import HeaderLinkItem from "./HeaderLinkItem"

import LogoutButton from "./LogoutButton"
import { auth } from "@/utils/userAuth/auth";
import SignInLink from "./SignInLink";
import MobileHeader from "./MobileHeader/MobileHeader";





const Header = async () => {
   
    const userInfo = (await auth())?.user || null
    console.log("userInfo: ", userInfo)

    return (
        <>
            <HeaderWrapper>
                <LogoImageWrapper>
                    <LogoImage src={"/images/logo.png"} alt="logo"/>
                </LogoImageWrapper>
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
                        !userInfo?.id ?
                        <SignInLink/> :
                            <>
                                {
                                    userInfo?.role === "admin" && 

                                    <HeaderLinkItem
                                        href="/admin/users"
                                        title="Панель администратора"
                                        svgIcon={<AdminPanelSVG/>}
                                        includedPagesPaths={["/admin"]}
                                    />
                                
                                }
                                <HeaderLinkItem
                                    href="/profile/"
                                    title="Профиль"
                                    svgIcon={<AccountLinkSVG/>}
                                    includedPagesPaths={["/profile/"]}
                                />
                                <LogoutButton/>
                            </>
                        }
                        
                        <HeaderLinkItem
                            href="/support/downloads/"
                            title="Загрузка"
                            svgIcon={<DownloadLinkSVG/>}
                            includedPagesPaths={["/support/downloads"]}
                        />
                        </HeaderNavigationList>
                </HeaderNavigation>   
            </HeaderWrapper>

           <MobileHeader userInfo={userInfo}/>
        </>
        
    )
}

export default Header