"use client"
import styled from "styled-components";


export const AdminDeleteProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #333;
    border-radius: 8px;
    user-select: none;
    max-width: 600px;
    width: 100%;
`

export const AdminDeleteProductsHeader = styled.h2`
    padding: 20px;
    font-size: 22px;
    font-weight: 700;
    color: #ccc;
    width: 100%;
    text-transform: uppercase;
    border-bottom: 0.5px solid #777;
`

export const AdminDeleteProductsBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

`

export const ProductFormGameTagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
`

export const ProductFormGameTagWrapper = styled.button`
    display: flex;
    flex-direction: row;
    gap: 5px;
    background-color: #555;
    padding: 0 5px;
    border-radius: 2px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover, &:focus-visible, &:active{
        background-color: #444;
    }
`

export const ProductFormGameTagName = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`

