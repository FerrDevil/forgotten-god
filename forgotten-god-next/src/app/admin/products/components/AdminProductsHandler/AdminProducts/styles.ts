"use client"
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import MenuToggleSVG from "@/app/admin/products/public/menu-toggle.svg"


export const AdminProductsContainerWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: 100%;
    height: 100%;

    gap: 10px;
`

export const AdminProductWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 10px 20px;
    gap: 10px;
`

export const AdminProductImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    background-color: #1f1f1f;
    border-radius: 8px;
    overflow: hidden;

`
export const AdminProductImage = styled(Image).attrs({
    width: 0,
    height: 0,
    sizes: "100vw",
    alt: "productImage"
})`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const AdminProductInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AdminProductTitle = styled.span`
    font-size: 20px;
    font-weight: 400;
    color: #ccc;
`

export const AdminProductMenuWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const AdminProductMenuToggleButton = styled.button`
    width: 30px;
    aspect-ratio: 1;
    border: 1px solid transparent;
    background-color: transparent;
    cursor: pointer;
    &:hover, &:focus-visible, &:active{
        outline: 1px solid transparent;
    }
    
    &:hover > svg, &:focus-visible > svg, &:active > svg{
        fill: #780c0c;
    }
`

export const AdminMenuToggleSVG = styled(MenuToggleSVG)`
    display: block;
    width: 100%;
    height: 100%;
    fill: #ccc;
    object-fit: contain;
    transition: fill 0.3s;
    
`


export const AdminProductMenuContainer = styled.div<{$isShown : boolean}>`
    position: absolute;
    border-radius: 4px;
    right: 0;
    top: calc(100% + 2px);
    display: flex;
    overflow: hidden;
    
    flex-direction: column;
    align-items: flex-start;
    background-color: #333;

    transition: opacity 0.3s;

    opacity: ${props => props.$isShown? 1: 0};
    pointer-events: ${props => props.$isShown? "all": "none"};
    user-select: ${props => props.$isShown? "all": "none"};
`

export const AdminProductMenuLink = styled(Link)`
    width: 100%;
    font-size: 14px;
    font-weight: 300;
    color: #ccc;
    padding: 10px;
    transition: background-color 0.3s;
    user-select: none;

    &:hover, &:focus-visible, &:active{
        background-color: #444;
        outline: 1px solid transparent;
    }
`

export const AdminProductMenuButton = styled.button`
    width: 100%;
    font-size: 14px;
    font-weight: 300;
    color: #ccc;
    padding: 10px;
    transition: background-color 0.3s;
    border: 1px solid transparent;
    background-color: transparent;
    user-select: none;

    cursor: pointer;

    &:hover, &:focus-visible, &:active{
        background-color: #444;
        outline: 1px solid transparent;
    }
`

export const AdminProductsNotExist = styled.span`
    width: 100%;
    font-size: 14px;
    font-weight: 300;
    color: #ccc;
    padding: 10px;
    transition: background-color 0.3s;
    border: 1px solid transparent;
    background-color: transparent;
    user-select: none;

    
`


