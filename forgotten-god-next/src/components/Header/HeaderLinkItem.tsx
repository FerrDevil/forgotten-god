"use client"

import { usePathname } from "next/navigation";
import { HeaderNavigationItem, HeaderNavigationItemTitle, HeaderNavigationLink } from "./styles";

export default function HeaderLinkItem({href, title, svgIcon, includedPagesPaths}: {href: string , title: string, svgIcon: JSX.Element, includedPagesPaths: string[]}){
    const pathname = usePathname()
    
    const isActive = includedPagesPaths.some((path) => pathname.includes(path) && path !== "/") || includedPagesPaths.includes(pathname)
    return(
        <HeaderNavigationItem>
            <HeaderNavigationLink $isActive={isActive} href={href}>
                {svgIcon}
                <HeaderNavigationItemTitle>{title}</HeaderNavigationItemTitle>
            </HeaderNavigationLink>
        </HeaderNavigationItem>
    )
}