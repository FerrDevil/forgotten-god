"use client"
import styled from "styled-components";


export const AdminDeleteProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #333;
    border-radius: 8px;
    user-select: none;
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

export const AdminDeleteProductsCaution = styled.p`
    
    font-size: 18px;
    font-weight: 400;
    color: #ccc;
    width: 100%;
`

export const AdminDeleteProductsProcedeButtons = styled.div`
    display: grid;
    width: 100%;
    
    align-items: center;
    gap: 10px;

    @media (min-width: 600px){
        grid-template-columns: 1fr 1fr;
    }
`

export const AdminDeleteProductsProcedeButton = styled.button`
    border: 1px solid transparent;
    background-color: #780c0c;
    color: #ccc;
    font-size: 20px;
    border-radius: 4px;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
    padding: 10px;

    &:hover, &:focus-visible, &:active{
        background-color: #ccc;
        color: #780c0c;
        border-color: #780c0c;
    }

    cursor: pointer;

`

export const AdminDeleteProductsCancelButton = styled.button`
    border: 1px solid transparent;
    background-color: #780c0c;
    color: #ccc;
    font-size: 20px;
    border-radius: 4px;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
    padding: 10px;

    &:hover, &:focus-visible, &:active{
        background-color: #ccc;
        color: #780c0c;
        border-color: #780c0c;
    }

    cursor: pointer;

`