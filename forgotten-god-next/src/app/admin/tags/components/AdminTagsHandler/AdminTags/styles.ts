"use client"
import Link from "next/link";
import styled from "styled-components";

import MenuToggleSVG from "@/app/admin/products/public/menu-toggle.svg"


export const AdminProductsContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    gap: 10px;
`

export const AdminTagWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    gap: 20px;
    background-color: #212121;
    border-radius: 4px;
`


export const AdminTagInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
`

export const AdminTagTitle = styled.span`
    font-size: 20px;
    font-weight: 400;
    color: #ccc;
`

export const AdminTagMenuWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const AdminTagMenuToggleButton = styled.button`
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


export const AdminTagMenuContainer = styled.div<{$isShown : boolean}>`
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

export const AdminTagMenuLink = styled(Link)`
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

export const AdminTagMenuButton = styled.button`
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

export const AdminTagsNotExist = styled.span`
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

