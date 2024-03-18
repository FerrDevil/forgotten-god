"use client";

import { useEffect, useState } from "react";
import HeaderLinkItem from "../HeaderLinkItem";
import LogoutButton from "../LogoutButton";
import SignInLink from "../SignInLink";
import {
  AccountLinkSVG,
  AdminPanelSVG,
  DownloadLinkSVG,
  LogoImage,
  LogoImageWrapper,
  NewsLinkSVG,
  ShopLinkSVG,
  SupportLinkSVG,
} from "../styles";
import {
  MobileHeaderNavigation,
  MobileHeaderNavigationList,
  MobileHeaderWrapper,
  MobileMenuToggleButton,
  MobileMenuToggleButtonWrapper,
  MobileMenuToggleOutButton,
} from "./styles";
import { usePathname } from "next/navigation";


export default function MobileHeader({ userInfo }) {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
	setMenuOpened(false)
  }, [pathname]) 
  return (
    <>
		<MobileMenuToggleButtonWrapper>
			<MobileMenuToggleButton onClick={() => setMenuOpened(true)}>
				<LogoImageWrapper>
				<LogoImage src={"/images/logo.png"} alt="logo" />
				</LogoImageWrapper>
			</MobileMenuToggleButton>
			
		</MobileMenuToggleButtonWrapper>
      

		<MobileMenuToggleOutButton $isVisible={isMenuOpened} />


      	<MobileHeaderWrapper $isVisible={isMenuOpened}>
        	<MobileHeaderNavigation>
				<MobileHeaderNavigationList>
				<HeaderLinkItem
					href="/"
					title="Магазин"
					svgIcon={<ShopLinkSVG />}
					includedPagesPaths={[
						"/",
						"/store/search",
						"/store/product",
						"/store/cart",
					]}
				/>
				<HeaderLinkItem
				href="/news"
				title="Новости"
				svgIcon={<NewsLinkSVG />}
				includedPagesPaths={["/news"]}
				/>
				<HeaderLinkItem
				href="/support"
				title="Поддержка"
				svgIcon={<SupportLinkSVG />}
				includedPagesPaths={["/support"]}
				/>
			</MobileHeaderNavigationList>

				<MobileHeaderNavigationList>
					{!userInfo?.id ? (
					<SignInLink />
					) : (
					<>
						{userInfo?.role === "admin" && (
						<HeaderLinkItem
							href="/admin/users"
							title="Панель администратора"
							svgIcon={<AdminPanelSVG />}
							includedPagesPaths={["/admin"]}
						/>
						)}
						<HeaderLinkItem
						href="/profile/"
						title="Профиль"
						svgIcon={<AccountLinkSVG />}
						includedPagesPaths={["/profile/"]}
						/>
						<LogoutButton />
					</>
					)}

					<HeaderLinkItem
					href="/support/downloads/"
					title="Загрузка"
					svgIcon={<DownloadLinkSVG />}
					includedPagesPaths={["/support/downloads"]}
					/>
					</MobileHeaderNavigationList>
			</MobileHeaderNavigation>
		</MobileHeaderWrapper>
    </>
  );
}
