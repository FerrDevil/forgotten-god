"use client"

import styled from "styled-components";


export const CartPageWrapper = styled.div`
    display: flex;
    gap: clamp(20px, 10px + 2vw, 40px);
    padding: 20px clamp(10px, 2vw, 20px);
    width: 100%;
    flex-direction: column;
`

export const CartWrapper = styled.div`
    display: flex;
    gap: 40px;
    padding: 20px 20px;
    width: 100%;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const CartPageHeadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: min(10%, 80px) 20px;
`



export const CartPageHeading = styled.h1`
    font-size: clamp(18px, 2vw, 24px);
    font-weight: 500;
`







