"use client"
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const UserPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px 30px;
`

export const UserOptions = styled.div`
    display: flex;
    flex-direction: column;

    padding: 5px 20px;
    position: sticky;
    top: 0;
    max-height: 100%;
`

export const UserOption = styled(Link)`
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    padding: 5px 20px;
    column-gap: 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover, &:focus{
        background-color: #323232;
        outline: none;
    }
    
`

export const UserOptionImage = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    
`
export const UserOptionText = styled.div`
    font-size: 20px;
    color: #ccc;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
    
`
export const UserPanel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

`

export const UserPanelTitle = styled.h1`
    font-size: 30px;
    font-weight: 700;

`

export const UserPanelLibrary = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;

`

export const UserPanelProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`

export const UserPanelProductImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;

`

export const UserPanelProductImage = styled(Image).attrs({
    width: 0,
    height: 0,
    alt: "productImage",
    sizes: "100vw"
})`
    width: 100%;
    height: 100%;
    object-fit: cover;

`
