import styled from "styled-components";

import ExpandMoreSVG from "../public/expand_more.svg"
import ExpandLessSVG from "../public/expand_less.svg"

export const CartPageWrapper = styled.div`
    display: grid;
    column-gap: 40px;
    grid-template-columns: 3fr 1fr;
    padding: 20px 40px;
    width: 100%;
`


export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    row-gap: 1px;
`

export const CartItem = styled.div`
    display: grid;
    font-size: 14px;
    grid-template-columns: 40px 20ch 10ch 1fr;
    place-items: center;
    position: relative;
    width: 100%;
    height: 50px;
    column-gap: 30px;
    background-color: #242424;
    padding: 5px 20px;
`
export const CartItemTitle = styled.span`
    font-size: 14px;
    color: #ccc;
    max-width: 20ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
`
export const CartItemImage = styled.img.attrs(() => ({
        alt: "cartItemImage",
        loading: "lazy"
}))`
    max-width: 40px;
    max-height: 40px;
    object-fit: cover;
    color: #ccc;
`

export const CartItemPrice = styled.span`
    font-size: 14px;
    color: #ccc;
    
`

export const CartItemDeleteButton = styled.button`
    font-size: 14px;
    color: #7e7b7b;
    justify-self: flex-end;
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

export const OrderBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
    flex: 0 0 calc(50%-20px);

`

export const OrderButton = styled.button`
    font-size: 20px;
    color: #ccc;
    border: 1px solid transparent;
    border-radius: 3px 0 0 3px;
    padding: 2px 30px;
    width: 100%;
    height: 50px;
    text-align: center;
    text-transform: uppercase;
    background-color: #780c0c;
    transition: border-color, color, background-color 0.3s ease-in-out ;
    cursor: pointer;

    &:hover{
        border-color: #780c0c;
        color: #780c0c; 
        background-color: #bbb;
    }
`

export const OrderPriceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
    margin-left: 10px;

`
export const OrderPriceTitle = styled.span`
    font-size: 14px;
    color: #ccc;
    text-transform: uppercase;
    white-space: nowrap;
`

export const OrderPriceSum = styled.span`
    font-size: 14px;
    color: #ccc;
    text-transform: uppercase;
    white-space: nowrap;
   
`


export const EmptyCartMessage = styled.span`
    font-size: 18px;
    color: #ccc;
    text-transform: uppercase;
    white-space: nowrap;
    display: grid;
    margin-left: 80px;
    width: 100%;

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

