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
    --_max_header-menu-width: calc(50px + var(--_link-title-width) + 20px);

    display: flex;
    flex-direction: column;
    
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2000;
    font-size: 16px;
    
    background-color: var(--main-color-black);
    width: var(--header-width);
    transition: width 300ms;
    padding: 20px 0;
    border-right: 0.5px solid #383838;
    &:hover, &:has(:focus){
        width: var(--_max_header-menu-width);
        span {
            transition: opacity 200ms 300ms, transform 200ms 300ms;
            opacity: 1;
            transform: translate(0);
        }
        
    }
    
    @media (max-width: 768px) {
        display: none;
        --_max_header-menu-width: calc( 100% - 70px);
        overflow: unset;
        transform: translateX(-100%);
        transition: transform 0.2s linear;

        &:hover, &:has(:focus){
            transform: translateX(0);
           /*  nav {
                transform: translate(0);
                height: auto;
                pointer-events: all;
                user-select: unset;
            } */
        }
    }
`

export const HeaderNavigation = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    
    
    padding: 20px 0;
    @media (max-width: 768px) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        
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


export const HeaderNavigationLink = styled(Link)<{$isActive: boolean}>`
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

export const HeaderNavigationButton = styled.button`
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
       
        
    }

`

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
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const LogoImageWrapper = styled.div`
    width: clamp(50px, 3vw, 60px);
    height: clamp(60px, 3vw, 70px);
    color: #fff;
    padding: 10px;
    @media (min-width: 768px) {
        padding: unset;
        width: 40px;
        height: 40px;
        margin-left: 5px;
    }
    
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
   
    background-color: var(--main-color-black);
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

export const HeaderMobileNavigationLink = styled(Link)<{$isActive: boolean}>`
    display: grid;
    place-items: center;
    width: 100%;
    color: #ccc;
    height: 100%;
    padding: 5px 25px;
    transition: background-color, color 0.2s ease-in-out;
    background-color: ${props => props.$isActive? "#ccc" : "var(--main-color-black)"};
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


export const AdminPanelSVG = styled(AdminSVG)`
    fill: #ccc;
    width: 30px;
    height: 30px;
    transition: fill 0.2s ease-in-out;
    &:hover{
        fill: #780c0c;
    }
`



