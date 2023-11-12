"use client"
import styled from "styled-components";

import CreateTagSVG from "@/app/admin/public/create-product.svg" 


export const AdminProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    gap: 10px;
`

export const AdminTagButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid transparent;
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

export const AdminCreateTagSVG = styled(CreateTagSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #ccc;
    
`




export const AdminTagButtonDescription = styled.span`
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
    border: 1px solid var(--main-color-black);

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

