"use client"
import styled from "styled-components"

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