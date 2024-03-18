"use client"

import { usePathname } from "next/navigation";
import { HeaderNavigationItem, HeaderNavigationItemTitle, HeaderNavigationLink } from "./styles";
import { useRef } from "react";

export default function HeaderLinkItem({href, title, svgIcon, includedPagesPaths}: {href: string , title: string, svgIcon: JSX.Element, includedPagesPaths: string[]}){
    const pathname = usePathname()
    const linkRef = useRef(null)
    
    const isActive = includedPagesPaths.some((path) => pathname.includes(path) && path !== "/") || includedPagesPaths.includes(pathname)
    return(
        <HeaderNavigationItem>
            <HeaderNavigationLink ref={linkRef} onClick={(event) => linkRef.current.blur()} $isActive={isActive} href={href}>
                {svgIcon}
                <HeaderNavigationItemTitle>{title}</HeaderNavigationItemTitle>
            </HeaderNavigationLink>
        </HeaderNavigationItem>
    )
}