"use client"

import styled from "styled-components"

export const MobileMenuToggleButtonWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1999;
    background-color: transparent;
    border: none;
    background-color: #111;
    @media (min-width: 768px) {
        display: none;
    }
`

export const MobileMenuToggleButton = styled.button`
    
    cursor: pointer;
    background-color: transparent;
    border: none;
    
    
`

export const MobileMenuToggleOutButton = styled.button<{$isVisible: boolean}>`
    position: fixed;
    inset: 0;
    z-index: 1999;
    background-color: #00000011;
    border: none;
    display: ${props => props.$isVisible ? "block": "none"};
    cursor: pointer;
    @media (min-width: 768px) {
        display: none;
    }
`


export const MobileHeaderWrapper = styled.header<{$isVisible: boolean}>`
    --_link-title-width: 100%;
    --_max_header-menu-width: calc( 100% - 70px);

    display: flex;
    flex-direction: column;
    
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2000;
    font-size: 16px;
    transform: ${props => props.$isVisible? "translateX(0%)": "translateX(-100%)"} ;
    ${props => props.$isVisible ? "span { transition: opacity 200ms 300ms, transform 200ms 300ms; opacity: 1; transform: translate(0);}" : ""}
    
    
    background-color: var(--main-color-black);
    width: var(--_max_header-menu-width);
    transition: transform 300ms ease-in-out;
    padding: 20px 0;
    border-right: 0.5px solid #383838;
    
    
    @media (min-width: 768px) {
        display: none;
    }
`

export const MobileHeaderNavigation = styled.nav`
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

export const MobileHeaderNavigationList = styled.ul`
    display: grid;
    
    row-gap: 16px;
`

export const MobileHeaderNavigationItemTitle = styled.span`
    text-transform: capitalize;
    white-space: nowrap;
    display: block;
    max-width: var(--_link-title-width);
    overflow: hidden;
    opacity: 0;
    transform: translate(-50px);
    transition: opacity 0s, transform 200ms 250ms;

    
`

export const MobileHeaderNavigationItem = styled.li`
    
    cursor: pointer;
    font-size: 16px;
    color: #ccc;
    
`
