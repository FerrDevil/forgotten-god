"use client"
import styled from "styled-components"
import Link from "next/link"
import CartSVG from "@/services/store/public/cart.svg";
import Image from "next/image";

export const SearchContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    width: 100%;
    gap: 10px 20px;
    padding: 5px 40px;

`


export const AddToCartSVG = styled(CartSVG)`
    width: 20px;
    height: 20px;
    object-fit: cover;
    fill: #ccc;
    cursor: pointer;
    transition: fill 0.25s ease-in-out;
    
`
export const AddToCartButton = styled.button`
    all: unset;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    transition: background-color 0.25s ease-in-out;
    background-color: #780c0c;
    display: grid;
    padding: 5px;
    border-radius: 4px;
    &:hover{
        background-color: #ccc;
    }
    &:hover > ${AddToCartSVG}{
        fill: #780c0c;
    }
`

export const SearchProduct = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    position: relative;
    border-radius: 5px;
    outline: 1px solid transparent;
    overflow: hidden;
    z-index: 1;
    
    &:hover, &:focus-visible{
        
        outline-color: #323232;
    }
`

export const SearchProductImageWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const SearchProductImage = styled(Image).attrs({
    alt:"productImage",
    width: 0,
    height: 0,
    sizes: "100vw"
})`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const SearchProductInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 10px;
    justify-content: space-between;
    column-gap: 10px;
    background-color: rgba(0, 0, 0, 0.5);
`

export const SearchProductTitle = styled.span`
    color: #ccc;
    font-size: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 17ch;
`

export const SearchProductPrice = styled.span`
    color: #ccc;
    font-size: 18px;
    white-space: nowrap;
    
`
export const SearchNoSuchProductsFound = styled.span`
    font-size: 20px;
    padding: 20px;
    color: #ccc;
    width: 100%;
    user-select: none;
    pointer-events: none;
    text-align: center;
`