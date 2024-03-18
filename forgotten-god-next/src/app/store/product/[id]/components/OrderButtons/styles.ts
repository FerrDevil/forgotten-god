"use client"
import styled from "styled-components"
import CartSVG from "@/app/store/product/[id]/public/cart.svg";
import SuccessSVG from "@/app/store/product/[id]/public/success.svg";
import Link from "next/link";

export const OrderButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: clamp(40px, 5vw, 50px);
    gap: 3px;
    width: 100%;
`

export const OrderButton = styled.button`
    all: unset;
    font-size: clamp(16px, 2vw, 20px);
    color: #ccc;
    border: 1px solid transparent;
    border-radius: 3px 0 0 3px;
    
    width: 100%;
    
    text-align: center;
    text-transform: uppercase;
    background-color: #780c0c;
    
    
    transition: border-color, color, background-color 0.3s ease-in-out ;
    cursor: pointer;

    &:hover, &:focus-visible, &:active{
        border-color: #780c0c;
        color: #780c0c; 
        background-color: #bbb;
    }


`


export const CartButtonSVG = styled(CartSVG)`
    object-fit: cover;
    width: 30px;
    height: 30px;
    aspect-ratio: 1;
    
    transition: fill 0.3s ease-in-out ;
`

export const SuccessButtonSVG = styled(SuccessSVG)`
    object-fit: cover;
    width: 30px;
    height: 30px;
    aspect-ratio: 1;
    fill: #ccc;
    transition: fill 0.3s ease-in-out ;
`

export const CartButton = styled.button`
    all: unset;
    display: grid;
    place-items: center;
    border-radius: 0 3px 3px 0;

    padding: 5px;
    
    background-color: #780c0c;
    cursor: pointer;
    border: 1px solid transparent;
    transition: fill, border-color, color, background-color 0.3s ease-in-out ;

    &:hover, &:focus-visible, &:active{
        border-color: #780c0c;
        color: #780c0c; 
        background-color: #bbb;
    }
    &:hover > svg, &:focus-visible > svg, &:active > svg{
        fill: #780c0c;
    }
`
export const UnauthorizedCartLink = styled(Link)`
    all: unset;
    display: grid;
    place-items: center;
    border-radius: 0 3px 3px 0;
    font-size: clamp(16px, 2vw, 20px);
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
    
    background-color: #780c0c;
    cursor: pointer;
    border: 1px solid transparent;
    transition: fill, border-color, color, background-color 0.3s ease-in-out ;

    &:hover, &:focus-visible, &:active{
        border-color: #780c0c;
        color: #780c0c; 
        background-color: #bbb;
    }
    &:hover > svg, &:focus-visible > svg, &:active > svg{
        fill: #780c0c;
    }
`