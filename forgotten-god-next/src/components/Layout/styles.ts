'use client';
import styled from "styled-components";


export const ColoredAlignedFlexMain = styled.main`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: var(--main-color-black);
    row-gap: 24px;
    padding-left: 60px;
    @media (max-width: 768px) {
        padding-left: 0;
        padding-top: 60px;
    }
`
