'use client';
import styled from "styled-components";


export const ColoredAlignedFlexMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #111111;
    padding: 10px 0;
    max-width: 100vw;
    max-width: 100svw;
    min-height: 100%;
    height: 1px;
    row-gap: 24px;
    @media (max-width: 600px) {
        margin-bottom: 70px;
    }
`
