"use client"
import styled from "styled-components"


import ExpandMoreSVG from "@/services/store/public/expand_more.svg"
import ExpandLessSVG from "@/services/store/public/expand_less.svg"
import Link from "next/link"

export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 900px;
    gap: 10px;
`

export const CartItemWrapper = styled.div<{$isDeleted: boolean}>`
    display: grid;
    grid-template-columns:  repeat(2, minmax(0, 1fr));
    grid-template-rows: 1fr;
    gap: clamp(15px, 2vw, 30px);
    width: 100%;
    background-color: #82705a;
    
    position: relative;
    overflow: hidden;

   
    mask-image: url("/images/fadeOutAnimation.png");

    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: 0% 0%;

    animation: ${props => props.$isDeleted? "cartItemfadeOut": "none"} forwards  1.5s cubic-bezier(0, 0, 0, 0.99) ;

    @keyframes cartItemfadeOut {
        from{
            pointer-events: none;
        }
        99%{
            grid-template-rows: 1fr;
        }

        100%{
            mask-position: 0% 400%;
            grid-template-rows: 0fr;
            pointer-events: none;
        }
    }
    /* @keyframes burnOut {
        from{
            opacity: 1;
            pointer-events: all;
        }
        to{
            opacity: 1;
            transform: translateY(0%);
            pointer-events: all;
        }
    } */

    /* &::before{
        content: "";
        position: absolute;
        opacity: 0;
        inset: 0;
        transform: translateY(100%);
        background-image: url("/images/burningAnimation.png");
        background-repeat: repeat-x;
        background-size: auto 100%;
        z-index: 1;
        pointer-events: none;

        animation: ${props => props.$isDeleted? "burnOut": "none"} forwards  1.5s cubic-bezier(0, 0, 0, 0.99) ;
    }
    */
`

export const CartItemInfo  = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding-block: 10px;
    position: relative;
`



export const CartItemTitle = styled.span`
    font-size: clamp(14px, 2vw, 24px);
    color: #ccc;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    
`

export const CartItemImageLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    aspect-ratio: 385/180;
    position: relative;
`

export const CartItemPrice = styled.span`
    font-size: clamp(16px, 2vw, 30px);
    color: #ccc;
    
`

export const CartItemDeleteButton = styled.button`
    font-size: clamp(12px, 1vw, 14px);
    color: #7e7b7b;
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.2s ease-in-out, text-decoration 0.2s ease-in-out;

    &:hover, &:focus{
        color: #ccc;
        text-decoration: none;
    }
`

export const EmptyCartMessage = styled.span`
    color: #ccc;
    text-transform: uppercase;
    white-space: nowrap;
    display: grid;
    font-size: clamp(16px, 2vw, 18px);
    margin-left: min(10%, 80px);

`

export const ExtendCartButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    
    background-color: #242424;
    border: none;
    width: 100%;
    padding: 5px 20px;

    cursor: pointer;
`

export const ExtendCartButtonText = styled.span`
    font-size: 18px;
    color: #ccc;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
`

export const ExpandCartMoreSVG = styled(ExpandMoreSVG)`
    width: 40px;
    height: 40px;
    object-fit: contain;
    fill: #ccc;
    
`
export const ExpandCartLessSVG = styled(ExpandLessSVG)`
    width: 40px;
    height: 40px;
    object-fit: contain;
    fill: #ccc;
`

