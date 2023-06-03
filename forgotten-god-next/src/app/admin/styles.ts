"use client"
import Link from "next/link";
import styled from "styled-components";

import UsersSVG from "./public/users.svg"
import SalesSVG from "./public/sales.svg"
import CreateProductSVG from "./public/create-product.svg"
import ProductsSVG from "./public/products.svg"
import TagsSVG from "./public/tag.svg"

export const AdminWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px 30px;
    gap: 10px;
`

export const AdminLinks = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: 100%;
    flex-wrap: wrap;
    padding: 5px 20px;
    position: sticky;
    top: 0;
    background-color: #111;
    z-index: 1000;
`

export const AdminPagesLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s;
    width: 45px;
    aspect-ratio: 1;

    &:hover, &:focus-visible, &:active{
        background-color: #323232;
        outline: none;
    }

    &:hover  span, &:focus-visible  span, &:active  span{
        opacity: 1;
        pointer-events: all;
        user-select: all;
        transition: opacity 0.3s .7s;
    }
    
`

export const AdminUsersSVG = styled(UsersSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #ccc;
    
`

export const AdminSalesSVG = styled(SalesSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #ccc;
    
`

export const AdminCreateProductSVG = styled(CreateProductSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #ccc;
    
`

export const AdminProductsSVG = styled(ProductsSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #ccc;
    
`

export const AdminTagsSVG = styled(TagsSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #ccc;
    
`


export const AdminPagesLinkDescription = styled.span`
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    font-size: 14px;
    color: #ccc;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
    top: calc(100% + 5px);
    background-color: #323232;
    padding: 5px 10px;
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    user-select: none;
    transition: opacity 0.2s;
    border: 1px solid #111;

    &::after{
        content: "";
        position: absolute;
        bottom: calc(100% );
        width: 10px;
        height: 5px;
        clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
        aspect-ratio: 1;
        background-color: #323232;
    }
    
`
export const AdminPanel = styled.div`

    display: block;


`
