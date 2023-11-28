"use client"
import styled from "styled-components"
import Link from "next/link"
import CartSVG from "../../public/cart.svg";
import WishlistSVG from "../../public/wishlist.svg";

export const StoreBrowsePanel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px 30px;
    width: 100%;
    
    position: sticky;
    background-color: var(--main-color-black);
    z-index: 1999;
    top: 0;
    column-gap: 20px;
    @media (max-width: 600px) {
        justify-content: flex-start;
        padding: 10px 20px;
        max-width: 100svw;
        column-gap: 15px;
        row-gap: 10px;
        flex-wrap: wrap;
    }
    
    
`


export const WishlistLinkSVG = styled(WishlistSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #ccc;
    transition: fill 0.3s ease-in-out;
    @media (max-width: 600px) {
        width: 30px;
        height: 30px;
        padding: 0;
    }
`

export const WishlistLink = styled(Link)`
    width: 30px;
    height: 30px;
    &:hover, &:focus{
        outline: 1px solid transparent;
    }
    &:hover > ${WishlistLinkSVG}, &:focus > ${WishlistLinkSVG}{
        fill: #780c0c;
    }
    
`


export const CartLinkSVG = styled(CartSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #ccc;
    transition: fill 0.3s ease-in-out;
    @media (max-width: 600px) {
        width: 30px;
        height: 30px;
        padding: 0;
    }
`

export const CartLink = styled(Link)`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    &:hover, &:focus{
        outline: 1px solid transparent;
    }
    &:hover > ${CartLinkSVG}, &:focus > ${CartLinkSVG}{
        fill: #780c0c;
    }
`