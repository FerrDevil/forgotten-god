'use client'

import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"

import LoginSVG from "@/public/login.svg"
import DownloadSVG from "@/public/downloads.svg"
import ShopSVG from "@/public/shop.svg"
import NewsSVG from "@/public/news.svg"
import AdminSVG from "@/public/admin-panel.svg"
import SupportSVG from "@/public/support.svg"
import LogoutSVG from "@/public/logout.svg"
import AccountSVG from "@/public/account.svg"


export const HeaderWrapper = styled.header`
    --_link-title-width: 250px;

    display: flex;
    flex-direction: column;
    
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2000;
    font-size: 16px;
    
    background-color: #111;
    width: 50px;
    transition: width 300ms;
    padding: 20px 0;
    

    @media (min-width: 600px) {
        &:hover{
            width: calc(50px + var(--_link-title-width) + 20px);
            & span {
                transition: opacity 200ms 300ms, transform 200ms 300ms;
                opacity: 1;
                transform: translate(0);
                
            }
        }
        border-right: 0.5px solid #383838;
    }
    
    @media (max-width: 600px) {
        padding: 10px 40px;
        position: static;
        flex-direction: row;
    }
`

export const HeaderNavigation = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    
    padding: 20px 0;
    @media (max-width: 600px) {
        display: none;
    }
`

export const HeaderNavigationList = styled.ul`
    display: grid;
    
    row-gap: 16px;
`

export const HeaderNavigationItemTitle = styled.span`
    text-transform: capitalize;
    white-space: nowrap;
    display: block;
    max-width: var(--_link-title-width);
    overflow: hidden;
    opacity: 0;
    transform: translate(-50px);
    transition: opacity 0s, transform 200ms 250ms;
`

export const HeaderNavigationItem = styled.li`
    
    cursor: pointer;
    font-size: 16px;
    color: #ccc;
    
`

interface IIsActive{
    $isActive: boolean
}

export const HeaderNavigationLink = styled(Link)<IIsActive>`
    display: grid;
    align-items: center;
    grid-template-columns: 30px 1fr;
    padding: 0 10px;
    column-gap: 20px;
    font-size: 16px;
    color: #ccc;
    transition: color 0.2s ease-in-out;
    &:hover, &:focus-visible{
        color: #fff;
        outline: 1px solid transparent;
    }
    &:hover > svg, &:focus-visible > svg{
        fill: #780c0c;
    }
    & > svg{
        fill: ${props => props.$isActive? "#780c0c" : "#ccc"};
        
    }

`

export const HeaderNavigationButton = styled.button<IIsActive>`
    all: unset;
    display: grid;
    align-items: center;
    border: 1px solid transparent;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    grid-template-columns: 30px 1fr;
    padding: 0 10px;
    column-gap: 20px;
    font-size: 16px;
    color: #ccc;
    transition: color 0.2s ease-in-out;
    &:hover, &:focus-visible{
        color: #fff;
        outline: 1px solid transparent;
    }
    &:hover > svg, &:focus-visible > svg{
        fill: #780c0c;
    }
    & > svg{
        fill: ${props => props.$isActive? "#780c0c" : "#ccc"};
        
    }

`
interface ILogoImage{
    width: number,
    height: number,
    sizes: string,
    alt: string,
    src: string,
    loading: string,
    priority: boolean
}

export const LogoImage = styled(Image).attrs({
    width: 0,
    height: 0,
    sizes: "100vw",
    alt: "FG-logo",
    src: "/images/logo.png",
    loading: "eager",
    priority: true
})
`
    width: clamp(30px, 3vw, 40px);
    height: clamp(40px, 3vw, 50px);
    object-fit: contain;
    color: #fff;
    align-self: center;
`


export const LoginLinkSVG = styled(LoginSVG)`
    fill: #ccc;
    width: 30px;
    height: 30px;
    transition: fill 0.2s ease-in-out;
    &:hover{
        fill: #780c0c;
    }
`

export const DownloadLink = styled(Link)`
    font-size: 16px;
    color: #ccc;
    &:hover{
        color: #fff;
    }
`


export const DownloadLinkSVG = styled(DownloadSVG)`
    fill: #ccc;
    width: 30px;
    height: 30px;
    transition: fill 0.2s ease-in-out;
    &:hover{
        fill: #780c0c;
    }
`
export const LogoutButtonSVG = styled(LogoutSVG)`
    fill: #ccc;
    width: 30px;
    height: 30px;
    transition: fill 0.2s ease-in-out;
    &:hover{
        fill: #780c0c;
    }
`


export const SupportLinkSVG = styled(SupportSVG)`
    fill: #ccc;
    width: 30px;
    height: 30px;
    transition: fill 0.2s ease-in-out;
    &:hover{
        fill: #780c0c;
    }
`



export const AccountLinkSVG = styled(AccountSVG)`
    width: 30px;
    height: 30px;
    border-radius: 100vh;
    object-fit: cover;
    filter: brightness(80%);

    &:hover, &:focus{
        filter: brightness(100%);
    }
`

export const HeaderMobileNavigation = styled.nav`
    display: grid;
    place-items: center;
    position: fixed;
    width: 100%;
    height: 70px;
    bottom: 0;
    left: 0;
   
    background-color: #111;
    z-index: 2000;

    @media (min-width: 600px) {
        display: none;
    }
`

export const HeaderMobileNavigationList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 0;
    width: 100%;
    height: 100%;
`

export const HeaderMobileNavigationItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    color: #ccc;
    width : 100%;
    height: 100%;
`


export const ShopLinkSVG = styled(ShopSVG)`
    fill: #ccc;
    width: 30px;
    height: 30px;
    transition: fill 0.2s ease-in-out;
    &:hover{
        fill: #780c0c;
    }
`
export const NewsLinkSVG = styled(NewsSVG)`
    fill: #ccc;
    width: 30px;
    height: 30px;
    transition: fill 0.2s ease-in-out;
    &:hover{
        fill: #780c0c;
    }
`

export const HeaderMobileNavigationLink = styled(Link)<IIsActive>`
    display: grid;
    place-items: center;
    width: 100%;
    color: #ccc;
    height: 100%;
    padding: 5px 25px;
    transition: background-color, color 0.2s ease-in-out;
    background-color: ${props => props.$isActive? "#ccc" : "#111"};
    color: ${props => props.$isActive? "#780c0c" : "#ccc"};
    &:hover, &:focus{
        background-color: #ccc;
        color: #780c0c;
    }
    &:hover > svg, &:focus-visible > svg{
        fill: #780c0c;
    }
    & > svg{
        fill: ${props => props.$isActive? "#780c0c" : "#ccc"};
    }
 
`
export const HeaderMobileNavigationLinkText = styled.span`
    font-size: clamp(10px, 5px + 2vw, 16px);
    white-space: nowrap;
`


export const AdminPanelSVG = styled(AdminSVG)`
    fill: #ccc;
    width: 30px;
    height: 30px;
    transition: fill 0.2s ease-in-out;
    &:hover{
        fill: #780c0c;
    }
`


